<template>
  <Layout
    class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white"
  >
    <section class="">
      <div class="mx-auto max-w-7xl">
        <div class="mt-40 flex flex-col text-center">
          <h1 class="shad font-mono font-bold sm:text-4xl xl:text-5xl">
            Wojciech Faber
          </h1>
          <p class="font-mono font-bold">
            Sound designer & Mix/master engineer
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 items-center md:grid-cols-2">
          <div class="space-y-6">
            <h2 class="font-mono text-3xl font-bold sm:text-4xl md:text-5xl">
              O mnie
            </h2>
            <div class="w-16 border-b border-primary"></div>
            <p class="font-mono">
              Jestem pasjonatem nowych technologii i nieustannie poszukuję
              innowacyjnych rozwiązań. Moja misja to tworzenie wysokiej jakości
              produktów, które ułatwiają życie użytkownikom.
            </p>
            <Button
              to="/contact"
              class="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 font-mono text-lg font-semibold transition duration-300 hover:scale-110 hover:bg-purple-700"
            >
              Skontaktuj się ze mną
              <ArrowRight class="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div class="relative h-96 overflow-hidden rounded-3xl">
            <img
              :src="imageSrc"
              class="absolute inset-0 h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <div class="space-y-6 text-right">
          <h2 class="mt-10 text-3xl font-bold sm:text-4xl md:text-5xl">
            Usługi
          </h2>
          <div class="ml-auto block w-16 border-b border-primary"></div>

          <div class="ml-auto flex">
            <div class="">
              <img
                src="@/assets/photos/gen9820.png"
                class="absolute top-[720px] h-72 w-72 object-cover"
              />
              <img
                src="@/assets/photos/Adelbert.jpg"
                class="absolute top-[910px] h-52 w-72 rounded-lg object-cover opacity-90 shadow-sm"
              />
              <img
                src="@/assets/photos/GeniusLogo.png"
                class="absolute top-[1130px] h-10 w-10 rounded-lg"
              />
              <Button
                class="absolute top-[1130px] ml-24 h-10 w-10 bg-transparent text-xl shadow-none transition duration-300 hover:scale-125"
              >
                Prod.Adelbert
              </Button>
            </div>
          </div>
          <div class="text-right">
            <ul class="space-y-6">
              <li>
                <strong class="font-custom text-xl font-normal">
                  Mix Mastering -
                </strong>
                Profesjonalne brzmienie, które nada Twojej muzyce głębię i
                klarowność.
              </li>
              <li>
                <strong class="font-custom text-xl font-normal">
                  Recenzja Bitów -
                </strong>
                Szczegółowa analiza Twojego bitu z praktycznymi wskazówkami do
                udoskonalenia.
              </li>
              <li>
                <strong class="font-custom text-xl font-normal">
                  Produkcja Bitów -
                </strong>
                Unikalne bity tworzone z pasją, idealnie oddające Twój styl i
                wizję.
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="group overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              :src="image.src"
              class="aspect-square h-64 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold">{{ image.title }}</h3>
              <p class="text-sm text-gray-300">{{ image.description }}</p>
            </div>
          </div>
        </div>

        <div class="mt-20 rounded-lg bg-gray-800 p-8 shadow-xl">
          <h2 class="mb-10 text-center text-3xl font-bold">
            Moje umiejętności
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 class="mb-4 text-2xl font-semibold text-purple-400">
                Specjalizacje
              </h3>
              <ul class="list-inside list-disc space-y-2 text-gray-300">
                <li>Sound design dla gier i filmów</li>
                <li>Komponowanie muzyki</li>
                <li>Miksowanie i mastering</li>
                <li>Nagrywanie i edycja dźwięku</li>
                <li>Tworzenie efektów dźwiękowych</li>
              </ul>
            </div>
            <div>
              <h3 class="mb-4 text-2xl font-semibold text-purple-400">
                Narzędzia
              </h3>
              <ul class="list-inside list-disc space-y-2 text-gray-300">
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
          <h2 class="mb-6 text-4xl font-bold text-white md:text-5xl">
            Gotowy na przygodę?
          </h2>
          <p class="mb-8 text-xl text-purple-200">
            Posłuchaj próbki mojego brzmienia i rozpocznij współpracę już dziś!
          </p>
          <div class="mb-8 flex flex-col items-center justify-center space-y-6">
            <div class="flex items-center space-x-4">
              <Button
                @click="togglePlay"
                class="absolute left-1/2 -ml-56 -translate-x-1/2 transform rounded-full bg-purple-600 font-bold text-white transition duration-300 hover:scale-110 hover:bg-purple-700"
              >
                <component :is="isPlaying ? Pause : Play" :size="24" />
              </Button>
              <div class="relative flex items-center space-x-2">
                <Volume2
                  :size="24"
                  class="absolute left-1/2 -ml-44 -translate-x-1/2 text-purple-300"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  v-model="volume"
                  @input="handleVolumeChange"
                  class="absolute left-1/2 w-[320px] -translate-x-1/2 cursor-pointer rounded-lg"
                />
              </div>
            </div>
            <p class="italic text-purple-300">
              {{
                isPlaying
                  ? 'Słuchasz próbki dźwięku...'
                  : 'Kliknij play, aby posłuchać!'
              }}
            </p>
          </div>
          <div
            class="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              to="/projects"
              class="w-60 transform rounded-full bg-purple-600 font-bold text-white transition duration-300 hover:scale-105 hover:bg-purple-700"
            >
              Zobacz Projekty
            </Button>
            <Button
              to="/contact"
              class="w-60 transform rounded-full bg-indigo-600 font-bold text-white transition duration-300 hover:scale-105 hover:bg-indigo-700"
            >
              Skontaktuj się
            </Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../Layouts/Layout.vue';
import Button from '../components/ui/button/Button.vue';
import { ArrowRight } from 'lucide-vue-next';
import { ref, onUnmounted } from 'vue';
import { Play, Pause, Volume2 } from 'lucide-vue-next';

const isPlaying = ref(false);
const volume = ref(50);

const audio = new Audio(
  new URL(
    '@/assets/music/Ambient_No_Man_Sky_C_Minor_117BPM.mp3',
    import.meta.url
  ).href
);
audio.loop = true;

const togglePlay = () => {
  if (isPlaying.value) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying.value = !isPlaying.value;
};

const handleVolumeChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  audio.volume = Number(target.value) / 100;
};

onUnmounted(() => {
  audio.pause();
  audio.currentTime = 0;
});
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
