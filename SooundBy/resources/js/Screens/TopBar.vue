<template>
  <nav class="bg-transparent">
    <div class="h-16 flex items-center">
      <div class="text-black w-full">
        <ul
          class="flex font-normal justify-center xl:gap-20 sm:gap-5 sm:text-base md:text-2xl font-custom text-shadow-custom-p"
        >
          <li
            v-for="section in navigationSections"
            :key="section.id"
            class="hover:text-indigo-600 animate-fadeDownDelay transition-all hover:scale-125"
          >
            <a href="#" @click="() => handleClick(section.id)">{{
              section.name
            }}</a>
          </li>
        </ul>
      </div>
      <div class="transition-all hover:scale-110 sm:hidden xl:block"></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { navigationSections } from "../constants/navigation.ts";
import { scrollToSection } from "../constants/scroll-to.ts";

const handleClick = (sectionId: string) => {
  scrollToSection(sectionId);
};
</script>