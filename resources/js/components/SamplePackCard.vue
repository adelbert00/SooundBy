<template>
  <div class="sample-pack-card p-4 shadow-lg">
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
      class="preview-link mt-4 inline-block text-blue-500 hover:underline"
    >
      Podgląd
    </a>
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
  width: 10%;
  height: auto;
  object-fit: cover;
}
</style>
