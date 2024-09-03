<template>
  <TopBar />
  <div class="section flex flex-col items-center text-center">
    <div id="Me">
      <h1
        class="text-shadow-custom-header pt-20 font-bold sm:text-4xl xl:text-5xl"
      >
        Wojciech Faber
      </h1>
      <p
        class="text-shadow-custom-p pb-3 font-mono font-bold text-black sm:text-base xl:text-lg"
      >
        Sound designer & Mix/master engineer
      </p>
    </div>
    <img
      :src="imageSrc"
      alt="My Photo"
      class="rounded-full shadow-custom-black sm:w-4/5 md:w-3/5 xl:w-2/5"
    />
  </div>
</template>

<script setup lang="ts">
import TopBar from '../Screens/TopBar.vue';

const imageSrc = new URL('../assets/photos/prot.jpg', import.meta.url).href;
</script>
