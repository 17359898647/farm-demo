<script setup lang="tsx" >
import { darkTheme, dateZhCN, zhCN } from 'naive-ui';
</script>

<template >
  <NConfigProvider
    class="size-full relative overflow-hidden"
    :dateLocale="dateZhCN"
    :inlineThemeDisabled="true"
    :locale="zhCN"
    :theme="isDark ? darkTheme : null"
  >
    <NMessageProvider >
      <RouterLink to="/" >
        Home
      </RouterLink>
      <RouterLink to="/about" >
        About
      </RouterLink>
      <RouterLink to="/404" >
        404
      </RouterLink>
      <RouterView/>
      <NGlobalStyle/>
    </NMessageProvider>
  </NConfigProvider>
</template>
