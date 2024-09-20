<template>
  <Layout
    class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white"
  >
    <section class="mx-auto w-full max-w-7xl px-4">
      <div class="text-center">
        <h1 class="text-2xl font-bold md:text-4xl xl:text-5xl">Sample Packi</h1>
        <p class="text-lg md:text-xl">
          Odkryj moją kolekcję starannie przygotowanych sample packów, idealnych
          do różnorodnych projektów audio.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="(pack, index) in samplePacks"
          :key="index"
          class="transform overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform hover:scale-105"
        >
          <img
            :src="pack.imageSrc"
            :alt="pack.name"
            class="h-64 w-full object-cover"
            loading="lazy"
          />
          <div class="p-6">
            <h2 class="mb-2 text-lg font-semibold">{{ pack.name }}</h2>
            <ul class="mb-4 list-inside list-disc">
              <li v-for="(item, i) in pack.contents" :key="i">{{ item }}</li>
            </ul>
            <Button
              :to="pack.previewLink"
              variant="link"
              class="inline-block transform transition-transform hover:scale-110"
            >
              Podgląd
            </Button>
          </div>
        </div>
      </div>

      <section class="relative mt-20 overflow-hidden rounded-3xl">
        <div
          class="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        ></div>
        <h2 class="mt-10 text-center text-2xl font-bold md:text-3xl">
          Jak korzystać z naszych sampli?
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="rounded-lg bg-gray-800 p-6">
            <h3 class="mb-4 text-xl font-semibold text-purple-400">
              Wskazówki
            </h3>
            <ul class="list-inside list-disc space-y-2 text-base text-gray-300">
              <li>
                Eksperymentuj z warstwowaniem dźwięków dla uzyskania bogatszych
                tekstur.
              </li>
              <li>
                Używaj efektów, aby dostosować sample do swojego projektu.
              </li>
              <li>
                Łącz różne sample packi dla stworzenia unikalnego brzmienia.
              </li>
              <li>
                Nie bój się modyfikować sampli — to klucz do oryginalności!
              </li>
            </ul>
          </div>

          <div class="rounded-lg bg-gray-800 p-6">
            <h3 class="mb-4 text-xl font-semibold text-purple-400">
              Proces twórczy
            </h3>
            <ol
              class="list-inside list-decimal space-y-2 text-base text-gray-300"
            >
              <li>Wybierz odpowiedni sample pack do swojego projektu.</li>
              <li>
                Przesłuchaj dostępne sample i wybierz te, które najlepiej
                pasują.
              </li>
              <li>
                Zaimportuj wybrane sample do swojego DAW lub edytora audio.
              </li>
              <li>Eksperymentuj z efektami i miksowaniem.</li>
              <li>Dostosuj sample do tempa i tonacji Twojego projektu.</li>
              <li>
                Połącz sample z innymi elementami audio w swoim projekcie.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section class="relative mt-20 overflow-hidden rounded-3xl">
        <div
          class="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
        ></div>
        <h2 class="mt-10 text-center text-2xl font-bold md:text-3xl">
          Kto korzystał z naszych sampli?
        </h2>
        <p class="mt-4 text-center text-lg text-purple-300">
          Nasze sample znalazły się w produkcjach znanych artystów na całym
          świecie!
        </p>
        <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            v-for="(artist, index) in popularArtists"
            :key="index"
            class="transform rounded-lg bg-gray-800 p-6 text-center transition-transform hover:scale-105"
          >
            <img
              :src="artist.imageSrc"
              class="mx-auto mb-4 h-40 w-40 rounded-full object-cover shadow-md"
              loading="lazy"
            />
            <h3 class="mb-2 text-xl font-semibold text-purple-400">
              {{ artist.name }}
            </h3>
            <p class="mb-4 text-gray-300">{{ artist.description }}</p>
            <ul class="list-inside list-disc space-y-2 text-gray-300">
              <li v-for="(track, i) in artist.tracks" :key="i">{{ track }}</li>
            </ul>
          </div>
        </div>
        <p class="mt-10 text-center text-sm italic text-purple-400">
          Zachęcamy do korzystania z naszych darmowych sampli i dołącz do grona
          zadowolonych artystów!
        </p>
      </section>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Layout from '../Layouts/Layout.vue';
import Button from '../components/ui/button/Button.vue';
import { samplePacks } from '@/constants/samplePacks';
import { popularArtists } from '@/constants/popularArtists';
</script>
