<!-- ./components/SiteHeader.vue -->
<template>
  <header class="site-header">
    <div class="wrapper">
      <NuxtLink class="flex gap-2 items-center text-teal-600" to="/">
        <figure class="site-logo">
          <span class="font-black text-xl uppercase">GizmoGenius</span>
        </figure>
        <span> | Knowledge Base</span>
      </NuxtLink>
    </div>
  </header>
</template>
<style scoped>
@import url("~/assets/css/components/SiteHeader.css");
</style>
