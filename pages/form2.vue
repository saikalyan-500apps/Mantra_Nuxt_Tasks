<template>
  <div>
    <h2 class="text-center">Login</h2>
    <div>
      <form @submit.prevent="login" class="flex flex-col">
        <label for="loginUsername">Username</label>
        <input id="loginUsername" v-model="loginUsername" class="h-12 w-full border mb-4 "><br/>
        <label for="loginPassword">Password</label>
        <input id="loginPassword" type="password" v-model="loginPassword" class="h-12 w-full border mb-4"><br/>
        <button type="submit" class="bg-blue-500 h-12 text-sm cursor-pointer">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store';

const userStore = useUserStore();
const loginUsername = ref(userStore.username);
const loginPassword = ref(userStore.password);

function login() {
  console.log('Logging in...');
  console.log('Username:', loginUsername.value);
  console.log('Password:', loginPassword.value);

  loginUsername.value = '';
  loginPassword.value = '';
}
</script>
