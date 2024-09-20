<template>
  <div
    class="sample-pack-card relative transform rounded-lg p-4 shadow-lg transition-transform duration-500 hover:scale-105"
  >
    <div class="relative z-10">
      <img :src="pack.imageSrc" :alt="pack.name" class="cover-image" />
      <h2 class="pack-name mt-2 text-xl font-semibold">{{ pack.name }}</h2>
      <ul class="contents-list ml-5 mt-2 list-disc">
        <li v-for="(content, index) in pack.contents" :key="index">
          {{ content }}
        </li>
      </ul>
      <a
        :href="pack.previewLink"
        target="_blank"
        class="preview-link mt-4 inline-block font-bold text-blue-500 hover:underline"
      >
        Podgląd
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SamplePack } from '../interfaces/SamplePack';

defineProps<{
  pack: SamplePack;
}>();
</script>

<style scoped>
.cover-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
