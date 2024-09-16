<template>
  <footer class="text-white">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="text-center md:text-left">
            <h3 class="mb-4 text-xl font-semibold">Adelbert</h3>
            <p class="text-base">
              Tworzę dźwięki, które inspirują i poruszają.
            </p>
          </div>
          <div class="text-center">
            <h4 class="mb-4 text-xl font-semibold">Szybkie linki</h4>
            <ul class="">
              <li v-for="item in quickLinks" :key="item">
                <Button
                  :to="item === 'About' ? '/' : `/${item.toLowerCase()}`"
                  class="bg-transparent font-mono text-sm transition duration-300 hover:scale-125 hover:text-purple-400"
                >
                  {{ item }}
                </Button>
              </li>
            </ul>
          </div>
          <div class="text-center md:text-right">
            <h4 class="mb-4 text-xl font-semibold">Kontakt</h4>
            <p class="text-base">Email: kontakt@sounddesign.com</p>
            <p class="text-base">Tel: +48 123 456 789</p>
            <div class="mt-4 flex justify-center space-x-4 md:justify-end">
              <a
                v-for="social in socialLinks"
                :key="social"
                href="#"
                class="transform transition duration-300 hover:scale-125 hover:text-purple-400"
              >
                <span class="sr-only">{{ social }}</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-800 pt-2 text-center text-white">
          <p class="text-lg">
            &copy; 2023 Sound Design. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Button from '../components/ui/button/Button.vue';

const quickLinks = ['About', 'Samples', 'Reel', 'Music', 'Audio', 'Contact'];

const socialLinks = ['facebook', 'twitter', 'instagram', 'linkedin'];
</script>
