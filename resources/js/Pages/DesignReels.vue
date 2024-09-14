<template>
  <Layout>
    <!-- Reel Section -->
    <section id="reel" class="section space-y-16">
      <!-- Reel Videos -->
      <div class="rounded-3xl p-8">
        <h1
          class="font-custom bg-clip-text text-3xl font-normal text-black md:text-4xl"
        >
          Reel
        </h1>
        <p class="mb-8 text-lg text-gray-700">
          Zobacz moje najlepsze prace w dziedzinie sound designu i kompozycji
          muzycznej.
        </p>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            v-for="index in 4"
            :key="index"
            class="h-[300px] w-[800px] transform overflow-hidden rounded-lg shadow-lg transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <iframe
              :src="`https://www.youtube.com/embed/dQw4w9WgXcQ?${index}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Creative Process Section -->
      <div class="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg">
        <div
          class="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
        ></div>
        <h2 class="mb-6 text-3xl font-bold text-gray-800">Proces twórczy</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(item, index) in creativeProcess"
            :key="index"
            class="transform rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 shadow-md transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div class="mb-2 text-3xl font-bold text-orange-500">
              {{ item.step }}
            </div>
            <h3 class="mb-2 text-xl font-semibold text-gray-800">
              {{ item.title }}
            </h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../Layouts/Layout.vue';

const creativeProcess = [
  {
    step: '1',
    title: 'Analiza projektu',
    description: 'Zrozumienie potrzeb klienta i celów projektu',
  },
  {
    step: '2',
    title: 'Koncepcja dźwiękowa',
    description: 'Tworzenie unikalnej koncepcji dźwiękowej',
  },
  {
    step: '3',
    title: 'Produkcja i nagrywanie',
    description: 'Tworzenie i nagrywanie dźwięków',
  },
  {
    step: '4',
    title: 'Edycja i miksowanie',
    description: 'Precyzyjne dopracowanie materiału audio',
  },
  {
    step: '5',
    title: 'Feedback i iteracje',
    description: 'Dostosowywanie na podstawie feedbacku klienta',
  },
  {
    step: '6',
    title: 'Finalizacja',
    description: 'Dostarczenie gotowego produktu audio',
  },
];
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
}
.aspect-h-9 iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
