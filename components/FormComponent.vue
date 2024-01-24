<!-- components/FormComponent -->
<template>
  <div>
    <p class="text-center text-3xl">{{ Heading }}</p>
    <div class="form">
      <div v-for="(field, fieldIndex) in fields" :key="fieldIndex" class="flex flex-col">
      <label :for="field.label" class="text-green">{{ field.label }}</label> 
      <!-- : {{ code }} -->
      <input 
      :type="field.inputfield" 
      :id="field.label" 
      v-model="formData[field.label]" 
      class="h-12 w-full border mb-4 border-blue-500 rounded-md" 
      :class="{ 'border-red-500': !isFieldValid(field.label) }"/>
      <p v-if="!isFieldValid(field.label)" class="text-red-500">{{ field.error }}</p>
    </div>
    <button @click="handleSubmit" class="bg-blue-500 h-12 w-40 justify-center text-white font-base cursor-pointer">{{ button }}</button>
    <br/>
    <!-- {{ message }} -->
  </div>
    </div>
</template>

<script setup>
const props = defineProps(["Heading", "fields", "button", "onSubmit"]);
// Add to props : "code", "message"
console.log(props.message)

const formData = ref({});

const handleSubmit = () => {
  for (const [label, value] of Object.entries(formData.value)) {
    const field = props.fields.find((f) => f.label === label);
    if (field && field.validation && !field.validation.pattern.test(value)) {
      field.error = field.validation.error;  
      return;
    }
  }

  props.onSubmit(formData.value);
}
console.log(formData)
const isFieldValid = (fieldName) => {
  const field = props.fields.find((f) => f.label === fieldName);
  if (field && field.validation) {
    return field.validation.pattern.test(formData.value[field.label]);
  }
  return true;
};

</script>
