<template>
  <Layout>
    <div class="rounded-3xl bg-transparent from-indigo-100 to-purple-100 p-8">
      <h1
        class="font-custom bg-clip-text text-3xl font-normal text-black md:text-4xl"
      >
        Sample Packi
      </h1>

      <p class="mb-8 text-lg text-gray-700">
        Odkryj moją kolekcję starannie przygotowanych sample packów, idealnych
        do różnorodnych projektów audio.
      </p>

      <div
        class="sample-packs-container mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        <SamplePackCard
          v-for="pack in samplePacks"
          :key="pack.name"
          :pack="pack"
        />
      </div>
    </div>

    <section
      class="relative mt-16 overflow-hidden rounded-3xl bg-white p-8 shadow-lg"
    >
      <div
        class="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      ></div>
      <h2 class="mb-6 text-3xl font-bold text-gray-800">
        Jak korzystać z naszych sampli?
      </h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          class="rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 p-6 shadow-md"
        >
          <h3 class="mb-4 text-xl font-semibold text-indigo-600">Wskazówki</h3>
          <ul class="list-inside list-disc space-y-2 text-gray-700">
            <li>
              Eksperymentuj z warstwowaniem dźwięków dla uzyskania bogatszych
              tekstur
            </li>
            <li>Używaj efektów, aby dostosować sample do swojego projektu</li>
            <li>Łącz różne sample packi dla stworzenia unikalnego brzmienia</li>
            <li>Nie bój się modyfikować sampli - to klucz do oryginalności!</li>
          </ul>
        </div>

        <div
          class="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-6 shadow-md"
        >
          <h3 class="mb-4 text-xl font-semibold text-purple-600">
            Proces twórczy
          </h3>
          <ol class="list-inside list-decimal space-y-2 text-gray-700">
            <li>Wybierz odpowiedni sample pack do swojego projektu</li>
            <li>
              Przesłuchaj dostępne sample i wybierz te, które najlepiej pasują
            </li>
            <li>Zaimportuj wybrane sample do swojego DAW lub edytora audio</li>
            <li>Eksperymentuj z efektami i miksowaniem</li>
            <li>Dostosuj sample do tempa i tonacji twojego projektu</li>
            <li>Połącz sample z innymi elementami audio w twoim projekcie</li>
          </ol>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import { samplePacks } from '../constants/samplePacks';
import SamplePackCard from '../components/SamplePackCard.vue';
import Layout from '../Layouts/Layout.vue';
</script>
