import presetWind4 from '@unocss/preset-wind4'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ],
  },
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        cursor: 'pointer',
        display: 'inline-block',
      },
      prefix: 'icon-',
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        mono: 'DM Mono',
        sans: 'DM Sans',
        serif: 'DM Serif Display',
      },
    }),
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'red': 'border-red-500 border-solid border',
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
