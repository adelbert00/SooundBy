<template>
  <Layout
    class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
  >
    <div class="p-8 px-4 py-16 text-white sm:px-6 lg:px-8">
      <h1 class="mb-8 text-center text-5xl font-bold">Sample Packi</h1>
      <p class="mb-16 text-center text-xl">
        Odkryj moją kolekcję starannie przygotowanych sample packów, idealnych
        do różnorodnych projektów audio.
      </p>

      <div
        class="sample-packs-container mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        <div
          v-for="(pack, index) in samplePacks"
          :key="index"
          class="overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img
            :src="pack.image"
            :alt="pack.title"
            class="h-64 w-full object-cover"
          />
          <div class="p-6">
            <h3 class="mb-4 text-xl font-semibold">{{ pack.title }}</h3>
            <ul class="mb-4 list-inside list-disc text-white">
              <li v-for="(item, i) in pack.description" :key="i">{{ item }}</li>
            </ul>
            <router-link
              to="#"
              class="inline-block rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-purple-700"
            >
              Podgląd
            </router-link>
          </div>
        </div>
      </div>
      <section
        class="relative mt-16 overflow-hidden rounded-3xl p-8 text-white"
      >
        <div
          class="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        ></div>
        <h2 class="mb-6 text-center text-3xl font-bold">
          Jak korzystać z naszych sampli?
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="rounded-lg bg-gray-800 p-6 shadow-xl">
            <h3 class="mb-4 text-xl font-semibold text-purple-400">
              Wskazówki
            </h3>
            <ul class="list-inside list-disc space-y-2 text-white">
              <li>
                Eksperymentuj z warstwowaniem dźwięków dla uzyskania bogatszych
                tekstur
              </li>
              <li>Używaj efektów, aby dostosować sample do swojego projektu</li>
              <li>
                Łącz różne sample packi dla stworzenia unikalnego brzmienia
              </li>
              <li>
                Nie bój się modyfikować sampli - to klucz do oryginalności!
              </li>
            </ul>
          </div>
          <div class="rounded-lg bg-gray-800 p-6 shadow-xl">
            <h3 class="mb-4 text-xl font-semibold text-purple-400">
              Proces twórczy
            </h3>
            <ol class="list-inside list-decimal space-y-2 text-white">
              <li>Wybierz odpowiedni sample pack do swojego projektu</li>
              <li>
                Przesłuchaj dostępne sample i wybierz te, które najlepiej pasują
              </li>
              <li>
                Zaimportuj wybrane sample do swojego DAW lub edytora audio
              </li>
              <li>Eksperymentuj z efektami i miksowaniem</li>
              <li>Dostosuj sample do tempa i tonacji twojego projektu</li>
              <li>Połącz sample z innymi elementami audio w twoim projekcie</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../Layouts/Layout.vue';

const samplePacks = [
  {
    title: 'Look Inside Volume 1',
    image: '/placeholder.svg?height=400&width=400',
    description: [
      '40 Melody loops',
      '7 MIDI Patterns, HiHats',
      'Some Bass Shots',
    ],
  },
  {
    title: 'Look Inside Volume 2',
    image: '/placeholder.svg?height=400&width=400',
    description: ['40 Melody Loops', '15 Drums Loops', '15 MIDI patterns'],
  },
  {
    title: 'Look Inside Volume 3',
    image: '/placeholder.svg?height=400&width=400',
    description: ['50 Melody Loops', '60 Drums', '60 Chord hits'],
  },
  {
    title: 'Look Inside Volume 4',
    image: '/placeholder.svg?height=400&width=400',
    description: ['51 Melody Loops', '54 Drums', '11 MIDI patterns'],
  },
];
</script>
