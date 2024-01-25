<!-- components/FormComponent -->
<template>
  <div class="flex items-center justify-center mt-10">
    <div class="bg-white border border-blue-500 rounded-md p-8 shadow-md w-96">
      <p class="text-center text-3xl mb-6">{{ Heading }}</p>

      <!-- Form fields -->
      <div v-for="(field, fieldIndex) in fields" :key="fieldIndex" class="mb-4">
        <label :for="field.label" class="block text-sm text-gray-600">{{ field.label }}</label>
        <input
          :type="field.inputfield"
          :id="field.label"
          v-model="formData[field.label]"
          class="h-12 w-full border border-blue-500 rounded-md px-3 py-2 transition focus:outline-none focus:border-blue-700"
        />
        <!-- <p class="text-red-500 text-sm mt-1">{{ error }}</p> -->
      <!-- :class="{ 'border-red-500': !isFieldValid(field.label) }" -->
      <!-- <p v-if="!isFieldValid(field.label)" class="text-red-500">{{ field.error }}</p> -->
    </div>
    <button
        @click="handleSubmit"
        class="bg-blue-500 hover:bg-blue-600 text-white h-12 w-full rounded-md transition duration-300 ease-in-out"
      >
        {{ button }}
      </button>
    <!-- {{ message }} -->
  </div>
    </div>
</template>

<script setup>
const props = defineProps(["Heading", "fields", "button", "onSubmit"]);
//Add error prop here
// Add to props : "code", "message"
console.log(props.message)

const formData = ref({});

const handleSubmit = () => {
  // for (const [label, value] of Object.entries(formData.value)) {
  //   const field = props.fields.find((f) => f.label === label);
  //   if (field && field.validation && !field.validation.pattern.test(value)) {
  //     field.error = field.validation.error;  
  //     return;
  //   }
  // }

  props.onSubmit(formData.value);
}
console.log(formData)
// const isFieldValid = (fieldName) => {
//   const field = props.fields.find((f) => f.label === fieldName);
//   if (field && field.validation) {
//     return field.validation.pattern.test(formData.value[field.label]);
//   }
//   return true;
// };

</script>
