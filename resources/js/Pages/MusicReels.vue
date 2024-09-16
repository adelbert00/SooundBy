<template>
  <Layout
    class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mt-20 text-center">
        <h1 class="mb-8 text-5xl font-bold">Muzyka</h1>
        <p class="text-lg">
          Odkryj różnorodną kolekcję utworów, które odzwierciedlają moją pasję
          do tworzenia muzyki. Każda piosenka to unikalna podróż dźwiękowa,
          starannie skomponowana i wyprodukowana, aby inspirować i zachwycać
          słuchaczy.
        </p>
      </div>

      <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          v-for="(music, index) in musicList"
          :key="index"
          class="overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <div class="aspect-w-16 aspect-h-9 relative">
            <iframe
              :src="music.src"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="absolute inset-0 h-full w-full"
            ></iframe>
          </div>
          <div class="p-4">
            <h3 class="mb-2 text-xl font-semibold">{{ music.title }}</h3>
            <p class="mb-4 text-gray-400">Producent: {{ music.producer }}</p>
            <a
              :href="`https://www.youtube.com/watch?v=${music.src.split('/').pop()}`"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-4 inline-flex items-center text-purple-400 hover:text-purple-300"
            >
              <Play class="mr-2 h-5 w-5" />
              Odtwórz na YouTube
            </a>
            <button
              class="inline-flex items-center text-green-400 hover:text-green-300"
            >
              <Headphones class="mr-2 h-5 w-5" />
              Pobierz MP3
            </button>
          </div>
        </div>
      </div>

      <div class="mt-20 rounded-lg bg-gray-800 p-8 shadow-xl">
        <h2 class="mb-6 text-center text-3xl font-bold">
          Moje Podejście do Kompozycji Muzyki
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            class="rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 p-6 shadow-md"
          >
            <h3 class="mb-4 text-2xl font-semibold text-purple-400">
              Kluczowe Aspekty
            </h3>
            <ul class="list-inside list-disc space-y-2 text-gray-300">
              <li>Głęboka analiza narracji projektu i emocji</li>
              <li>Eksperymentowanie z różnymi instrumentami i dźwiękami</li>
              <li>Łączenie elementów z różnych gatunków muzycznych</li>
              <li>Współpraca z innymi muzykami w celu wzbogacenia brzmienia</li>
              <li>Ciagłe doskonalenie i poszukiwanie inspiracji</li>
            </ul>
          </div>
          <div
            class="rounded-lg bg-gradient-to-br from-indigo-900 to-purple-900 p-6 shadow-md"
          >
            <h3 class="mb-4 text-2xl font-semibold text-indigo-400">
              Proces Twórczy
            </h3>
            <ol class="list-inside list-decimal space-y-2 text-gray-300">
              <li>Analiza briefu i omówienie wizji z klientem</li>
              <li>Tworzenie szkiców muzycznych i tematów</li>
              <li>Rozwijanie wybranego tematu w pełną kompozycję</li>
              <li>Aranżacja i orkiestracja</li>
              <li>Nagrywanie i produkcja</li>
              <li>Miksowanie i mastering</li>
              <li>Prezentacja klientowi i wdrażanie feedbacku</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { Play, Headphones } from 'lucide-vue-next';
import { musicList } from '../constants/music-List.ts';
import Layout from '../Layouts/Layout.vue';
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.aspect-h-9 {
  position: relative;
}
</style>
