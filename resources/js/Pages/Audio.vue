<template>
  <Layout class="grain-effect min-h-screen text-black">
    <section class="mx-auto w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
      <div class="text-center" data-aos="fade-up">
        <h1 class="text-3xl font-bold sm:text-3xl md:text-5xl">Sekcje Audio</h1>
        <p class="font-lato text-lg font-bold md:text-xl">
          Poniżej znajdują się różne sekcje zawierające różne typy odtwarzaczy
          audio, w tym partytury muzyczne, efekty dźwiękowe, przykłady foley i
          przykłady perkusji. Przeglądaj każdą sekcję, aby znaleźć różne rodzaje
          zawartości audio.
        </p>
      </div>

      <div
        class="mt-12 grid grid-cols-1 gap-12 rounded-3xl p-1 md:grid-cols-2 xl:p-8"
        data-aos="fade-up"
      >
        <div
          v-for="(track, index) in audioCategories"
          :key="index"
          class="overflow-hidden rounded-3xl border-4 border-gray-200 bg-transparent p-8 font-bold shadow-lg transition duration-300 hover:scale-105"
          :class="track.color"
          data-aos="zoom-in"
        >
          <h2 class="mb-6 text-xl font-bold text-black md:text-2xl">
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

      <section
        class="relative mt-12 overflow-hidden rounded-3xl"
        data-aos="fade-up"
      >
        <div
          class="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-white via-gray-800 to-black"
        ></div>
        <div class="mt-8 rounded-lg p-8 shadow-xl">
          <h2
            class="mb-8 text-center text-2xl font-bold xl:text-3xl"
            data-aos="fade-right"
          >
            Dlaczego Jakość Dźwięku Jest Ważna
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2" data-aos="fade-up">
            <div
              class="rounded-lg p-6 shadow-md transition duration-300 hover:scale-105"
              data-aos="zoom-in"
            >
              <h3 class="mb-4 text-xl font-bold text-black md:text-2xl">
                Korzyści z Wysokiej Jakości Dźwięku
              </h3>
              <ul
                class="list-inside list-disc space-y-2 text-lg font-bold text-black xl:text-xl"
              >
                <li>Zwiększa immersję i zaangażowanie</li>
                <li>Buduje atmosferę i wzmacnia emocje</li>
                <li>Poprawia ogólną jakość projektu i profesjonalizm</li>
                <li>Może być kluczowym elementem budowania marki</li>
                <li>Wspiera narrację i przekaz</li>
              </ul>
            </div>
            <div
              class="rounded-lg p-6 shadow-md transition duration-300 hover:scale-105"
              data-aos="zoom-in"
            >
              <h3 class="mb-4 text-xl font-bold text-black md:text-2xl">
                Moje Podejście do Jakości Dźwięku
              </h3>
              <ul
                class="list-inside list-disc space-y-2 text-lg font-bold text-black xl:text-xl"
              >
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
      <Store data-aos="fade-up" />
    </section>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../Layouts/Layout.vue';
import CustomAudioPlayer from '../components/ui/CustomAudioPlayer.vue';
import { audioCategories } from '@/constants/audio-export';
import Store from './Store.vue';
</script>
