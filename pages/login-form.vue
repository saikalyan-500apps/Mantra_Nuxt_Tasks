<!-- pages/loginForm -->
<template>
  <div class="h-screen bg-zinc-900">
  <FormComponent
    :Heading="LoginFormData[0].Heading"
    :fields="LoginFormData[0].fields"
    :button="LoginFormData[0].button"
    @form-submit="LoginData"
  />
  <p class="text-center mt-5 text-white">New user? Register here : 
    <span style="color: rgb(27, 179, 230);">
      <nuxt-link to="/register-form">Register</nuxt-link>
     </span> 
  </p>
  <div v-if="errorMessage" class="p-4 mb-4 text-lg text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span class="font-medium">{{ errorMessage }}</span> Please enter correct login details.
  </div>
  <div v-if="successMessage" class="p-4 mb-4 text-lg text-center text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
    <span class="font-medium">{{ successMessage }}</span>
  </div>
</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useFormStore } from '~/store/form';
import {useLoginStore} from '~/store'

definePageMeta({
  layout: 'authentication'
})

const storeData = useFormStore();
const loginStore = useLoginStore();
const LoginFormData = ref(storeData.LoginForm);
const errorMessage = ref('');
const successMessage = ref('');

const LoginData = (formData) => {
  console.log('Form Data:', formData);

  const loggedInUser = storeData.userData.checkLogin(formData.Username, formData.Password);


  console.log('Registered Users:', storeData.userData.registeredUsers);

  if (loggedInUser) {
    storeData.userData.loggedInUser = loggedInUser;
    successMessage.value = 'Login successful. Redirecting to Home page.';
    errorMessage.value = ''; 
    setTimeout(() => {
      navigateTo('/')
    },1500)
    loginStore.setLoggedIn(true)
    console.log('Login successful');
  } else {
    errorMessage.value = 'Invalid credentials';
    successMessage.value = ''; 
    console.error('Invalid credentials');
  }
};

watch([successMessage, errorMessage], ([success, error]) => {
  if (success || error) {
    setTimeout(() => {
      successMessage.value = '';
      errorMessage.value = '';
    }, 5000); 
  }
});
</script>
