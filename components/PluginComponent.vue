<template>
      <div v-show="showRes" class="fixed bottom-0 right-0 p-4 bg-gray-800 text-white mb-2">
        <button @click="closeRes" class="bg-red-500 hover:bg-red-600 text-white px-2 right-0 fixed mb-2">X</button>
        <h3 class="text-center">Tip:</h3>
        <h2 class="mt-3 text-red-100 text-lg">{{ response() }}</h2>
      </div>
</template>

<script setup>
const { response } = useNuxtApp();
const showRes = ref(true);

const closeRes = () => {
  showRes.value = false;
};
</script>