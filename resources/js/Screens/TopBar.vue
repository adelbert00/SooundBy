<template>
  <nav class="bg-transparent">
    <div class="mx-auto w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
      <ul
        class="font-playfair flex w-full justify-center space-x-2 text-white md:space-x-6 xl:space-x-10"
      >
        <li
          v-for="section in navigationSections"
          :key="section.id"
          class="transition-transform duration-300 hover:scale-105"
        >
          <Link
            :href="getHref(section.id)"
            class="text-base font-bold md:text-2xl xl:text-3xl"
          >
            {{ section.name }}
          </Link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { navigationSections } from '../constants/navigation';
import { Link } from '@inertiajs/vue3';

const getHref = (id: string) => {
  return id === 'about' ? '/' : `/${id}`;
};
</script>
