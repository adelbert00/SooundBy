<template>
  <Layout class="grain-effect min-h-screen text-black">
    <section class="mx-auto w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
      <div class="text-center" data-aos="fade-up">
        <h1 class="text-3xl font-bold sm:text-3xl md:text-5xl">Reel</h1>
        <p class="text-lg font-bold md:text-xl">
          Zobacz moje najlepsze prace w dziedzinie sound designu i kompozycji
          muzycznej.
        </p>
      </div>

      <Accordion type="multiple" class="mt-16" data-aos="fade-up">
        <AccordionItem
          v-for="(reel, index) in reels"
          :key="index"
          :value="`item-${index}`"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <AccordionTrigger>
            <div class="flex items-center justify-between p-4">
              <div class="min-w-0 flex-1 pr-4">
                <h3 class="text-left text-xl font-bold md:text-2xl">
                  {{ reel.title }}
                </h3>
                <p
                  class="truncate text-left text-lg font-bold text-black xl:text-xl"
                >
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
                data-aos="fade-up"
              ></iframe>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <section
        class="relative mt-20 overflow-hidden rounded-3xl"
        data-aos="fade-up"
      >
        <div
          class="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-white via-gray-800 to-black"
        ></div>
        <div class="rounded-lg bg-transparent p-8">
          <h2
            class="mb-10 text-center text-2xl font-bold md:text-3xl"
            data-aos="fade-right"
          >
            Proces twórczy
          </h2>
          <div
            class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
          >
            <div
              v-for="(item, index) in processSteps"
              :key="index"
              class="transform rounded-lg p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg"
              data-aos="zoom-in"
            >
              <div class="mb-2 text-3xl font-bold text-black">
                {{ item.step }}
              </div>
              <h3 class="mb-4 text-2xl font-bold text-black">
                {{ item.title }}
              </h3>
              <p class="text-xl font-bold text-black">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="relative mt-20 text-center" data-aos="fade-up">
      <h2 class="text-2xl font-bold md:text-3xl">
        Zobacz, jak mogę pomóc w Twoim projekcie.
      </h2>
      <p class="mt-4 font-lato text-lg font-bold text-black">
        Potrzebujesz unikalnych dźwięków lub współpracy przy produkcji audio?
        Skontaktuj się ze mną teraz!
      </p>

      <Button
        variant="outline"
        class="mx-auto mt-8 flex w-64 rounded-full px-4 py-2 text-xl font-bold text-black shadow-lg transition-transform hover:scale-105"
        :to="'/contact'"
      >
        Skontaktuj się
      </Button>
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
import Button from '@/components/ui/button/Button.vue';

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
