<template>
  <TopBar />
  <div>
    <SectionDescription
      title="Sample Packs"
      description="Explore our collection of sample packs."
    />
    <div
      class="sample-packs-container mt-8 flex flex-wrap justify-center gap-4"
    >
      <SamplePackCard
        v-for="pack in samplePacks"
        :key="pack.name"
        :pack="pack"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { samplePacks } from '../constants/samplePacks';
import SectionDescription from '../components/SectionDescription.vue';
import SamplePackCard from '../components/SamplePackCard.vue';
import TopBar from '../Screens/TopBar.vue';
</script>
