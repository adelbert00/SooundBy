<template>
  <footer class="bg-transparent text-white">
    <div
      class="absolute left-1/2 w-[360px] -translate-x-1/2 justify-center border-b-2 border-black md:w-[720px] xl:w-[1280px]"
    ></div>
    <section
      class="mx-auto w-[360px] px-6 pt-6 md:w-full md:max-w-4xl xl:max-w-7xl"
    >
      <Form>
        <div
          class="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0"
        >
          <div class="text-center md:text-left">
            <p class="text-lg font-semibold">
              <strong>Zapisz się do naszego newslettera</strong>
            </p>
          </div>

          <div class="flex w-full max-w-md items-center md:w-auto">
            <Input
              type="email"
              class="w-full rounded bg-transparent text-black placeholder-gray-500 md:w-auto"
              placeholder="Adres e-mail"
            />
            <Button
              type="button"
              class="ml-2 rounded-lg bg-primary px-4 py-2 text-lg font-bold uppercase"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </Form>
    </section>

    <div class="bg-black/5 p-4 text-center">
      © 2024 Copyright:
      <a
        href="https://tw-elements.com/"
        class="text-purple-400 hover:text-purple-300"
      >
        SoundBy
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Button from '../components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import { Form } from 'vee-validate';
</script>
