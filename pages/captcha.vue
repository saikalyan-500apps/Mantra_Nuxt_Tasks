<!-- pages/captcha.vue -->

<template>
  <div>
    <label for="captcha">Enter the code: {{ correctCode }}</label>
    <input v-model="userInput" type="text" id="captcha" />
    <button @click="checkCode">Submit</button>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

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
    router.push('/weather');
  } else {
    message.value = 'Incorrect code. Please try again.';
  }
}

function verifyCaptcha(inputCode) {
  return inputCode === correctCode.value;
}
</script>
