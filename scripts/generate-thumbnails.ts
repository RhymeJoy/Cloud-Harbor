import sharp from 'sharp';
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(projectRoot, 'public', 'products');
const thumbnailDirectoryName = '_thumbnails';
const thumbnailRoot = path.join(sourceRoot, thumbnailDirectoryName);
const supportedExtensions = new Set(['.avif', '.webp', '.png', '.jpg', '.jpeg']);
const thumbnailWidth = 560;

type ImageJob = {
  source: string;
  target: string;
};

const toAvifTarget = (sourcePath: string) => {
  const relativePath = path.relative(sourceRoot, sourcePath);
  const parsed = path.parse(relativePath);

  return path.join(thumbnailRoot, parsed.dir, `${parsed.name}.avif`);
};

const collectImages = async (directory: string): Promise<ImageJob[]> => {
  const jobs: ImageJob[] = [];
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === thumbnailDirectoryName) {
        continue;
      }

      jobs.push(...await collectImages(entryPath));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();

    if (!supportedExtensions.has(extension)) {
      continue;
    }

    jobs.push({
      source: entryPath,
      target: toAvifTarget(entryPath)
    });
  }

  return jobs;
};

const shouldGenerate = async ({ source, target }: ImageJob) => {
  try {
    const [sourceStats, targetStats] = await Promise.all([stat(source), stat(target)]);

    return targetStats.mtimeMs < sourceStats.mtimeMs;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return true;
    }

    throw error;
  }
};

const renderThumbnail = async ({ source, target }: ImageJob) => {
  await mkdir(path.dirname(target), { recursive: true });

  await sharp(source)
    .rotate()
    .resize({ width: thumbnailWidth, withoutEnlargement: true })
    .avif({ quality: 55, effort: 6 })
    .toFile(target);
};

const main = async () => {
  const jobs = await collectImages(sourceRoot);
  let generated = 0;
  let skipped = 0;

  for (const job of jobs) {
    if (await shouldGenerate(job)) {
      await renderThumbnail(job);
      generated += 1;
      console.log(`Generated ${path.relative(projectRoot, job.target)}`);
      continue;
    }

    skipped += 1;
  }

  console.log(`Thumbnail generation complete. Generated: ${generated}, skipped: ${skipped}.`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
