import path from 'node:path';

import { defineConfig } from '@farmfe/core';
import postcss from '@farmfe/js-plugin-postcss';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoComponents from 'unplugin-vue-components/vite'
import { getFileBasedRouteName, VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
  vitePlugins: [
    VueRouter({
      dts: 'src/types/auto-router.d.ts',
      exclude: ['**/_*', '**/_*/**/*'],
      getRouteName: getFileBasedRouteName,
      importMode: 'async',
      routesFolder: 'src/views',
    }),
    vue(),
    vueJsx(),
    AutoImport({
      dirs: ['./src/httpApi', './src/composables', './src/utils', './src/store/modules', './src/naiveHooks', './src/https'],
      dts: './src/types/auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: 'src/types/.eslintrc-auto-import.json',
        globalsPropValue: 'readonly',
      },
      imports: ['pinia', '@vueuse/core', 'vue', VueRouterAutoImports],
      include: [/\.vue\??/, /\.tsx?$/],
      resolvers: [NaiveUiResolver()],
      vueTemplate: true,
      viteOptimizeDeps: false,
    }),
    AutoComponents({
      dirs: ['src/components'],
      dts: './src/types/auto-components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),
  ],
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
});
