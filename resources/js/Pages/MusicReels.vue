<template>
  <Layout class="grain-effect min-h-screen text-white">
    <section class="mx-auto w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
      <div class="text-center">
        <h1 class="font-playfair text-2xl font-bold md:text-4xl xl:text-5xl">
          Muzyka
        </h1>
        <p class="font-lato text-lg font-normal md:text-xl">
          Odkryj różnorodną kolekcję utworów, które odzwierciedlają moją pasję
          do tworzenia muzyki. Każda piosenka to unikalna podróż dźwiękowa,
          starannie skomponowana i wyprodukowana, aby inspirować i zachwycać
          słuchaczy.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          v-for="(music, index) in musicList"
          :key="index"
          class="overflow-hidden rounded-lg bg-transparent shadow-lg"
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
            <h3 class="font-playfair text-xl font-semibold">
              {{ music.title }}
            </h3>
            <p class="font-lato text-base font-normal text-gray-400">
              Producent: {{ music.producer }}
            </p>
            <a
              :href="`https://www.youtube.com/watch?v=${music.src.split('/').pop()}`"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-4 inline-flex items-center text-purple-400 transition duration-300 hover:scale-105 hover:text-purple-300"
            >
              <Play class="mr-2 h-5 w-5" />
              Odtwórz na YouTube
            </a>
            <button
              class="inline-flex items-center text-green-400 transition duration-300 hover:scale-105 hover:text-green-300"
            >
              <Headphones class="mr-2 h-5 w-5" />
              Pobierz MP3
            </button>
          </div>
        </div>
      </div>

      <section class="relative mt-12 overflow-hidden rounded-3xl">
        <div
          class="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-white via-gray-800 to-black"
        ></div>
        <div class="mt-8 rounded-lg bg-transparent p-8 shadow-xl">
          <h2
            class="font-playfair mb-6 text-center text-2xl font-bold xl:text-4xl"
          >
            Moje Podejście do Kompozycji Muzyki
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div class="rounded-lg p-6 shadow-md">
              <h3
                class="font-playfair mb-4 text-2xl font-semibold text-gray-200"
              >
                Kluczowe Aspekty
              </h3>
              <ul
                class="font-lato list-inside list-disc space-y-2 text-lg text-gray-300"
              >
                <li>Głęboka analiza narracji projektu i emocji</li>
                <li>Eksperymentowanie z różnymi instrumentami i dźwiękami</li>
                <li>Łączenie elementów z różnych gatunków muzycznych</li>
                <li>
                  Współpraca z innymi muzykami w celu wzbogacenia brzmienia
                </li>
                <li>Ciągłe doskonalenie i poszukiwanie inspiracji</li>
              </ul>
            </div>
            <div class="rounded-lg p-6 shadow-md">
              <h3
                class="font-playfair mb-4 text-2xl font-semibold text-gray-200"
              >
                Proces Twórczy
              </h3>
              <ol
                class="font-lato list-inside list-decimal space-y-2 text-lg text-gray-300"
              >
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
      </section>
    </section>
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
