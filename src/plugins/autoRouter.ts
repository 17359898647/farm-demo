import { getFileBasedRouteName } from 'unplugin-vue-router';
import AutoRouter from 'unplugin-vue-router/vite'

export function setupAutoRouter() {
  return AutoRouter({
    dts: 'src/types/auto-router.d.ts',
    exclude: ['**/_*', '**/_*/**/*'],
    getRouteName: getFileBasedRouteName,
    importMode: 'async',
    routesFolder: 'src/views',
  })
}
