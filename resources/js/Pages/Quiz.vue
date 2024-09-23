<template>
  <section class="mx-auto mt-20 w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
    <div class="text-center" data-aos="fade-up">
      <h1 class="text-2xl font-bold md:text-3xl">Znajdź idealny Sample Pack</h1>
      <p class="font-bold md:text-lg">
        Odpowiedz na kilka pytań, a my polecimy sample packi, które najlepiej
        pasują do Twojego stylu muzycznego.
      </p>
    </div>

    <form
      class="mx-auto w-[320px] md:w-[720px]"
      @submit.prevent="calculateRecommendations"
      data-aos="fade-up"
    >
      <div class="mt-8">
        <Label class="text-lg font-bold">
          Jaki gatunek muzyczny preferujesz?
        </Label>
        <select
          v-model="genre"
          class="black mt-4 w-full appearance-none rounded border border-gray-500 bg-transparent p-2 text-black"
        >
          <option value="">Wybierz...</option>
          <option value="hiphop">Hip-Hop</option>
          <option value="electronic">Elektronika</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
        </select>
      </div>

      <div class="mt-8">
        <Label class="text-lg font-bold">Jakie dźwięki preferujesz?</Label>
        <select
          v-model="soundType"
          class="black mt-4 w-full appearance-none rounded border border-gray-500 bg-transparent p-2 text-black"
        >
          <option value="">Wybierz...</option>
          <option value="bass">Basy</option>
          <option value="drums">Perkusje</option>
          <option value="synths">Syntezatory</option>
          <option value="fx">Efekty dźwiękowe</option>
        </select>
      </div>

      <div class="mt-8">
        <Label class="text-lg font-bold">
          Do jakiego projektu potrzebujesz sampli?
        </Label>
        <select
          v-model="projectType"
          class="black mt-4 w-full appearance-none rounded border border-gray-500 bg-transparent p-2 text-black"
        >
          <option value="">Wybierz...</option>
          <option value="film">Muzyka filmowa</option>
          <option value="beat">Produkcja beatów</option>
          <option value="game">Sound design do gier</option>
        </select>
      </div>

      <Button
        variant="outline"
        type="submit"
        class="mx-auto mt-8 flex w-64 rounded-full px-4 py-2 text-lg font-bold text-black shadow-lg transition-transform hover:scale-105"
      >
        Zobacz rekomendacje
      </Button>
    </form>

    <div v-if="recommendations.length > 0" class="mt-10">
      <h2 class="flex justify-center text-2xl font-bold">
        Rekomendowane Sample Packi:
      </h2>
      <div class="mt-8 grid grid-cols-1 gap-8">
        <div
          v-for="(pack, index) in recommendations"
          :key="index"
          class="mx-auto w-full max-w-xs rounded-lg p-6 transition-transform hover:scale-105"
        >
          <img
            :src="pack.imageSrc"
            alt="Sample Pack"
            class="h-48 w-full object-cover"
          />
          <h3 class="mt-4 font-lato text-lg text-black">{{ pack.name }}</h3>
          <Button
            :to="pack.previewLink"
            variant="outline"
            class="hover:bg-transparentwhite mt-4 border-white font-bold text-black hover:text-black"
          >
            Zobacz
          </Button>
        </div>
      </div>
    </div>

    <div v-else-if="submitted" class="mt-10 text-center">
      <h2 class="font-lato text-lg font-bold text-red-500">
        Nie znaleziono żadnych rekomendacji. Spróbuj ponownie z innymi
        ustawieniami.
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../components/ui/button/Button.vue';
import { samplePacks } from '@/constants/samplePacks';
import type { SamplePack } from '@/interfaces/SamplePack';
import Label from '@/components/ui/label/Label.vue';

const genre = ref<string>('');
const soundType = ref<string>('');
const projectType = ref<string>('');
const recommendations = ref<SamplePack[]>([]);
const submitted = ref<boolean>(false);

const calculateRecommendations = (): void => {
  submitted.value = true;

  recommendations.value = samplePacks.filter(
    (pack: SamplePack) =>
      pack.genre === genre.value &&
      pack.soundType === soundType.value &&
      pack.projectType === projectType.value
  );
};
</script>

<style scoped></style>
