<template>
  <div>
    <h2 class="text-center">{{ title }}</h2>
    <div>
      <form @submit.prevent="handleSubmit" class="flex flex-col">
        <label :for="usernameId">{{ usernameLabel }}</label>
        <input :id="usernameId" v-model="inputUsername" class="h-12 border mb-4"><br/>
        <label :for="passwordId">{{ passwordLabel }}</label>
        <input :id="passwordId" type="password" v-model="inputPassword" class="h-12 border mb-4"><br/>
        <button type="submit" class="bg-blue-500 h-12 text-white font-base cursor-pointer">{{ buttonText }}</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/store/index';

const inputUsername = ref('');
const inputPassword = ref('');
const userStore = useUserStore();

const { title, usernameLabel, passwordLabel, buttonText, usernameId, passwordId } = defineProps(["title","usernameLabel","passwordLabel","buttonText","usernameId","passwordId"]);

const emitEvent = () => {
  console.log('Setting credentials:', inputUsername.value, inputPassword.value);
  userStore.setUserCredentials(inputUsername.value, inputPassword.value);
};

const handleSubmit = () => {
  console.log('Button clicked. Handling form submission.');
  emitEvent('submit-form');
};

</script>
