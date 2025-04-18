import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { VueRouterAutoImports } from 'unplugin-vue-router';

export function setupAutoImport() {
  return AutoImport({
    dirs: ['./src/composables'],
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
  })
}
