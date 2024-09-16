<template>
  <Layout
    class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mt-20">
        <h1 class="text-center text-5xl font-bold">Reel</h1>
        <p class="text-center text-lg">
          Zobacz moje najlepsze prace w dziedzinie sound designu i kompozycji
          muzycznej.
        </p>
      </div>

      <div class="mt-20">
        <Accordion type="multiple">
          <AccordionItem
            v-for="(reel, index) in reels"
            :key="index"
            :value="`item-${index}`"
          >
            <AccordionTrigger>
              <div class="flex items-center justify-between p-4">
                <div class="min-w-0 flex-1 pr-4">
                  <h3 class="truncate text-left text-xl font-semibold">
                    {{ reel.title }}
                  </h3>
                  <p class="truncate text-left text-gray-300">
                    {{ reel.subtitle }}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="mt-4 flex justify-center">
                <div class="aspect-w-16 aspect-h-7 w-full max-w-full">
                  <iframe
                    :src="reel.src"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="absolute h-full w-full"
                  ></iframe>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <section class="mt-20 rounded-lg bg-gray-800 p-8 shadow-xl">
        <h2 class="mb-6 text-center text-3xl font-bold">Proces twórczy</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(item, index) in processSteps"
            :key="index"
            class="transform rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 p-6 shadow-md transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div class="mb-2 text-3xl font-bold text-purple-400">
              {{ item.step }}
            </div>
            <h3 class="mb-2 text-xl font-semibold text-white">
              {{ item.title }}
            </h3>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Layout from '../Layouts/Layout.vue';
import { reels } from '@/constants/design-reels';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const processSteps = ref([
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
]);
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 43.75%;
}
.aspect-h-7 {
  position: relative;
}
</style>
