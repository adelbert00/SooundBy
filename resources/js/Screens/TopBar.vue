<template>
  <nav class="bg-transparent">
    <!-- Nowy kontener, który zawiera zarówno elementy nawigacji, jak i odstęp -->
    <div>
      <!-- Kontener z border-b -->
      <div class="border-b-2 border-black">
        <div class="flex h-16 items-center">
          <div class="w-full text-black">
            <ul
              class="text-shadow-custom-p font-custom flex justify-center font-normal sm:gap-5 sm:text-base md:text-3xl xl:gap-20"
            >
              <li
                v-for="section in navigationSections"
                :key="section.id"
                class="animate-fadeDownDelay hover:text-primary-600 transition-all hover:scale-125"
              >
                <Link :href="getHref(section.id)">
                  {{ section.name }}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
