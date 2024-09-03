<template>
    <TopBar />
    <div class="text-center flex flex-col items-center section">
      <div id="Me">
        <h1
          class="xl:text-5xl sm:text-4xl pt-20 font-bold text-shadow-custom-header"
        >
          Wojciech Faber
        </h1>
        <p
          class="pb-3 xl:text-lg sm:text-base text-black font-mono font-bold text-shadow-custom-p"
        >
          Sound designer & Mix/master engineer
        </p>
      </div>
      <img
        :src="imageSrc"
        alt="My Photo"
        class="rounded-full xl:w-2/5 sm:w-4/5 md:w-3/5 shadow-custom-black"
      />
    </div>
  </template>
  
  <script setup lang="ts">
import TopBar from '../Screens/TopBar.vue';
  
  const imageSrc = new URL("../assets/photos/prot.jpg", import.meta.url).href;
  </script>