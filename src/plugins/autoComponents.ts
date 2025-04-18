import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import AutoComponents from 'unplugin-vue-components/vite'

export function setupAutoComponents() {
  return AutoComponents({
    dirs: ['src/components'],
    dts: './src/types/auto-components.d.ts',
    resolvers: [NaiveUiResolver()],
  })
}
