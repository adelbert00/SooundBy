<template>
  <div class="flex min-h-screen flex-col">
    <TopBar class="pb-40" />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer class="pt-40" />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/Screens/Footer.vue';
import TopBar from '../Screens/TopBar.vue';
</script>

<style scoped></style>
