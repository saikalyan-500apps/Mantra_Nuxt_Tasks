<!-- components/FormComponent -->
<template>
  <div class="flex items-center justify-center mt-10">
    <div class="bg-white border border-blue-500 rounded-md p-8 shadow-md w-96">
      <p class="text-center text-3xl mb-6">{{ Heading }}</p>

      <!-- Form fields -->
      <div v-for="(field, fieldIndex) in fields" :key="fieldIndex" class="mb-4">
        <label :for="field.label" class="block text-sm text-gray-600">{{ field.label }} - {{ code }}</label>
        <input
          :type="field.inputfield"
          :id="field.label"
          v-model="formData[field.label]"
          class="h-12 w-full border border-blue-500 rounded-md px-3 py-2 transition focus:outline-none focus:border-blue-700"
        />
    </div>
    <button
        @click="handleSubmit"
        class="bg-blue-500 hover:bg-blue-600 text-white h-12 w-full rounded-md transition duration-300 ease-in-out"
      >
        {{ button }}
      </button>
    <p class="text-white">{{ message }}</p>
  </div>
    </div>
</template>

<script setup>
const props = defineProps(["Heading", "fields", "button", "onSubmit", "code", "message"]);

console.log(props.code)
console.log(props.message)

const formData = ref({});

const handleSubmit = () => {
  props.onSubmit(formData.value);
}
console.log(formData.value)

</script>
