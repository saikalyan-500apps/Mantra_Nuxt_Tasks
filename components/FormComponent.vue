<!-- components/FormComponent -->
<template>
  <div class="flex items-center justify-center">
    <div class="bg-zinc-800 border border-blue-500 rounded-md p-8 shadow-md w-96 mt-10">
      <p class="text-center text-3xl mb-6 text-white">{{ Heading }}</p>

      <!-- Form fields -->
      <div v-for="(field, fieldIndex) in fields" :key="fieldIndex" class="mb-4">
        <label :for="field.label" class="block text-sm text-gray-100">{{ field.label }} - {{ code }}</label>
        <!-- Render select field if the inputfield type is 'select' -->
        <select v-if="field.inputfield === 'select'"
                :id="field.label"
                v-model="field.value"
                class="h-12 w-full border border-blue-500 rounded-md px-3 py-2 transition focus:outline-none focus:border-blue-700">
          <option v-for="(option, index) in field.options" :key="index" :value="option.value">{{ option.label }}</option>
        </select>
        <!-- Render regular input field for other types -->
        <input v-else
               :type="field.inputfield"
               :id="field.label"
               v-model="field.value"
               class="bg-zinc-800 h-12 w-full border border-blue-500 rounded-md px-3 py-2 transition focus:outline-none focus:border-blue-700"/>
      </div>

      <button @click="handleSubmit"
              class="bg-blue-700 hover:bg-blue-600 text-white h-12 w-full rounded-md transition duration-300 ease-in-out">
        {{ button }} 
      </button>

      <p class="text-white">{{ msg }}</p>
    </div>
  </div>
</template>


<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps(["Heading", "fields", "button", "code", "msg"]);

console.log(props.code)
console.log(props.message)

const formData = ref({});
const emits = defineEmits(['form-submit'])

const handleSubmit = () => {
  const formData = {}
    props.fields.forEach(field => {
      formData[field.label] = field.value
      field.value = '' // reset value of the field after submiting.
    })
    emits("form-submit", formData)
}
console.log(formData.value)


</script>
