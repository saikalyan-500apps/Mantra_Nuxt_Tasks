<template>
  <div class="h-screen bg-gray-100 flex">
    <!-- Left compartment -->
    <div class="w-1/2 bg-zinc-800 flex flex-col items-center py-8">
      <h1 class="text-3xl font-bold mb-6 text-white">Create Shape</h1>
      <label for="shape" class="mb-2 text-white">Select Shape:</label>
      <select v-model="selectedShape" @change="resetProperties" class="mb-4 p-2 border rounded w-72">
        <option value="">Select</option>
        <option value="circle">Circle</option>
        <option value="rectangle">Rectangle</option>
        <option value="square">Square</option>
      </select>

      <div v-if="selectedShape" class="flex flex-col items-center mb-4">
        <label for="height" class="mb-1 text-white">Height:</label>
        <input type="number" v-model="shape.height" class="w-72 mb-2 p-2 border rounded" />

        <label for="width" class="mb-1 text-white">Width:</label>
        <input type="number" v-model="shape.width" class="w-72 mb-2 p-2 border rounded" />

        <label for="color" class="mb-1 text-white">Color:</label>
        <input type="color" v-model="shape.color" class="w-72 h-12 mb-4 p-2 border rounded" />

        <button @click="createShape" class="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Create</button>
      </div>
    </div>

    <!-- Right compartment -->
    <div class="w-1/2 bg-zinc-900 flex items-center justify-center">
      <div :style="previewStyle" class="preview border-4 border-gray-400 rounded-lg"></div>
    </div>
  </div>
</template>

  <script setup>
  import { ref } from 'vue';
  class Shape {
    constructor(height, width, color) {
      this.height = height;
      this.width = width;
      this.color = color;
    }
  
    createStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        backgroundColor: this.color
      };
    }
  }
  
  class Circle extends Shape {
    constructor(height, color) {
      super(height, height, color);
    }
  
    createStyle() {
      const style = super.createStyle();
      style.borderRadius = '50%';
      return style;
    }
  }
  
  class Rectangle extends Shape {
    constructor(height, width, color) {
      super(height, width, color);
    }
  }
  
  class Square extends Rectangle {
    constructor(height, color) {
      super(height, height, color);
    }
  }
  
  let selectedShape = ref('');
  let shape = ref(new Shape(0, 0, '#000000'));
  
  function resetProperties() {
    shape.value = new Shape(0, 0, '#000000');
  }
  
  function createShape() {
    switch (selectedShape.value) {
      case 'circle':
        previewStyle.value = new Circle(shape.value.height, shape.value.color).createStyle();
        break;
      case 'rectangle':
        previewStyle.value = new Rectangle(shape.value.height, shape.value.width, shape.value.color).createStyle();
        break;
      case 'square':
        previewStyle.value = new Square(shape.value.height, shape.value.color).createStyle();
        break;
      default:
        previewStyle.value = {};
        break;
    }
  }
  
  const previewStyle = ref({});
  </script>
  
  <style scoped>
  .preview {
    margin-top: 2rem;
  }
  </style>
  