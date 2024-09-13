<template>
  <Layout>
    <section id="Contact" class="section">
      <div class="flex w-full flex-col items-center p-4 md:p-16">
        <div
          class="mx-auto flex w-full flex-col rounded-2xl bg-gray-400 shadow-lg md:flex-row"
        >
          <div
            class="flex flex-col items-center rounded-t-2xl bg-gray-600 p-8 md:w-1/3 md:rounded-l-2xl md:rounded-tr-none"
          >
            <div class="mb-4 text-3xl font-bold text-black">CONTACT ME</div>
            <div class="text-xl text-white">Phone Number +48 577 613 012</div>
            <div class="text-xl text-white"></div>
          </div>
          <div class="p-8 md:w-2/3">
            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div
                class="app-form-group"
                v-for="field in fields"
                :key="field.placeholder"
              >
                <input
                  v-model="formData[field.model]"
                  :type="field.type"
                  :placeholder="field.placeholder"
                  class="w-full border-b-2 border-black bg-transparent p-3 text-white placeholder-gray-200 focus:border-gray-400"
                />
                <span v-if="errors[field.model]" class="text-sm text-red-500">
                  {{ errors[field.model] }}
                </span>
              </div>
              <div class="app-form-group flex justify-end space-x-4">
                <button
                  type="button"
                  @click="resetForm"
                  class="text-lg text-black transition-all hover:scale-125 hover:text-gray-500 xl:text-xl"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  class="text-lg text-black transition-all hover:scale-125 hover:text-gray-500 xl:text-xl"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <Modal :message="modalMessage" v-model:isVisible="isModalVisible" />
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import Modal from '../components/Modal.vue';
import Layout from '../Layouts/Layout.vue';

interface FormData {
  [key: string]: string;
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
  { model: 'name', type: 'text', placeholder: 'NAME' },
  { model: 'email', type: 'email', placeholder: 'EMAIL' },
  { model: 'subject', type: 'text', placeholder: 'CONTACT NO' },
  { model: 'message', type: 'text', placeholder: 'MESSAGE' },
];

const validateForm = () => {
  errors.value = {};

  // Validate name
  if (!formData.value.name || formData.value.name.length > 32) {
    errors.value.name =
      'Name must be a string with a maximum of 32 characters.';
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !formData.value.email ||
    !emailPattern.test(formData.value.email) ||
    formData.value.email.length > 32
  ) {
    errors.value.email = 'Email must be valid and a maximum of 32 characters.';
  }

  // Validate subject (phone number)
  const phonePattern = /^\+48\d{9}$/;
  if (!formData.value.subject || !phonePattern.test(formData.value.subject)) {
    errors.value.subject =
      'Contact number must start with +48 and followed by 9 digits.';
  }

  // Validate message
  if (!formData.value.message || formData.value.message.length > 150) {
    errors.value.message = 'Message must be a maximum of 150 characters.';
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return; // Prevent submission if validation fails
  }

  localStorage.setItem('formData', JSON.stringify(formData.value));
  console.log('Form submitted:', formData.value);

  try {
    await emailjs.send(
      'service_7k8sj9l',
      'template_grzlr27',
      formData.value,
      'rQSq3naNJRIg6BL5-'
    );
    modalMessage.value = 'Email sent successfully!';
  } catch (error) {
    modalMessage.value = 'Failed to send email: ' + error;
  }

  isModalVisible.value = true;
  resetForm(); // Reset form after successful submission
};

const resetForm = () => {
  Object.assign(formData.value, {
    name: '',
    subject: '',
    email: '',
    message: '',
  });
  errors.value = {}; // Reset errors as well
};
</script>

<style scoped>
.text-red-500 {
  color: red;
}
</style>
