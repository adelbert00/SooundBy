<template>
  <footer class="relative bg-transparent text-black">
    <div
      class="absolute left-1/2 w-[360px] -translate-x-1/2 justify-center border-b-2 border-black md:w-[720px] xl:w-[1280px]"
    ></div>

    <section
      class="mx-auto w-[360px] px-6 pt-6 md:w-full md:max-w-4xl xl:max-w-7xl"
    >
      <Form @submit="handleSubmit" class="space-y-6">
        <div
          class="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0"
        >
          <div class="text-center md:text-left">
            <p class="text-xl font-bold">
              <strong>Zapisz się do naszego newslettera</strong>
            </p>
          </div>

          <div class="flex w-full max-w-md items-center md:w-auto">
            <Input
              type="email"
              class="w-full rounded bg-transparent text-base font-bold text-black placeholder:text-black focus:placeholder:text-transparent md:w-auto"
              placeholder="Adres e-mail"
              v-model="formData.email"
              name="email"
              id="email"
            />
            <Button
              type="submit"
              class="hover:bg-primary-dark ml-2 rounded-lg bg-gray-300 px-10 text-xl font-bold shadow-md"
              :disabled="isLoading"
              aria-label="Subscribe"
            >
              <span v-if="!isLoading">Subscribe</span>
              <span v-else>Subscribing...</span>
            </Button>
          </div>
        </div>
        <div
          v-if="errors.email"
          class="text-center text-sm text-red-500 md:text-left"
        >
          {{ errors.email }}
        </div>
      </Form>
    </section>

    <Modal :message="modalMessage" v-model:isVisible="isModalVisible" />

    <section
      class="mx-auto w-[360px] px-6 py-6 md:w-full md:max-w-4xl xl:max-w-7xl"
    >
      <div class="flex justify-center space-x-6">
        <a
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="transform text-black transition-colors duration-300 hover:scale-110"
        >
          <Facebook class="h-8 w-8" />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          class="transform text-black transition-colors duration-300 hover:scale-110"
        >
          <Twitter class="h-8 w-8" />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="transform text-black transition-colors duration-300 hover:scale-110"
        >
          <Instagram class="h-8 w-8" />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="transform text-black transition-colors duration-300 hover:scale-110"
        >
          <Linkedin class="h-8 w-8" />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="transform text-black transition-colors duration-300 hover:scale-110"
        >
          <Github class="h-8 w-8" />
        </a>
      </div>
    </section>

    <div class="p-4 text-center text-lg font-bold">
      © 2024 Copyright:
      <a
        href="https://tw-elements.com/"
        class="text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        SoundBy
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';
import Button from '../components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import Modal from '../components/Modal.vue';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from 'lucide-vue-next';
import emailjs from '@emailjs/browser';

interface FormData {
  email: string;
}

const formData = ref<FormData>({
  email: '',
});

const errors = ref<{ [key: string]: string }>({});
const isLoading = ref(false);

const isModalVisible = ref(false);
const modalMessage = ref('');

const handleSubmit = async () => {
  errors.value = {};

  if (!formData.value.email) {
    errors.value.email = 'Adres e-mail jest wymagany.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.value.email)) {
    errors.value.email = 'Podaj prawidłowy adres e-mail.';
    return;
  }

  isLoading.value = true;

  try {
    await emailjs.send(
      'service_7k8sj9l',
      'template_grzlr27',
      {
        email: formData.value.email,
      },
      'rQSq3naNJRIg6BL5-'
    );

    formData.value.email = '';
    modalMessage.value = 'Dziękujemy za zapisanie się do newslettera!';
  } catch (error) {
    console.error('Error sending email:', error);
    modalMessage.value =
      'Nie udało się zapisać do newslettera. Spróbuj ponownie później.';
  } finally {
    isLoading.value = false;
    isModalVisible.value = true;
  }
};
</script>
