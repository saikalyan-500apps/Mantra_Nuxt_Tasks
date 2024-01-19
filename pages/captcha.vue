<!-- pages/captcha.vue -->

<template>
   <p class=" text-3xl text-center">Security check</p><br/>
   <p class=" text-2xl text-center">Enter the correct code to navigate to weather api.</p><br/>
  <div class="flex flex-row justify-center items-center">
    <label for="captcha" class="mt-4">code: {{ correctCode }}</label>
    <input v-model="userInput" type="text" id="captcha" class="w-120" />
    <button @click="checkCode" class="mt-4 bg-blue-500 p-4 h-12">Submit</button>
  </div>
  <p class="text-center">{{ message }}</p>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, } from 'vue-router';
import { useCaptchaStore } from '~/store';

const { setCaptchaVerified } = useCaptchaStore();

definePageMeta({
  layout: 'captcha'
})

const router = useRouter();

const correctCode = ref(generateRandomCode());
const userInput = ref('');
const message = ref('');

function generateRandomCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function checkCode() {
  if (verifyCaptcha(userInput.value)) {
    message.value = 'Successful!';
    console.log('Redirecting to /weather...');
    navigateTo('/weather');
    setCaptchaVerified(false);
  } else {
    message.value = 'Incorrect code. Please try again.';
  }
}

function verifyCaptcha(inputCode) {
  return inputCode === correctCode.value;
}
</script>
