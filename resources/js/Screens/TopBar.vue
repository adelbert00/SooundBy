<template>
  <div
    class="mx-auto flex w-[360px] items-center justify-between md:w-full md:max-w-4xl xl:max-w-7xl"
  >
    <img
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="200"
      src="/resources/js/assets/photos/logo.png"
      class="relative -top-[76px] w-60"
    />

    <Button
      @click="toggleMenu"
      class="relative -top-20 z-20 block p-2 md:hidden"
    >
      <div v-if="!isMenuOpen" class="space-y-1">
        <span class="block h-0.5 w-6 bg-white"></span>
        <span class="block h-0.5 w-6 bg-white"></span>
        <span class="block h-0.5 w-6 bg-white"></span>
      </div>

      <div v-else>
        <span class="block w-6 text-white">✖</span>
      </div>
    </Button>

    <ul
      class="relative -top-20 hidden space-x-2 md:flex md:space-x-6 xl:space-x-10"
    >
      <li
        data-aos="fade-down"
        v-for="section in navigationSections"
        :key="section.id"
      >
        <Link
          :href="getHref(section.id)"
          class="text-base font-bold text-white md:text-xl"
          @click="closeMenu"
        >
          {{ section.name }}
        </Link>
      </li>
    </ul>

    <div
      v-if="isMenuOpen"
      class="absolute right-0 top-12 z-10 flex flex-col p-5 text-right md:hidden"
    >
      <ul class="flex flex-col">
        <li
          v-for="section in navigationSections"
          :key="section.id"
          class="transition-transform duration-300 hover:scale-125"
        >
          <Link
            :href="getHref(section.id)"
            class="text-base font-bold text-white"
            @click="closeMenu"
          >
            {{ section.name }}
          </Link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { navigationSections } from '../constants/navigation';
import { Link } from '@inertiajs/vue3';
import Button from '@/components/ui/button/Button.vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const getHref = (id: string) => {
  return id === 'about' ? '/' : `/${id}`;
};
</script>
