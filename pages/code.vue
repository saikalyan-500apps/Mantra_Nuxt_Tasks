<template>
  <div class="bg-gray-300 p-8 rounded-lg shadow-lg">
    <div v-for="(item, index) in formItems" :key="index" class="mb-4">
      <div class="flex flex-col md:flex-row items-center mb-2">
        <label class="text-gray-800 mr-2">Label:</label>
        <input v-model="item.label" type="text" class="bg-white text-gray-800 py-2 px-4 rounded focus:outline-none focus:bg-gray-200 flex-1 md:w-2/5">
        <label class="text-gray-800 mt-2 mr-2">Type:</label>
        <select v-model="item.type" @change="checkRadio" class="bg-white text-gray-800 py-2 px-4 rounded focus:outline-none focus:bg-gray-200 flex-1 md:w-2/5">
          <option v-for="inputType in inputTypes" :value="inputType" :key="inputType">{{ inputType }}</option>
        </select>
      </div>
      <div v-if="item.type === 'radio'">
        <label class="text-gray-800 mr-2">Number of Radio Buttons:</label>
        <input v-model="item.radioCount" type="number" min="1" class="bg-white text-gray-800 py-2 px-4 rounded focus:outline-none focus:bg-gray-200 w-16">
      </div>
    </div>

    <button @click="addFormItem" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4">Add Field</button>
    
    <div class="flex items-center justify-start mb-4">
      <label class="text-gray-800 mr-2">Button Type:</label>
      <select v-model="buttonType" class="bg-white text-gray-800 py-2 px-4 rounded focus:outline-none focus:bg-gray-200">
        <option v-for="btnType in buttonTypes" :value="btnType" :key="btnType">{{ btnType }}</option>
      </select>
    </div>
    
    <button @click="generateForm" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mb-4">Generate Form</button>

    <div v-if="generatedForm" class="bg-black p-4 rounded relative">
      <h2 class="text-xl mb-4 text-white">Generated Form</h2>
      <pre class="bg-gray-800 p-4 rounded text-white">{{ generatedForm }}</pre>
      <button @click="copyToClipboard" class="absolute top-0 right-0 mt-2 mr-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
        <ClipboardIcon class="h-6 w-6 text-gray-100" />
      </button>
      <button @click="downloadForm" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mt-4">
        Download Form Code
      </button>
      <p v-if="copied" class="absolute top-0 right-0 mb-12 mr-2 text-sm text-white">Copied!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ClipboardIcon } from '@heroicons/vue/24/solid';

const formItems = ref([]);
const inputTypes = ref(['text','password', 'checkbox', 'radio', 'number', 'email', 'date', 'color', 'button', 'datetime-local', 'file', 'search']);
const buttonTypes = ref(['submit', 'reset', 'button']);
let buttonType = ref('submit');
let generatedForm = ref('');
let copied = ref(false);

const addFormItem = () => {
  formItems.value.push({
    label: '',
    type: 'text',
    radioCount: 1
  });
};

const generateForm = () => {
  let formHTML = '<form>';
  formItems.value.forEach(item => {
    if (item.type === 'radio') {
      formHTML += ` <label>${item.label} :</label><br/>`
      for (let i = 1; i <= item.radioCount; i++) {
        formHTML += `<div>
          <label>${item.label} ${i}:</label><input type="${item.type}" value="${''}" name="${item.label.toLowerCase()}" id="${item.label.substring(0, 3)}_${i}">
        </div>`;
      }
    } else {
      formHTML += `<div>
        <label>${item.label}:</label><input type="${item.type}" value="${''}" name="${item.label.toLowerCase()}" id="${item.label.substring(0, 3)}">
      </div>`;
    }
  });
  formHTML += `<div><button type="${buttonType.value}">${buttonType.value}</button></div>`;
  formHTML += '</form>';
  generatedForm.value = formHTML;
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(generatedForm.value);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};

const downloadForm = () => {
  const element = document.createElement('a');
  const file = new Blob([generatedForm.value], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'generated_form.txt';
  document.body.appendChild(element);
  element.click();
};
</script>

