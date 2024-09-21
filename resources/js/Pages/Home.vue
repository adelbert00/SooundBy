<template>
  <Layout class="grain-effect min-h-screen text-white">
    <section class="mx-auto w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
      <div class="text-center">
        <h1 class="font-playfair text-2xl font-bold md:text-4xl xl:text-5xl">
          Wojciech Faber
        </h1>
        <p class="font-lato text-lg font-normal">
          Projektant dźwięku i inżynier miksu/masteringu
        </p>
      </div>

      <div
        class="mt-16 grid grid-cols-1 gap-8 sm:place-items-center md:grid-cols-2"
      >
        <div class="sm:text-center md:text-justify">
          <h2 class="font-playfair text-3xl font-bold sm:text-3xl md:text-5xl">
            O mnie
          </h2>
          <div
            class="my-4 w-16 border-b border-white sm:relative sm:left-1/2 sm:-translate-x-1/2 md:left-8"
          ></div>
          <p class="font-lato mb-6 text-lg font-normal">
            Jestem pasjonatem nowych technologii i nieustannie poszukuję
            innowacyjnych rozwiązań. Moja misja to tworzenie wysokiej jakości
            produktów, które ułatwiają życie użytkownikom.
          </p>
          <Button
            variant="outline"
            to="/contact"
            class="font-lato items-center rounded-full text-lg font-bold text-black shadow-lg transition duration-300 hover:scale-110"
          >
            Skontaktuj się ze mną
            <ArrowRight class="ml-2 h-5 w-5" />
          </Button>
        </div>
        <img
          :src="imageSrc"
          class="rounded-3xl object-cover shadow-md sm:w-[300px] md:h-full md:w-full"
          loading="lazy"
        />
      </div>

      <div class="mt-16 text-center md:text-right">
        <h2 class="font-playfair text-3xl font-bold md:text-5xl">Usługi</h2>

        <div class="relative ml-auto flex">
          <img
            src="@/assets/photos/Adelbert.jpg"
            class="absolute -top-8 h-40 w-72 rounded-lg object-cover shadow-xl sm:hidden md:block xl:-top-8 xl:h-48"
            loading="lazy"
          />
          <img
            src="@/assets/photos/GeniusLogo.png"
            class="absolute top-[150px] h-10 w-10 rounded-lg sm:hidden md:block xl:top-[180px]"
            loading="lazy"
          />
          <Button
            class="absolute top-[145px] ml-10 h-10 w-10 bg-transparent text-xl transition duration-300 hover:scale-125 sm:hidden md:block xl:top-[175px]"
          >
            Prod.Adelbert
          </Button>
        </div>
        <div
          class="relative my-4 w-16 border-b border-white sm:left-1/2 sm:-translate-x-1/2 md:left-8 md:ml-auto"
        ></div>
        <ul
          class="font-lato space-y-6 text-base font-normal md:text-xs xl:text-lg"
        >
          <li>
            <strong class="text-sm xl:text-xl">Mix Mastering -</strong>
            Profesjonalne brzmienie, które nada Twojej muzyce głębię i
            klarowność.
          </li>
          <li>
            <strong class="text-sm xl:text-xl">Recenzja Bitów -</strong>
            Szczegółowa analiza Twojego bitu z praktycznymi wskazówkami do
            udoskonalenia.
          </li>
          <li>
            <strong class="text-sm xl:text-xl">Produkcja Bitów -</strong>
            Unikalne bity tworzone z pasją, idealnie oddające Twój styl i wizję.
          </li>
        </ul>
      </div>

      <div class="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative overflow-hidden rounded-lg bg-transparent shadow-lg transition hover:scale-105"
        >
          <img
            :src="image.src"
            class="h-64 w-full object-cover"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="font-playfair text-xl font-semibold">
              {{ image.title }}
            </h3>
            <p class="font-lato text-sm text-gray-300">
              {{ image.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-20 rounded-lg bg-transparent p-8 shadow-xl">
        <h2
          class="font-playfair mb-10 text-center text-2xl font-bold xl:text-3xl"
        >
          Moje umiejętności
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3
              class="font-playfair mb-4 text-xl font-bold text-white xl:text-2xl"
            >
              Specjalizacje
            </h3>
            <ul
              class="font-lato list-inside list-disc space-y-2 text-sm text-white xl:text-base"
            >
              <li>Sound design dla gier i filmów</li>
              <li>Komponowanie muzyki</li>
              <li>Miksowanie i mastering</li>
              <li>Nagrywanie i edycja dźwięku</li>
              <li>Tworzenie efektów dźwiękowych</li>
            </ul>
          </div>

          <div>
            <h3
              class="font-playfair mb-4 text-xl font-bold text-white xl:text-2xl"
            >
              Narzędzia
            </h3>
            <ul
              class="font-lato list-inside list-disc space-y-2 text-sm text-white xl:text-base"
            >
              <li>Pro Tools</li>
              <li>Ableton Live</li>
              <li>Logic Pro X</li>
              <li>Native Instruments Komplete</li>
              <li>Izotope RX</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mx-auto mt-20 max-w-4xl text-center">
        <h2
          class="font-playfair mb-6 text-2xl font-bold md:text-3xl xl:text-3xl"
        >
          Gotowy na przygodę?
        </h2>
        <p class="font-lato mb-8 text-lg font-normal text-gray-300 md:text-xl">
          Posłuchaj próbki mojego brzmienia i rozpocznij współpracę już dziś!
        </p>
        <CustomAudioPlayer :src="audioSrc" />

        <div class="mt-8 flex justify-center space-x-4">
          <Button
            variant="outline"
            to="/projects"
            class="font-lato w-60 rounded-full text-base font-bold text-black shadow-lg transition hover:scale-105 md:text-lg"
          >
            Zobacz Projekty
          </Button>
          <Button
            variant="outline"
            to="/contact"
            class="font-lato w-60 rounded-full text-base font-bold text-black shadow-lg transition hover:scale-105 md:text-lg"
          >
            Skontaktuj się
          </Button>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Layout from '../Layouts/Layout.vue';
import Button from '../components/ui/button/Button.vue';
import { ArrowRight } from 'lucide-vue-next';
import CustomAudioPlayer from '../components/ui/CustomAudioPlayer.vue';

const audioSrc = ref(
  new URL('@/assets/music/gonimymusic.mp3', import.meta.url).href
);

const imageSrc = new URL('@/assets/photos/prot.jpg', import.meta.url).href;

const images = ref([
  {
    src: new URL('@/assets/photos/studio1.jpg', import.meta.url).href,
    title: 'Produkcja Bitów',
    description:
      'Unikalne bity tworzone z pasją, idealnie oddające Twój styl i wizję.',
  },
  {
    src: new URL('@/assets/photos/studio2.jpg', import.meta.url).href,
    title: 'Recenzja Bitów',
    description:
      'Szczegółowa analiza Twojego bitu z praktycznymi wskazówkami do udoskonalenia.',
  },
  {
    src: new URL('@/assets/photos/studio3.jpg', import.meta.url).href,
    title: 'Mix Mastering',
    description:
      'Profesjonalne brzmienie, które nada Twojej muzyce głębię i klarowność.',
  },
]);
</script>
<style scoped></style>
