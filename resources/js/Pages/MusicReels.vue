<template>
  <Layout class="grain-effect min-h-screen text-black">
    <section class="mx-auto w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
      <div class="text-center" data-aos="fade-up">
        <h1 class="text-3xl font-bold sm:text-3xl md:text-5xl">Muzyka</h1>
        <p class="text-lg font-bold md:text-xl">
          Odkryj różnorodną kolekcję utworów, które odzwierciedlają moją pasję
          do tworzenia muzyki. Każda piosenka to unikalna podróż dźwiękowa,
          starannie skomponowana i wyprodukowana, aby inspirować i zachwycać
          słuchaczy.
        </p>
      </div>

      <div
        class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
        data-aos="fade-up"
      >
        <div
          v-for="(music, index) in musicList"
          :key="index"
          class="overflow-hidden rounded-lg bg-transparent shadow-lg"
          data-aos="zoom-in"
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
            <h3 class="text-xl font-bold">
              {{ music.title }}
            </h3>
            <p class="text-xl font-bold text-black">
              Producent: {{ music.producer }}
            </p>
            <a
              :href="`https://www.youtube.com/watch?v=${music.src.split('/').pop()}`"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-4 inline-flex items-center text-xl font-bold text-black transition duration-300 hover:scale-105 hover:text-purple-300"
            >
              <Play class="mr-2 h-5 w-5" />
              Odtwórz na YouTube
            </a>
            <Button
              class="inline-flex items-center text-xl font-bold text-black transition duration-300 hover:scale-105 hover:text-green-300"
            >
              <Headphones class="mr-2 h-5 w-5" />
              Pobierz MP3
            </Button>
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
        <div class="mt-8 rounded-lg bg-transparent p-8">
          <h2
            class="mb-6 text-center text-2xl font-bold xl:text-4xl"
            data-aos="fade-right"
          >
            Moje Podejście do Kompozycji Muzyki
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2" data-aos="fade-up">
            <div class="rounded-lg p-6 shadow-lg" data-aos="zoom-in">
              <h3 class="mb-4 text-2xl font-bold text-black">
                Kluczowe Aspekty
              </h3>
              <ul
                class="list-inside list-disc space-y-2 text-lg font-bold text-black xl:text-xl"
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
            <div class="rounded-lg p-6 shadow-lg" data-aos="zoom-in">
              <h3 class="mb-4 text-2xl font-bold text-black">Proces Twórczy</h3>
              <ol
                class="list-inside list-decimal space-y-2 text-lg font-bold text-black xl:text-xl"
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
    <section class="relative mt-20 text-center" data-aos="fade-up">
      <h2 class="font-playfair text-2xl font-bold md:text-3xl">
        Odkryj pełną kolekcję moich utworów!
      </h2>
      <p class="mt-4 font-lato text-xl font-bold text-black">
        Zainteresowany współpracą muzyczną?
        <br />
        Chcesz licencjonować moje utwory lub stworzyć coś unikalnego?
        <br />
        Skontaktuj się ze mną i zacznijmy tworzyć razem!
      </p>
      <Button
        variant="outline"
        class="mx-auto mt-8 flex w-64 rounded-full px-4 py-2 text-xl font-bold text-black shadow-lg transition-transform hover:scale-105"
        :to="'/contact'"
      >
        Odkryj więcej
      </Button>
    </section>
  </Layout>
</template>

<script setup>
import { Play, Headphones } from 'lucide-vue-next';
import { musicList } from '../constants/music-List.ts';
import Layout from '../Layouts/Layout.vue';
import Button from '@/components/ui/button/Button.vue';
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
