<template>
  <div>
    <FormComponent
      v-for="(data, index) in RegisterFormData"
      :key="index"
      :Heading="data.Heading"
      :fields="data.fields"
      :button="data.button"
      :onSubmit="RegisterData"
    />
    <p class="text-center mt-5">Already registered: 
     <span style="color: blue;">
      <nuxt-link to="/login-form">login here</nuxt-link>
     </span> 
  </p>
    <div v-if="errorMessage" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span class="font-medium">{{ errorMessage }}</span>
      <ul class="mt-1.5 list-disc list-inside" v-if="validationErrors.length > 0">
        <li v-for="error in validationErrors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div v-if="successMessage" class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
      <span class="font-medium">{{ successMessage }}</span>
    </div>
    <div class="flex p-4 mt-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-400" role="alert">
      <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Ensure that these requirements are met:</span>
        <ul class="mt-1.5 list-disc list-inside">
          <li>Username should contain between 3 - 16 letters</li>
          <li>Password must contain at least 8 characters, one digit, one lowercase and one uppercase letter</li>
          <li>'@' is must for Email</li>
          <li>A phoneNumber should be exact 10 digits.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFormStore } from '~/store/form';

definePageMeta({
  layout: 'authentication'
})

const storeData = useFormStore();
const RegisterFormData = ref(storeData.RegisterForm);
const errorMessage = ref('');
const successMessage = ref('');
const RedirectionMessage = ref('');
const validationErrors = ref([]);

const RegisterData = (formData) => {
  errorMessage.value = '';
  successMessage.value = '';
  validationErrors.value = validateFormData(formData);

  if (validationErrors.value.length > 0) {
    errorMessage.value = 'Please correct the form fields.';
    return;
  }

  const userData = {
    Username: formData.Username,
    Password: formData.Password,
    Email: formData.Email,
    PhoneNumber: formData.PhoneNumber
  };

  console.log('Registering the data', userData);

  storeData.userData.storeUser(userData);
  successMessage.value = 'Registration successful!';

  setTimeout(() => {
    navigateTo('/login-form');
  }, 2000);
};

const validateFormData = (formData) => {
  const errors = [];

  // Validate each field and push detailed error messages to the array
  if (!storeData.userData.validateUsername(formData.Username)) {
    errors.push('Username should contain between 3 - 16 letters.');
  }

  if (!storeData.userData.validatePassword(formData.Password)) {
    errors.push('Password must contain at least 8 characters, one digit, one lowercase, and one uppercase letter.');
  }

  if (!storeData.userData.validateEmail(formData.Email)) {
    errors.push('Invalid email address.');
  }

  if (!storeData.userData.validatePhoneNumber(formData.PhoneNumber)) {
    errors.push('Invalid phone number.');
  }

  return errors;
};
</script>
