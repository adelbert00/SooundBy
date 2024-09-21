<template>
  <section class="mx-auto w-full max-w-7xl px-4 pt-10">
    <div class="text-center">
      <h1 class="font-playfair text-2xl font-bold md:text-3xl">Sklep</h1>
      <p class="font-lato text-lg font-normal md:text-xl">
        Kupuj moje sample packi i usługi audio bezpośrednio tutaj.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
      >
        <img
          :src="product.image"
          alt="Produkt"
          class="mb-4 h-32 w-full rounded-md object-cover"
          loading="lazy"
        />
        <h2 class="mb-2 font-playfair text-xl font-semibold">
          {{ product.name }}
        </h2>
        <p class="mb-4 font-lato text-lg text-gray-300">
          {{ product.description }}
        </p>
        <p class="mb-4 font-playfair text-lg font-bold">
          {{ product.price }} PLN
        </p>
        <Button
          @click="buyProduct(product.id)"
          class="bg-green-600 font-bold hover:bg-green-700"
        >
          Kup teraz
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../components/ui/button/Button.vue';

const products = ref([
  {
    id: 1,
    name: 'Sample Pack 1',
    description: 'Profesjonalny sample pack z 100 unikalnymi dźwiękami.',
    price: 49.99,
    image: '@/assets/products/sample1.webp',
  },
  {
    id: 2,
    name: 'Sample Pack 2',
    description: 'Sample pack z nowoczesnymi dźwiękami perkusji.',
    price: 59.99,
    image: '@/assets/products/sample2.webp',
  },
  {
    id: 3,
    name: 'Sample Pack 3',
    description: 'Paczka sampli do produkcji muzyki filmowej.',
    price: 69.99,
    image: '@/assets/products/sample3.webp',
  },
]);

const buyProduct = (id: number) => {
  console.log(`Kupno produktu o ID: ${id}`);
};
</script>
