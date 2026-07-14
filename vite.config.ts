import { fileURLToPath, URL } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';

const basePath = '/Cloud-Harbor/';
const entryPath = fileURLToPath(new URL('./src/main.ts', import.meta.url));

type RenderDocumentOptions = {
  script?: string;
  styles?: string[];
};

const renderDocument = ({ script = '/src/main.ts', styles = [] }: RenderDocumentOptions = {}) => {
  const styleTags = styles
    .map((href) => `    <link rel="stylesheet" crossorigin href="${href}">`)
    .join('\n');

  return `<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="${basePath}favicon.ico">
${styleTags ? `${styleTags}\n` : ''}  </head>
  <body>
    <script type="module" crossorigin src="${script}"></script>
  </body>
</html>
`;
};

const withBase = (fileName: string) => `${basePath}${fileName}`;
const routePaths = ['', 'products/'];

const vueOnlyEntry = (): Plugin => ({
  name: 'vue-only-entry',
  configureServer(server) {
    server.middlewares.use(async (request, response, next) => {
      const path = request.url?.split('?')[0] ?? '/';
      const entryPaths = new Set([
        '/',
        '/index.html',
        basePath,
        `${basePath}index.html`,
        `${basePath}products`,
        `${basePath}products/`,
        `${basePath}products/index.html`
      ]);

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

    const source = renderDocument({
      script: withBase(entry.fileName),
      styles
    });

    for (const routePath of routePaths) {
      this.emitFile({
        type: 'asset',
        fileName: `${routePath}index.html`,
        source
      });
    }
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
