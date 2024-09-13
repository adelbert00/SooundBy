<template>
  <div>
    <TopBar class="pb-10" />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from '../Screens/TopBar.vue';
</script>

<style scoped></style>
