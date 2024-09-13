<template>
  <div v-if="props.isVisible" class="modal-overlay">
    <div class="modal">
      <p class="font-custom text-4xl font-bold">{{ props.message }}</p>
      <button class="font-mono font-bold" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: 'update:isVisible', value: boolean): void;
}>();

const closeModal = () => {
  emit('update:isVisible', false);
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal {
  background: white;
  padding: 220px;
  border-radius: 10px;
  text-align: center;
}
</style>
