<template>
    <div>
      <form @register="handleRegister" />
      <form2 :username="registeredUsername" :password="registeredPassword" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import form from "./form.vue"
  import form2 from './form2.vue'
  
  const registeredUsername = ref('');
  const registeredPassword = ref('');
  
  function handleRegister(data) {
    registeredUsername.value = data.username;
    registeredPassword.value = data.password;
  }
  </script>
  