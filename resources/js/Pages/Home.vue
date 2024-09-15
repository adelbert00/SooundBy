<template>
  <Layout
    class="in-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white"
  >
    <section class="px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="section flex flex-col items-center text-center">
          <div id="Me">
            <h1
              class="text-shadow-custom-header font-mono font-bold sm:text-4xl xl:text-5xl"
            >
              Wojciech Faber
            </h1>
            <p
              class="text-shadow-custom-p pb-10 font-mono font-bold sm:text-base xl:text-lg"
            >
              Sound designer & Mix/master engineer
            </p>
          </div>
        </div>

        <div class="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div class="space-y-6">
            <h2
              class="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              O mnie
            </h2>
            <div class="w-16 border-b border-primary"></div>
            <p
              class="text-muted-foreground font-mono md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/tight"
            >
              Jestem pasjonatem nowych technologii i nieustannie poszukuję
              innowacyjnych rozwiązań. Moja misja to tworzenie wysokiej jakości
              produktów, które ułatwiają życie użytkownikom.
            </p>
            <router-link
              to="/contact"
              class="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-purple-700"
            >
              Skontaktuj się ze mną
              <ArrowRight class="ml-2 h-5 w-5" />
            </router-link>
          </div>
          <div class="relative h-96 overflow-hidden rounded-3xl">
            <img
              :src="imageSrc"
              alt="Wojciech Faber working in his studio"
              class="absolute inset-0 h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <!-- Features Section -->
        <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="group overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              :src="image.src"
              alt="Feature Image"
              class="aspect-square h-64 w-full object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div class="p-6">
              <h3 class="mb-2 text-xl font-semibold">Feature Title</h3>
              <p class="text-gray-300">Feature description goes here.</p>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="rounded-lg bg-gray-800 p-8 shadow-xl">
          <h2 class="mb-6 text-center text-3xl font-bold">Moje umiejętności</h2>
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

        <!-- Navigation Section -->
        <div class="mt-16 text-center">
          <h2 class="mb-6 text-3xl font-bold">Przejdź dalej</h2>
          <p class="mb-8 text-xl">
            Sprawdź nasze najnowsze projekty i usługi, które mogą Cię
            zainteresować.
          </p>
          <div class="flex h-14 justify-center space-x-4">
            <Button
              class="w-[300px] rounded-full bg-purple-600 px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-purple-700"
            >
              Projekty
            </Button>
            <Button
              variant="destructive"
              class="w-[300px] rounded-full bg-indigo-600 px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-indigo-700"
            >
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Layout from '../Layouts/Layout.vue';
import Button from '../../../@/components/ui/button/Button.vue';
import { ArrowRight } from 'lucide-vue-next';

const imageSrc = new URL('@/assets/photos/prot.jpg', import.meta.url).href;
const images = ref([
  { src: new URL('@/assets/photos/studio1.jpg', import.meta.url).href },
  { src: new URL('@/assets/photos/studio2.jpg', import.meta.url).href },
  { src: new URL('@/assets/photos/studio3.jpg', import.meta.url).href },
]);
</script>

<style scoped></style>
