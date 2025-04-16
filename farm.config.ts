import { defineConfig } from '@farmfe/core';
import postcss from '@farmfe/js-plugin-postcss';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  vitePlugins: [vue(), vueJsx()],
  plugins: [
    postcss(),
  ],
});
