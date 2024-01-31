<template>
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <div v-for="(item, index) in formItems" :key="index" class="mb-4">
        <div class="flex flex-col md:flex-row items-center mb-2">
          <label class="text-gray-800 mr-2 md:w-1/5">Label:</label>
          <input v-model="item.label" type="text" class="bg-gray-100 text-gray-800 py-2 px-4 rounded focus:outline-none focus:bg-gray-200 flex-1 md:mr-4">
          <label class="text-gray-800 mr-2 mt-2 md:mt-0 md:w-1/5">Type:</label>
          <select v-model="item.type" class="bg-gray-100 text-gray-800 py-2 px-4 rounded focus:outline-none focus:bg-gray-200 md:w-2/5">
            <option v-for="inputType in inputTypes" :value="inputType" :key="inputType">{{ inputType }}</option>
          </select>
        </div>
      </div>
  
      <button @click="addFormItem" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4">Add Field</button>
      
      <div class="flex items-center justify-start mb-4">
        <label class="text-gray-800 mr-2">Button Type:</label>
        <select v-model="buttonType" class="bg-gray-100 text-gray-800 py-2 px-4 rounded focus:outline-none focus:bg-gray-200">
          <option v-for="btnType in buttonTypes" :value="btnType" :key="btnType">{{ btnType }}</option>
        </select>
      </div>
      
      <button @click="generateForm" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mb-4">Generate Form</button>
  
      <div v-if="generatedForm" class="text-white bg-black p-4 rounded">
        <h2 class="text-xl mb-4 text-white">Generated Form</h2>
        <pre class="bg-gray-800 p-4 rounded text-white">{{ generatedForm }}</pre>
        <button @click="copyToClipboard" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">@</button>
        <button @click="downloadForm" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full ml-2">Download Form Code</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const formItems = ref([]);
  const inputTypes = ref(['text', 'checkbox', 'radio', 'number', 'email', 'date', 'color', 'button', 'datetime-local', 'file', 'image', 'search']);
  const buttonTypes = ref(['submit', 'reset', 'button']);
  let buttonType = ref('submit');
  let generatedForm = ref('');
  
  const addFormItem = () => {
    formItems.value.push({
      label: '',
      type: 'text'
    });
  };
  
  const generateForm = () => {
    let formHTML = '<form>';
    formItems.value.forEach(item => {
      formHTML += `<div class="mb-4">
        <label>${item.label}:</label><input type="${item.type}" value="${''}" name="${item.label.toLowerCase()}" id="${item.label.substring(1, 3)}" class="bg-gray-100 text-gray-800 py-2 px-4 rounded">
      </div>`;
    });
    formHTML += `<div><button type="${buttonType.value}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">${buttonType.value}</button></div>`;
    formHTML += '</form>';
    generatedForm.value = formHTML;
  };
  
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = generatedForm.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
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
  