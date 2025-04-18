import path from 'node:path';

import { defineConfig } from '@farmfe/core';
import postcss from '@farmfe/js-plugin-postcss';
import vue from '@vitejs/plugin-vue';
import Inspector from 'unplugin-vue-inspector/vite'

export default defineConfig({
  plugins: [
    postcss(),
  ],
  compilation: {
    resolve: {
      alias: {
        '@': path.join(process.cwd(), 'src'),
      },
    },
  },
  vitePlugins: [
    vue(),
    Inspector(),
  ],
});
