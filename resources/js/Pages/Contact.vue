<template>
  <Layout class="grain-effect min-h-screen text-white">
    <section class="mx-auto w-[360px] md:w-full md:max-w-4xl xl:max-w-7xl">
      <div class="text-center" data-aos="fade-up">
        <h1 class="font-playfair text-3xl font-bold sm:text-3xl md:text-5xl">
          Kontakt
        </h1>
        <p class="font-lato text-lg font-normal md:text-xl">
          Masz pytania lub chcesz współpracować? Skontaktuj się za pomocą
          poniższego formularza lub za pośrednictwem danych kontaktowych.
        </p>
      </div>

      <div
        class="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2"
        data-aos="fade-up"
      >
        <div
          class="rounded-lg p-8 shadow-lg transition duration-300 hover:scale-105"
        >
          <h2 class="mb-6 font-playfair text-xl font-bold md:text-2xl">
            Wyślij wiadomość
          </h2>
          <Form @submit="handleSubmit" class="space-y-6">
            <FormItem
              v-for="field in fields"
              :key="field.model"
              :invalid="Boolean(errors[field.model])"
              class="space-y-2"
            >
              <Label :for="field.model">{{ field.placeholder }}</Label>
              <Input
                v-model="formData[field.model]"
                :type="field.type"
                :id="field.model"
                :name="field.model"
              />
              <span v-if="errors[field.model]" class="text-sm text-red-500">
                {{ errors[field.model] }}
              </span>
            </FormItem>
            <FormItem :invalid="errors.message" class="space-y-2">
              <Label for="message">Wiadomość</Label>
              <Textarea
                v-model="formData.message"
                id="message"
                name="message"
                rows="6"
              />
              <span v-if="errors.message" class="text-sm text-red-500">
                {{ errors.message }}
              </span>
            </FormItem>
            <Button
              variant="outline"
              type="submit"
              class="w-full transform text-lg font-semibold text-black transition duration-300 hover:scale-105"
              :disabled="isLoading"
              aria-label="Wyślij wiadomość"
            >
              <span v-if="!isLoading">Wyślij wiadomość</span>
              <span v-else>Wysyłanie...</span>
            </Button>
          </Form>
        </div>

        <div class="space-y-8" data-aos="fade-left">
          <div
            class="rounded-lg p-8 shadow-lg transition duration-300 hover:scale-105"
          >
            <h2 class="mb-6 font-playfair text-xl font-bold md:text-2xl">
              Informacje kontaktowe
            </h2>
            <div class="space-y-4">
              <div
                class="flex items-center transition duration-300 hover:text-gray-200"
              >
                <Phone class="mr-4 h-6 w-6 text-gray-200" />
                <span>+48 577 613 812</span>
              </div>
              <div
                class="flex items-center transition duration-300 hover:text-gray-200"
              >
                <Mail class="mr-4 h-6 w-6 text-gray-200" />
                <span>contact@sounddesign.com</span>
              </div>
              <div
                class="flex items-center transition duration-300 hover:text-gray-200"
              >
                <MapPin class="mr-4 h-6 w-6 text-gray-200" />
                <span>Warszawa, Polska</span>
              </div>
            </div>
          </div>

          <div
            class="rounded-lg p-8 shadow-lg transition duration-300 hover:scale-105"
            data-aos="zoom-in"
          >
            <h2 class="mb-6 font-playfair text-xl font-bold md:text-2xl">
              Dlaczego warto współpracować ze mną?
            </h2>
            <ul class="space-y-4">
              <li class="flex items-center">
                <div class="mr-4 rounded-full bg-gray-600 p-2">
                  <Check class="h-6 w-6 text-white" />
                </div>
                <span class="font-lato">
                  Ponad 10 lat doświadczenia w produkcji audio
                </span>
              </li>
              <li class="flex items-center">
                <div class="mr-4 rounded-full bg-gray-600 p-2">
                  <Check class="h-6 w-6 text-white" />
                </div>
                <span class="font-lato">
                  Różnorodne portfolio w różnych branżach
                </span>
              </li>
              <li class="flex items-center">
                <div class="mr-4 rounded-full bg-gray-600 p-2">
                  <Check class="h-6 w-6 text-white" />
                </div>
                <span class="font-lato">
                  Pasja do tworzenia unikalnych doświadczeń dźwiękowych
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Testimonials data-aos="fade-up" />

      <Modal :message="modalMessage" v-model:isVisible="isModalVisible" />
    </section>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useReCaptcha } from 'vue-recaptcha-v3';
import Layout from '../Layouts/Layout.vue';
import Modal from '../components/Modal.vue';
import { Phone, Mail, MapPin, Check } from 'lucide-vue-next';
import { Form } from 'vee-validate';
import FormItem from '@/components/ui/form/FormItem.vue';
import Input from '@/components/ui/input/Input.vue';
import Label from '@/components/ui/label/Label.vue';
import Textarea from '@/components/ui/textarea/Textarea.vue';
import Button from '../components/ui/button/Button.vue';
import Testimonials from './Testimonials.vue';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const formData = ref<FormData>({
  name: '',
  subject: '',
  email: '',
  message: '',
});

const errors = ref<{ [key: string]: string }>({});
const isModalVisible = ref(false);
const modalMessage = ref('');
const isLoading = ref(false);

type FormFieldKeys = keyof FormData;

const fields: { model: FormFieldKeys; type: string; placeholder: string }[] = [
  { model: 'name', type: 'text', placeholder: 'Imię' },
  { model: 'email', type: 'email', placeholder: 'Email' },
  { model: 'subject', type: 'text', placeholder: 'Temat' },
];

const validateForm = () => {
  errors.value = {};

  if (!formData.value.name || formData.value.name.length > 32) {
    errors.value.name = 'Imię musi mieć maksymalnie 32 znaki.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.value.email || !emailPattern.test(formData.value.email)) {
    errors.value.email = 'Podaj prawidłowy adres e-mail.';
  }

  if (!formData.value.subject) {
    errors.value.subject = 'Temat jest wymagany.';
  }

  if (!formData.value.message || formData.value.message.length > 150) {
    errors.value.message = 'Wiadomość musi mieć maksymalnie 150 znaków.';
  }

  return Object.keys(errors.value).length === 0;
};

const { executeRecaptcha } = useReCaptcha();

const handleSubmit = async () => {
  if (!validateForm()) return;

  isLoading.value = true;

  try {
    const token = await executeRecaptcha('submit_form');
    const payload = {
      ...formData.value,
      recaptcha: token,
    };

    const emailParams = {
      from_name: formData.value.name,
      from_email: formData.value.email,
      subject: formData.value.subject,
      message: formData.value.message,
      recaptcha: token,
    };

    console.log('Sending email with params:', emailParams);

    await emailjs.send(
      'service_7k8sj9l',
      'template_grzlr27',
      emailParams,
      'rQSq3naNJRIg6BL5-'
    );

    modalMessage.value = 'Dziękujemy za przesłanie wiadomości!';
  } catch (error) {
    console.error('Error sending email:', error);
    modalMessage.value =
      'Nie udało się wysłać wiadomości. Proszę spróbować ponownie później.';
  }

  isModalVisible.value = true;
  isLoading.value = false;
  resetForm();
};

const resetForm = () => {
  formData.value = { name: '', subject: '', email: '', message: '' };
  errors.value = {};
};
</script>

<style scoped>
.text-red-500 {
  color: red;
}
</style>
