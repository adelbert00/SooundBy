<template>
  <div class="mb-8 flex items-center justify-center space-x-4">
    <Button
      @click="togglePlay"
      class="w-10 rounded-full bg-gray-300 font-bold text-black transition hover:scale-125 xl:w-20"
    >
      <component :is="isPlaying ? Pause : Play" :size="30" />
    </Button>
    <div class="flex items-center space-x-2">
      <Volume2 :size="24" class="text-black" />
      <input
        type="range"
        min="0"
        max="100"
        v-model="volume"
        @input="handleVolumeChange"
        class="w-60 cursor-pointer rounded-lg"
      />
    </div>
  </div>
  <p class="italic text-black">
    {{
      isPlaying ? 'Słuchasz próbki dźwięku...' : 'Kliknij play, aby posłuchać!'
    }}
  </p>
</template>

<script setup lang="ts">
import { ref, onUnmounted, watch } from 'vue';
import { Play, Pause, Volume2 } from 'lucide-vue-next';
import Button from './button/Button.vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const isPlaying = ref(false);
const volume = ref(50);
let audio: HTMLAudioElement | null = null;

watch(volume, (newVolume) => {
  if (audio) {
    audio.volume = newVolume / 100;
  }
});

const togglePlay = () => {
  if (!audio) {
    audio = new Audio(props.src);
    audio.loop = false;
    audio.volume = volume.value / 100;
  }

  if (isPlaying.value) {
    audio.pause();
  } else {
    audio.play();
  }

  isPlaying.value = !isPlaying.value;
};

const handleVolumeChange = (event: Event) => {
  if (audio) {
    const target = event.target as HTMLInputElement;
    audio.volume = Number(target.value) / 100;
  }
};

onUnmounted(() => {
  if (audio) {
    audio.pause();
    audio = null;
  }
});
</script>

<style scoped></style>
