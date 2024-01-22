<!-- pages/loginForm -->
<template>
  <FormComponent
    :Heading="LoginFormData[0].Heading"
    :fields="LoginFormData[0].fields"
    :button="LoginFormData[0].button"
    :onSubmit="LoginData"
  />
</template>

<script setup>
import { ref } from 'vue';
import { useFormStore } from '~/store/form';

const storeData = useFormStore();
const LoginFormData = ref(storeData.LoginForm);


const LoginData = (formData) => {
  console.log('Form Data:', formData);

  const loggedInUser = storeData.userData.checkLogin(formData.Username, formData.Password);

  console.log('Registered Users:', storeData.userData.registeredUsers);

  if (loggedInUser) {
    storeData.userData.loggedInUser = loggedInUser;
    console.log('Login successful');
  } else {
    console.error('Invalid credentials');
  }
};

</script>
