<template>
  <div class="flex justify-center items-center h-full">
    <div v-if="loggedInUser" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-end px-4 pt-4">
        <!-- You can add dropdown or other actions here if needed -->
      </div>
      <div class="flex flex-col items-center pb-10">
        <h1 class="text-xl font-medium text-gray-900 dark:text-white mb-1">{{ loggedInUser.Username }}</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ loggedInUser.Email }}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ loggedInUser.PhoneNumber }}</p>
        <div class="flex mt-4 md:mt-6">
          <!-- Add any additional buttons or links here -->
        </div>
      </div>
    </div>
    <div v-else>
      <p>No user logged in.</p>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '~/store/form';

const storeData = useFormStore();
const loggedInUser = storeData.userData.loggedInUser;
</script>


