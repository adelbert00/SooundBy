<template>
  <nav class="bg-transparent">
    <div class="flex h-16 items-center">
      <div class="w-full text-black">
        <ul
          class="text-shadow-custom-p flex justify-center font-custom font-normal sm:gap-5 sm:text-base md:text-2xl xl:gap-20"
        >
          <li
            v-for="section in navigationSections"
            :key="section.id"
            class="animate-fadeDownDelay transition-all hover:scale-125 hover:text-indigo-600"
          >
            <a
              href="#"
              @click="() => handleClick(section.id)"
              >{{ section.name }}</a
            >
          </li>
        </ul>
      </div>
      <div class="transition-all hover:scale-110 sm:hidden xl:block"></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { navigationSections } from '../constants/navigation.ts';
import { scrollToSection } from '../constants/scroll-to.ts';

const handleClick = (sectionId: string) => {
  scrollToSection(sectionId);
};
</script>
