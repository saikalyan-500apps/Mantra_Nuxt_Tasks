<!-- pages/captcha.vue -->

<template>
   <p class=" text-3xl text-center">Security check</p><br/>
   <p class=" text-2xl text-center">Enter the correct code to navigate to weather api.</p><br/>
  <div class="flex flex-row justify-center items-center">
    <label for="captcha" class="mb-4">code: {{ correctCode }}</label>
    <input v-model="userInput" type="text" id="captcha" class="h-12 w-1/2 border mb-4 border-blue-500 rounded-md" />
    <button @click="checkCode" class="mb-4 bg-blue-500 p-4 h-12">Submit</button>
  </div>
  <p class="text-center">{{ message }}</p>
</template>

<!-- <template>
  <FormComponent
    :Heading="captchaForm[0].Heading"
    :code="correctCode"
    :fields="captchaForm[0].fields"
    :button="captchaForm[0].button"
    :onSubmit="checkCode"
    :message="message"
  />
</template> -->




<script setup>
import { ref } from 'vue';
import { useCaptchaStore } from '~/store';
// import { useCaptchaForm } from '~/store/form';

// const { captchaForm } = useCaptchaForm(); 

const { setCaptchaVerified } = useCaptchaStore();

definePageMeta({
  layout: 'captcha'
})

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
