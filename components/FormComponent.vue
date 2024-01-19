<template>
  <div>
    <h2 class="text-center">{{ title }}</h2>
    <div class="form">
      <form @submit.prevent="submitForm" class="flex flex-col">
        <template v-for="(input, index) in formInputs" :key="index">
          <label :for="input.id" class="text-green">{{ input.label }}</label>
          <input :id="input.id" class="h-12 w-full border mb-4"><br/>
        </template>
        <button type="submit" class="bg-blue-500 h-12 text-white font-base cursor-pointer">{{ submitButtonText }}</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['title', 'formInputs', 'submitButtonText']);
const formData = ref(createInitialFormData());

function submitForm() {
  props.onSubmit({ ...formData.value });
  formData.value = createInitialFormData();
}

function createInitialFormData() {
  const initialData = {};
  props.formInputs.forEach(input => {
    initialData[input.id] = '';
  });
  return initialData;
}
</script>
