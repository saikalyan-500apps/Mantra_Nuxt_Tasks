<template>
      <div v-show="showJoke" class="fixed bottom-0 right-0 p-4 bg-gray-800 text-white mb-2">
        <button @click="closeJoke" class="bg-red-500 hover:bg-red-600 text-white px-2 right-0 fixed mb-2">X</button>
        <h3 class="text-center">Joke of the day:</h3>
        <h2 class="mt-3 text-red-100 text-lg">{{ joke() }}</h2>
      </div>
</template>

<script setup>
const { joke } = useNuxtApp();
const showJoke = ref(true);

const closeJoke = () => {
  showJoke.value = false;
};
</script>