<template>
  <div class="flex min-h-screen flex-col">
    <TopBar class="pb-20 md:pb-60" />

    <main class="flex-grow">
      <div class="mx-auto w-full max-w-7xl">
        <slot />
      </div>
    </main>
    <Footer class="pt-20" />

    <Button
      v-if="showScrollButton"
      @click="scrollToTop"
      class="font-playfair fixed bottom-4 right-4 z-50 h-12 w-12 rounded-xl border-2 text-lg font-bold text-white transition-all hover:scale-125"
    >
      TOP
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Footer from '@/Screens/Footer.vue';
import TopBar from '../Screens/TopBar.vue';
import Button from '@/components/ui/button/Button.vue';

const showScrollButton = ref(false);

function handleScroll() {
  showScrollButton.value = window.scrollY > 100;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped></style>
