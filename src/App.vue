<script setup>
// App uses router-view to display pages
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-slide" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
  
</template>

<style>
/* Global styles are in style.css */
</style>
