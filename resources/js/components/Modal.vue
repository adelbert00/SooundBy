<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      class="w-full max-w-md rounded-lg bg-white p-8 text-center text-black shadow-lg"
    >
      <h1 class="mb-10 font-playfair text-xl font-bold">{{ message }}</h1>

      <Button
        variant="outline"
        @click="closeModal"
        class="rounded-full px-4 py-2 font-playfair text-base font-bold text-black shadow-md"
      >
        Zamknij
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Button from './ui/button/Button.vue';

const props = defineProps({
  message: {
    type: String,
    default: 'Dziękujemy!',
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:isVisible']);

const closeModal = () => {
  emit('update:isVisible', false);
};
</script>
