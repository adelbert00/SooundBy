<template>
  <div class="flex min-h-screen flex-col">
    <TopBar class="pb-20" />
    <main class="flex-grow">
      <div class="mx-auto w-full max-w-7xl">
        <slot />
      </div>
    </main>
    <Footer class="pt-20" />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/Screens/Footer.vue';
import TopBar from '../Screens/TopBar.vue';
</script>
