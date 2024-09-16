<template>
  <Layout
    class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mt-20">
        <h1 class="text-center text-5xl font-bold">Sekcje Audio</h1>
        <p class="text-center text-lg">
          Poniżej znajdują się różne sekcje zawierające różne typy odtwarzaczy
          audio, w tym partytury muzyczne, efekty dźwiękowe, przykłady foley i
          przykłady perkusji. Przeglądaj każdą sekcję, aby znaleźć różne rodzaje
          zawartości audio.
        </p>
      </div>

      <div class="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div
          v-for="(track, index) in audioCategories"
          :key="index"
          class="overflow-hidden rounded-3xl bg-gradient-to-br"
          :class="track.color"
        >
          <div class="p-8">
            <h2 class="mb-6 text-3xl font-bold text-white">
              {{ track.title }}
            </h2>
            <div class="space-y-4">
              <div
                v-for="(example, i) in track.examples"
                :key="i"
                class="rounded-xl bg-black bg-opacity-30 p-4"
              >
                <h3 class="mb-2 text-xl font-medium text-white">
                  {{ example.title }}
                </h3>
                <audio controls class="w-full">
                  <source :src="example.src" type="audio/mpeg" />
                  Twój przeglądarka nie obsługuje elementu audio.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 rounded-lg bg-gray-800 p-8 shadow-xl">
        <h2 class="mb-8 text-center text-3xl font-bold">
          Dlaczego Jakość Dźwięku Jest Ważna
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            class="rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 p-6 shadow-md"
          >
            <h3 class="mb-4 text-2xl font-semibold text-purple-400">
              Korzyści z Wysokiej Jakości Dźwięku
            </h3>
            <ul class="list-inside list-disc space-y-2 text-gray-300">
              <li>Zwiększa immersję i zaangażowanie</li>
              <li>Buduje atmosferę i wzmacnia emocje</li>
              <li>Poprawia ogólną jakość projektu i profesjonalizm</li>
              <li>Może być kluczowym elementem budowania marki</li>
              <li>Wspiera narrację i przekaz</li>
            </ul>
          </div>
          <div
            class="rounded-lg bg-gradient-to-br from-indigo-900 to-purple-900 p-6 shadow-md"
          >
            <h3 class="mb-4 text-2xl font-semibold text-indigo-400">
              Moje Podejście do Jakości Dźwięku
            </h3>
            <ul class="list-inside list-disc space-y-2 text-gray-300">
              <li>Wykorzystanie najwyższej jakości sprzętu nagrywającego</li>
              <li>Zastosowanie zaawansowanych technik przetwarzania dźwięku</li>
              <li>Zwracanie uwagi na szczegóły i niuanse w każdym projekcie</li>
              <li>
                Dopasowanie dźwięku do konkretnego medium (film, gra, reklama)
              </li>
              <li>Współpraca z ekspertami w dziedzinie masteringu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { audioCategories } from '@/constants/audio-export';
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
