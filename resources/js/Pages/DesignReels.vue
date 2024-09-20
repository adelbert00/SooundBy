<template>
  <Layout
    class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white"
  >
    <section class="mx-auto w-full max-w-7xl px-4">
      <div class="text-center">
        <h1 class="text-2xl font-bold md:text-4xl xl:text-5xl">Reel</h1>
        <p class="text-lg md:text-xl">
          Zobacz moje najlepsze prace w dziedzinie sound designu i kompozycji
          muzycznej.
        </p>
      </div>

      <Accordion type="multiple" class="mt-16">
        <AccordionItem
          v-for="(reel, index) in reels"
          :key="index"
          :value="`item-${index}`"
        >
          <AccordionTrigger>
            <div class="flex items-center justify-between p-4">
              <div class="min-w-0 flex-1 pr-4">
                <h3 class="text-left text-lg font-semibold md:text-xl">
                  {{ reel.title }}
                </h3>
                <p class="truncate text-left text-gray-300">
                  {{ reel.subtitle }}
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div class="mt-4 flex w-full justify-center">
              <iframe
                :src="reel.src"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="h-64 w-full md:h-96"
              ></iframe>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <section class="relative mt-20 overflow-hidden rounded-3xl">
        <div
          class="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        ></div>
        <div class="rounded-lg bg-gray-800 p-8 shadow-xl">
          <h2 class="mb-10 text-center text-2xl font-bold md:text-3xl">
            Proces twórczy
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(item, index) in processSteps"
              :key="index"
              class="transform rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 p-6 shadow-md transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div class="mb-2 text-2xl font-bold text-purple-400">
                {{ item.step }}
              </div>
              <h3 class="mb-2 text-xl font-semibold text-white">
                {{ item.title }}
              </h3>
              <p class="text-gray-300">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
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
    description: 'Zrozumienie potrzeb klienta i celów projektu.',
  },
  {
    step: '2',
    title: 'Koncepcja dźwiękowa',
    description: 'Tworzenie unikalnej koncepcji dźwiękowej.',
  },
  {
    step: '3',
    title: 'Produkcja i nagrywanie',
    description: 'Tworzenie i nagrywanie dźwięków.',
  },
  {
    step: '4',
    title: 'Edycja i miksowanie',
    description: 'Precyzyjne dopracowanie materiału audio.',
  },
  {
    step: '5',
    title: 'Feedback i iteracje',
    description: 'Dostosowywanie na podstawie opinii klienta.',
  },
  {
    step: '6',
    title: 'Finalizacja',
    description: 'Dostarczenie gotowego produktu audio.',
  },
]);
</script>

<style scoped></style>
