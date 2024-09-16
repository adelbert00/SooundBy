<template>
  <footer class="mx-auto max-w-4xl bg-transparent text-center text-white">
    <div
      class="absolute left-1/2 w-[1280px] -translate-x-1/2 justify-center border-b-2 border-black"
    ></div>
    <div class="px-6 pt-6">
      <Form>
        <div
          class="gird-cols-1 grid items-center justify-center md:grid-cols-3"
        >
          <div class="md:mb-6">
            <p>
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div
            class="relative flex items-center md:mb-6"
            data-twe-input-wrapper-init
          >
            <Input
              type="email"
              class="w-[320px] justify-center rounded bg-transparent"
              placeholder="Email address"
            />
          </div>

          <div class="mb-6">
            <Button
              type="Button"
              class="mr-32 rounded-lg bg-primary text-lg uppercase"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </Form>
    </div>

    <div class="bg-black/5 p-4 text-center">
      © 2024 Copyright:
      <a href="https://tw-elements.com/">SooundBy</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Button from '../components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import { Form } from 'vee-validate';
</script>
