<template>
  <Layout class="grain-effect min-h-screen text-black">
    <section class="mx-auto w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
      <div class="text-center" data-aos="fade-up">
        <h1 class="font-playfair text-3xl font-bold sm:text-3xl md:text-5xl">
          Sample Packi
        </h1>
        <p class="text-lg font-bold md:text-xl">
          Odkryj moją kolekcję starannie przygotowanych sample packów, idealnych
          do różnorodnych projektów audio.
        </p>
      </div>

      <div
        class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4"
        data-aos="fade-up"
      >
        <div
          v-for="(pack, index) in samplePacks"
          :key="index"
          class="transform overflow-hidden rounded-lg bg-transparent shadow-lg transition-transform hover:scale-105"
          data-aos="zoom-in"
        >
          <img
            :src="pack.imageSrc"
            :alt="pack.name"
            class="h-64 w-full object-cover"
            loading="lazy"
          />
          <div class="p-2">
            <h2 class="mb-2 text-xl font-bold">
              {{ pack.name }}
            </h2>
            <ul class="mb-4 list-inside list-disc text-xl font-bold">
              <li v-for="(item, i) in pack.contents" :key="i">{{ item }}</li>
            </ul>
            <Button
              :to="pack.previewLink"
              variant="outline"
              class="inline-block transform text-lg font-bold text-black transition-transform hover:scale-110"
            >
              Podgląd
            </Button>
          </div>
        </div>
      </div>

      <section class="relative mt-20 rounded-3xl" data-aos="fade-up">
        <h2
          class="mt-10 text-center text-2xl font-bold md:text-3xl"
          data-aos="fade-right"
        >
          Jak korzystać z naszych sampli?
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            class="rounded-lg bg-transparent p-6 shadow-lg"
            data-aos="fade-left"
          >
            <h3 class="mb-4 text-2xl font-bold text-black">Wskazówki</h3>
            <ul
              class="list-inside list-disc space-y-2 text-xl font-bold text-black"
            >
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

          <div
            class="rounded-lg bg-transparent p-6 shadow-lg"
            data-aos="fade-left"
          >
            <h3 class="mb-4 text-2xl font-bold text-black">Proces twórczy</h3>
            <ol
              class="list-inside list-decimal space-y-2 text-xl font-bold text-black"
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

      <section class="relative mt-20 rounded-3xl" data-aos="fade-up">
        <h2
          class="mt-10 text-center text-2xl font-bold md:text-3xl"
          data-aos="fade-right"
        >
          Kto korzystał z naszych sampli?
        </h2>
        <p
          class="mt-4 text-center text-xl font-bold text-black"
          data-aos="fade-up"
        >
          Nasze sample znalazły się w produkcjach znanych artystów na całym
          świecie!
        </p>
        <div
          class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          data-aos="fade-up"
        >
          <div
            v-for="(artist, index) in popularArtists"
            :key="index"
            class="transform rounded-lg bg-transparent p-6 text-center shadow-xl transition-transform hover:scale-105"
            data-aos="zoom-in"
          >
            <img
              :src="artist.imageSrc"
              class="mx-auto mb-4 h-40 w-40 rounded-full object-cover shadow-lg"
              loading="lazy"
            />
            <h3 class="mb-2 text-2xl font-bold text-black">
              {{ artist.name }}
            </h3>
            <p class="mb-4 text-base font-bold text-black">
              {{ artist.description }}
            </p>
            <ul
              class="list-inside list-disc space-y-2 text-lg font-bold text-black"
            >
              <li v-for="(track, i) in artist.tracks" :key="i">{{ track }}</li>
            </ul>
          </div>
        </div>
        <p
          class="mt-10 text-center font-bold italic text-black"
          data-aos="fade-up"
        >
          Zachęcamy do korzystania z naszych darmowych sampli i dołącz do grona
          zadowolonych artystów!
        </p>
      </section>
    </section>
    <Quiz />
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../Layouts/Layout.vue';
import Button from '../components/ui/button/Button.vue';
import { samplePacks } from '@/constants/samplePacks';
import { popularArtists } from '@/constants/popularArtists';
import Quiz from './Quiz.vue';
</script>
