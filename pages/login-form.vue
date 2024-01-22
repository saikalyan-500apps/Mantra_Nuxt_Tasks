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

import { toRefs } from 'vue';

const LoginData = (formData) => {
  const savedUserData = storeData.SavedLocalData ? storeData.SavedLocalData.value : null;

  if (savedUserData) {
    // Convert reactive proxies to plain objects
    const formDataPlain = toRefs(formData);
    const savedUserDataPlain = toRefs(savedUserData);

    // Access the values
    const enteredUsername = formDataPlain.Username;
    const enteredPassword = formDataPlain.Password;

    console.log("Entered username:", enteredUsername);
    console.log("Entered password:", enteredPassword);

    if (
      enteredUsername === savedUserDataPlain.Username &&
      enteredPassword === savedUserDataPlain.Password
    ) {
      console.log('Successfully logged in!');
    } else {
      console.error('Incorrect username or password. Login failed.');
    }
  } else {
    console.error('No saved user data found. Please register again.');
  }
};
</script>
