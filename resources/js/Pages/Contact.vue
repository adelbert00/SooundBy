<template>
  <Layout
    class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mt-20 text-center">
        <h1 class="text-5xl font-bold">Kontakt</h1>
        <p class="mt-4 text-xl">
          Masz pytania lub chcesz współpracować? Skontaktuj się za pomocą
          poniższego formularza lub za pośrednictwem danych kontaktowych.
        </p>
      </div>

      <div class="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div class="rounded-lg bg-gray-800 p-8 shadow-xl">
          <h2 class="mb-6 text-3xl font-bold">Wyślij wiadomość</h2>
          <Form @submit="handleSubmit" class="space-y-6">
            <div v-for="field in fields" :key="field.model">
              <FormItem
                :invalid="Boolean(errors[field.model])"
                class="space-y-2"
              >
                <Label :for="field.model">{{ field.placeholder }}</Label>
                <Input
                  v-model="formData[field.model]"
                  :type="field.type"
                  :id="field.model"
                  required
                />
                <span v-if="errors[field.model]" class="text-sm text-red-500">
                  {{ errors[field.model] }}
                </span>
              </FormItem>
            </div>
            <FormItem :invalid="errors.message" class="space-y-2">
              <Label for="message">Wiadomość</Label>
              <Textarea
                v-model="formData.message"
                id="message"
                rows="6"
                required
              />
              <span v-if="errors.message" class="text-sm text-red-500">
                {{ errors.message }}
              </span>
            </FormItem>
            <Button
              type="submit"
              class="w-full transform bg-gradient-to-r from-purple-500 to-indigo-500 text-lg font-semibold transition duration-300 hover:scale-105 hover:from-purple-600 hover:to-indigo-600"
            >
              Wyślij wiadomość
            </Button>
          </Form>
        </div>

        <div class="space-y-8">
          <div class="rounded-lg bg-gray-800 p-8 shadow-xl">
            <h2 class="mb-6 text-3xl font-bold">Informacje kontaktowe</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <Phone class="mr-4 h-6 w-6 text-purple-400" />
                <span>+48 577 613 812</span>
              </div>
              <div class="flex items-center">
                <Mail class="mr-4 h-6 w-6 text-purple-400" />
                <span>contact@sounddesign.com</span>
              </div>
              <div class="flex items-center">
                <MapPin class="mr-4 h-6 w-6 text-purple-400" />
                <span>Warszawa, Polska</span>
              </div>
            </div>
          </div>

          <div class="rounded-lg bg-gray-800 p-8 shadow-xl">
            <h2 class="mb-6 text-3xl font-bold">
              Dlaczego warto współpracować ze mną?
            </h2>
            <ul class="space-y-4">
              <li class="flex items-center">
                <div class="mr-4 rounded-full bg-purple-500 p-2">
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="{2}"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Ponad 10 lat doświadczenia w produkcji audio</span>
              </li>
              <li class="flex items-center">
                <div class="mr-4 rounded-full bg-purple-500 p-2">
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="{2}"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Różnorodne portfolio w różnych branżach</span>
              </li>
              <li class="flex items-center">
                <div class="mr-4 rounded-full bg-purple-500 p-2">
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="{2}"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  Pasja do tworzenia unikalnych doświadczeń dźwiękowych
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Modal :message="modalMessage" v-model:isVisible="isModalVisible" />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import Modal from '../components/Modal.vue';
import { Phone, Mail, MapPin } from 'lucide-vue-next';
import Layout from '../Layouts/Layout.vue';
import { Form } from 'vee-validate';
import FormItem from '@/components/ui/form/FormItem.vue';
import Input from '@/components/ui/input/Input.vue';
import Label from '@/components/ui/label/Label.vue';
import Textarea from '@/components/ui/textarea/Textarea.vue';
import Button from '../components/ui/button/Button.vue';

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

const handleSubmit = async () => {
  if (!validateForm()) return;

  try {
    const emailParams = {
      from_name: formData.value.name,
      from_email: formData.value.email,
      subject: formData.value.subject,
      message: formData.value.message,
    };

    console.log('Sending email with params:', emailParams);

    await emailjs.send(
      'service_7k8sj9l',
      'template_grzlr27',
      emailParams,
      'rQSq3naNJRIg6BL5-'
    );

    modalMessage.value =
      'Dziękujemy za przesłanie wiadomości! Skontaktujemy się z Tobą wkrótce.';
  } catch (error) {
    console.error('Error sending email:', error);
    modalMessage.value =
      'Nie udało się wysłać wiadomości. Proszę spróbować ponownie później.';
  }

  isModalVisible.value = true;
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
