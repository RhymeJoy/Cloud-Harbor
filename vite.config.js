import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const basePath = '/Cloud-Harbor/';
const entryPath = fileURLToPath(new URL('./src/main.js', import.meta.url));

const renderDocument = ({ script = '/src/main.js', styles = [] } = {}) => {
  const styleTags = styles
    .map((href) => `    <link rel="stylesheet" crossorigin href="${href}">`)
    .join('\n');

  return `<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/svg+xml" href="${basePath}favicon.svg">
${styleTags ? `${styleTags}\n` : ''}  </head>
  <body>
    <script type="module" crossorigin src="${script}"></script>
  </body>
</html>
`;
};

const withBase = (fileName) => `${basePath}${fileName}`;

const vueOnlyEntry = () => ({
  name: 'vue-only-entry',
  configureServer(server) {
    server.middlewares.use(async (request, response, next) => {
      const path = request.url?.split('?')[0] ?? '/';
      const entryPaths = new Set(['/', '/index.html', basePath, `${basePath}index.html`]);

      if (request.method !== 'GET' || !entryPaths.has(path)) {
        next();
        return;
      }

      try {
        const html = await server.transformIndexHtml(request.url ?? '/', renderDocument());

        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(html);
      } catch (error) {
        next(error);
      }
    });
  },
  generateBundle(_, bundle) {
    const entry = Object.values(bundle).find((file) => file.type === 'chunk' && file.isEntry);

    if (!entry) {
      this.error('Unable to create the Vue document because no entry chunk was emitted.');
    }

    const styles = Object.values(bundle)
      .filter((file) => file.type === 'asset' && file.fileName.endsWith('.css'))
      .map((file) => withBase(file.fileName));

    this.emitFile({
      type: 'asset',
      fileName: 'index.html',
      source: renderDocument({
        script: withBase(entry.fileName),
        styles
      })
    });
  }
});

export default defineConfig({
  plugins: [vueOnlyEntry(), vue()],
  base: basePath,
  build: {
    rollupOptions: {
      input: entryPath
    }
  }
});
