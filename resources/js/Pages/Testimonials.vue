<template>
  <section
    class="mx-auto w-full max-w-7xl bg-transparent px-4 py-12 text-black"
  >
    <h2 class="mb-8 text-center font-playfair text-2xl font-bold md:text-3xl">
      Opinie Klientów
    </h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
      >
        <p class="mb-4 font-lato text-black">"{{ testimonial.quote }}"</p>
        <h3 class="font-playfair text-xl font-semibold">
          {{ testimonial.name }}
        </h3>
        <p class="font-lato text-black">{{ testimonial.position }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const testimonials = ref([
  {
    quote:
      'Współpraca z Wojciechem była fantastyczna! Profesjonalizm na najwyższym poziomie.',
    name: 'Anna Kowalska',
    position: 'Producent muzyczny',
  },
  {
    quote:
      'Współpraca z Wojciechem była fantastyczna! Profesjonalizm na najwyższym poziomie.',
    name: 'Anna Kowalska',
    position: 'Producent muzyczny',
  },
  {
    quote:
      'Współpraca z Wojciechem była fantastyczna! Profesjonalizm na najwyższym poziomie.',
    name: 'Anna Kowalska',
    position: 'Producent muzyczny',
  },
]);
</script>
