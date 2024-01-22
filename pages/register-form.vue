<!-- pages/register-page.vue -->
<template>
    <FormComponent
      v-for="(data, index) in RegisterFormData"
      :key="index"
      :Heading="data.Heading"
      :fields="data.fields"
      :button="data.button"
      :onSubmit="RegisterData"
    />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useFormStore } from '~/store/form';
  
  const storeData = useFormStore();
  const RegisterFormData = ref(storeData.RegisterForm);
  
  const RegisterData = (formData) => {
    console.log('Registering the data', formData);
    localStorage.setItem('registeredUserData', JSON.stringify(formData));
  };
  </script>
  