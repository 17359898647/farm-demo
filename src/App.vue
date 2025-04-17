<script setup lang="tsx" >
</script>

<template >
  <div class="bg-red-500 h-screen w-screen" >
    <RouterLink to="/about" >
      about
    </RouterLink>
    <RouterLink to="/" >
      index
    </RouterLink>
    <RouterLink to="/home" >
      home
    </RouterLink>
    <RouterView/>
    <NSpace >
      <NTag > 爱在西元前 </NTag>
      <NTag type="success" >
        不该
      </NTag>
      <NTag type="warning" >
        超人不会飞
      </NTag>
      <NTag type="error" >
        手写的从前
      </NTag>
      <NTag type="info" >
        哪里都是你
      </NTag>
    </NSpace>
  </div>
</template>
