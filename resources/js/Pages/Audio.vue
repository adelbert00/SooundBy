<template>
  <Layout
    class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white"
  >
    <section class="mx-auto w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
      <div class="text-center">
        <h1 class="text-2xl font-bold md:text-4xl xl:text-5xl">Sekcje Audio</h1>
        <p class="text-lg md:text-xl">
          Poniżej znajdują się różne sekcje zawierające różne typy odtwarzaczy
          audio, w tym partytury muzyczne, efekty dźwiękowe, przykłady foley i
          przykłady perkusji. Przeglądaj każdą sekcję, aby znaleźć różne rodzaje
          zawartości audio.
        </p>
      </div>

      <div
        class="mt-12 grid grid-cols-1 gap-12 rounded-3xl bg-opacity-30 md:grid-cols-2 xl:p-8"
      >
        <div
          v-for="(track, index) in audioCategories"
          :key="index"
          class="overflow-hidden rounded-3xl bg-gradient-to-br p-8 transition duration-300 hover:scale-105"
          :class="track.color"
        >
          <h2 class="mb-6 text-xl font-bold text-white md:text-2xl">
            {{ track.title }}
          </h2>
          <div class="space-y-4">
            <CustomAudioPlayer
              v-for="(example, i) in track.examples"
              :key="i"
              :src="example.src"
              :title="example.title"
            />
          </div>
        </div>
      </div>

      <section class="relative mt-12 overflow-hidden rounded-3xl">
        <div
          class="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        ></div>
        <div class="mt-8 rounded-lg bg-gray-800 p-8 shadow-xl">
          <h2 class="mb-8 text-center text-2xl font-bold xl:text-4xl">
            Dlaczego Jakość Dźwięku Jest Ważna
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div
              class="rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 p-6 shadow-md transition duration-300 hover:scale-105"
            >
              <h3
                class="mb-4 text-xl font-semibold text-purple-400 md:text-2xl"
              >
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
              class="rounded-lg bg-gradient-to-br from-indigo-900 to-purple-900 p-6 shadow-md transition duration-300 hover:scale-105"
            >
              <h3
                class="mb-4 text-xl font-semibold text-indigo-400 md:text-2xl"
              >
                Moje Podejście do Jakości Dźwięku
              </h3>
              <ul class="list-inside list-disc space-y-2 text-gray-300">
                <li>Wykorzystanie najwyższej jakości sprzętu nagrywającego</li>
                <li>
                  Zastosowanie zaawansowanych technik przetwarzania dźwięku
                </li>
                <li>
                  Zwracanie uwagi na szczegóły i niuanse w każdym projekcie
                </li>
                <li>
                  Dopasowanie dźwięku do konkretnego medium (film, gra, reklama)
                </li>
                <li>Współpraca z ekspertami w dziedzinie masteringu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Store />
    </section>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../Layouts/Layout.vue';
import CustomAudioPlayer from '../components/ui/CustomAudioPlayer.vue';
import { audioCategories } from '@/constants/audio-export';
import Store from './Store.vue';
</script>
