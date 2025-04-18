import path from 'node:path';

import { defineConfig } from '@farmfe/core';
import postcss from '@farmfe/js-plugin-postcss';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'

import { setupAutoComponents } from './src/plugins/autoComponents';
import { setupAutoImport } from './src/plugins/autoImport';
import { setupAutoRouter } from './src/plugins/autoRouter';

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
    setupAutoRouter(),
    vue(),
    vueJsx(),
    setupAutoImport(),
    setupAutoComponents(),
  ],
});
