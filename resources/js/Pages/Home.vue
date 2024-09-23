<template>
  <Layout class="grain-effect min-h-screen text-black">
    <section class="mx-auto w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
      <div class="grid grid-cols-1 gap-8 sm:place-items-center md:grid-cols-2">
        <div data-aos="fade-right" class="sm:text-center md:text-justify">
          <h2 class="font-bold sm:text-3xl md:text-4xl">O mnie</h2>
          <div
            class="my-4 w-16 border-b border-white sm:relative sm:left-1/2 sm:-translate-x-1/2 md:left-8"
          ></div>
          <p class="mb-6 text-xl font-bold">
            Jestem pasjonatem nowych technologii i nieustannie poszukuję
            innowacyjnych rozwiązań.
            <br />
            Moja misja to tworzenie wysokiej jakości produktów, które ułatwiają
            życie użytkownikom.
          </p>

          <Link
            href="/contact"
            class="flex w-60 justify-center space-x-4 rounded-full bg-white px-4 py-2 text-base font-bold text-black shadow-lg md:text-xl"
          >
            Skontaktuj się
          </Link>
        </div>
        <img
          data-aos="fade-left"
          :src="imageSrc"
          class="rounded-3xl object-cover shadow-md sm:w-[300px] md:h-full md:w-full"
          loading="lazy"
        />
      </div>

      <div data-aos="fade-left" class="mt-16 text-center md:text-right">
        <h2 class="text-3xl font-bold md:text-5xl">Usługi</h2>
        <div
          class="relative my-4 w-16 border-b border-white sm:left-1/2 sm:-translate-x-1/2 md:left-8 md:ml-auto"
        ></div>
        <p
          class="max-w-[640px] text-xl font-bold sm:text-center md:ml-auto md:text-right"
        >
          Oferuję szeroką gamę profesjonalnych usług, które pomogą wynieść Twoje
          projekty muzyczne na wyższy poziom.
          <br />
          Wysokiej jakości nagrania, miks i mastering, a także kompleksowa
          produkcja muzyczna to tylko niektóre z moich specjalizacji.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          data-aos="zoom-in"
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
            <h3 class="text-2xl font-bold">
              {{ image.title }}
            </h3>
            <p class="mt-2 text-xl font-bold text-black">
              {{ image.description }}
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="flip-left"
        class="mt-20 rounded-lg bg-transparent p-8 shadow-xl"
      >
        <h2 class="mb-10 text-center text-2xl font-bold xl:text-3xl">
          Moje umiejętności
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 class="mb-4 text-xl font-bold text-black xl:text-2xl">
              Specjalizacje
            </h3>
            <ul
              class="list-inside list-disc space-y-2 text-base font-bold text-black xl:text-xl"
            >
              <li>Sound design dla gier i filmów</li>
              <li>Komponowanie muzyki</li>
              <li>Miks i mastering</li>
              <li>Nagrywanie i edycja dźwięku</li>
              <li>Tworzenie efektów dźwiękowych</li>
            </ul>
          </div>

          <div>
            <h3 class="mb-4 text-xl font-bold text-black xl:text-2xl">
              Narzędzia
            </h3>
            <ul
              class="list-inside list-disc space-y-2 text-base font-bold text-black xl:text-xl"
            >
              <li>FL Studio</li>
              <li>Ableton Live</li>
              <li>Arturia</li>
              <li>UAD Apollo Solo</li>
              <li>ADAM Audio T5V</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        class="mx-auto max-w-4xl text-center sm:mt-20 xl:mt-40"
      >
        <h2 class="mb-6 text-2xl font-bold md:text-3xl xl:text-3xl">
          Gotowy na przygodę?
        </h2>
        <p class="mb-8 text-lg font-bold text-black md:text-xl">
          Posłuchaj próbki mojego brzmienia i rozpocznij współpracę już dziś!
        </p>
        <CustomAudioPlayer :src="audioSrc" />

        <div class="mt-8 flex justify-center space-x-4">
          <Link
            href="/samples"
            class="w-60 rounded-full bg-white px-4 py-2 text-base font-bold text-black shadow-lg md:text-xl"
          >
            Zobacz Projekty
          </Link>
          <Link
            href="/contact"
            class="w-60 rounded-full bg-white px-4 py-2 text-base font-bold text-black shadow-lg md:text-xl"
          >
            Skontaktuj się
          </Link>
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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';

onMounted(() => {
  AOS.init({
    duration: 2400,
    once: true,
    mirror: false,
    offset: 60,
    easing: 'ease-in-out',
    placement: 'top-center',
  });
});

const audioSrc = ref(
  new URL('@/assets/music/gonimymusic.mp3', import.meta.url).href
);

const imageSrc = new URL('@/assets/photos/prot.jpg', import.meta.url).href;

const images = ref([
  {
    src: new URL('@/assets/photos/studio1.jpg', import.meta.url).href,
    title: 'Produkcja',
    description:
      'Unikalne produkcję tworzone z pasją, idealnie oddające Twój styl i wizję.',
  },
  {
    src: new URL('@/assets/photos/studio2.jpg', import.meta.url).href,
    title: 'Recenzja',
    description:
      'Szczegółowa analiza Twojej muzyki z praktycznymi wskazówkami do udoskonalenia.',
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
