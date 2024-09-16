<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      class="w-full max-w-md rounded-lg bg-white p-8 text-center text-black shadow-lg"
    >
      <h1 class="mb-4 text-xl font-bold">{{ message }}</h1>

      <Button
        @click="closeModal"
        class="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
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

<style scoped></style>
