import { defineConfig } from '@farmfe/core';
import postcss from '@farmfe/js-plugin-postcss';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  vitePlugins: [vue()],
  plugins: [
    postcss(),
  ],
});
