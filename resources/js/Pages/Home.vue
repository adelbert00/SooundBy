<template>
  <Layout>
    <section class="w-full">
      <div class="section flex flex-col items-center text-center">
        <div id="Me">
          <h1
            class="text-shadow-custom-header font-mono font-bold sm:text-4xl xl:text-5xl"
          >
            Wojciech Faber
          </h1>
          <p
            class="text-shadow-custom-p pb-10 font-mono font-bold text-black sm:text-base xl:text-lg"
          >
            Sound designer & Mix/master engineer
          </p>
        </div>
        <img
          :src="imageSrc"
          alt="My Photo"
          class="shadow-custom-black rounded-full transition-transform duration-300 hover:scale-105 sm:w-4/5 md:w-3/5 xl:w-2/5"
        />
      </div>
      <div class="container grid items-start gap-8 px-4 pt-20 lg:grid-cols-2">
        <div class="space-y-6">
          <div class="space-y-3">
            <h2
              class="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              O mnie
            </h2>
            <div class="border-primary w-16 border-b"></div>
            <p
              class="text-muted-foreground font-mono md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/tight"
            >
              Jestem pasjonatem nowych technologii i nieustannie poszukuję
              innowacyjnych rozwiązań. Moją misją jest tworzenie wysokiej
              jakości produktów, które ułatwiają życie użytkownikom.
            </p>
          </div>
          <div class="grid grid-cols-3 gap-4 sm:w-80 md:w-full md:grid-cols-3">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="group relative overflow-hidden rounded-lg"
            >
              <img
                :src="image.src"
                class="aspect-square object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div class="space-y-6 lg:mt-[300px] lg:text-right">
          <div class="space-y-3">
            <h2
              class="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Przejdź dalej
            </h2>
            <div class="border-primary w-16 border-b"></div>
            <p
              class="text-muted-foreground font-mono md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/tight"
            >
              Sprawdź nasze najnowsze projekty i usługi, które mogą Cię
              zainteresować.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Button class="bg-primary-300">Projekty</Button>
            <Button variant="destructive">Usługi</Button>
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

const imageSrc = new URL('@/assets/photos/prot.jpg', import.meta.url).href;
const images = ref([
  { src: new URL('@/assets/photos/studio1.jpg', import.meta.url).href },
  { src: new URL('@/assets/photos/studio2.jpg', import.meta.url).href },
  { src: new URL('@/assets/photos/studio3.jpg', import.meta.url).href },
]);
</script>

<style scoped></style>
