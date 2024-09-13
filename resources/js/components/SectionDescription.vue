<template>
  <div class="section-description shadow-lg">
    <h1 class="pb-3 font-bold sm:text-3xl xl:text-4xl">
      {{ title }}
    </h1>
    <p class="font-mono text-gray-900 sm:text-base xl:text-lg">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<style scoped>
.section-description {
  text-align: center;
  padding: 2rem;
}
</style>
