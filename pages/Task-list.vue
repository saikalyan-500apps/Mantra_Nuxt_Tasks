<template>
    <div class="task-container ">
      <div class="task-box " v-for="(task, index) in tasks" :key="index" @mouseover="flipCard(index)">
        <div class="task-content front">
          Task - {{ index + 1 }}
        </div>
        <div class="task-content back">
          {{ task.description }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  definePageMeta({
  middleware : ['login']
  })

  const tasks = [
    { description: 'Creating a new project using Nuxt and understanding routes, folder structure, etc.' },
    { description: 'Form validation (using store)' },
    { description: 'Data fetch using weather API' },
    { description: 'Added routing middleware for weather Api.' },
    { description: 'Added Joke plugin and plugin component for reusable purpose.' },
    { description: 'Added Regex to input fields.' },
    { description: 'Added closures and object prototype for currency page.' },
    { description: 'Understood about JS async/await and implemented movie api using it.' },
  ];
  
  const flipped = ref(null);
  
  function flipCard(index) {
    flipped.value = index;
  }
  </script>
  
  <style scoped>
  .task-container {
    display: flex;
    justify-content:flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .task-box {
    width: 230px;
    height: 230px;
    perspective: 1000px;
    margin: 10px;
  }
  
  .task-content {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    backface-visibility: hidden;
    transition: transform 0.5s;
  }
  
  .front {
    background-color: #4CAF50;
  }
  
  .back {
    background-color: #f44336;
    transform: rotateY(180deg);
  }
  
  .task-box:hover .front {
    transform: rotateY(-180deg);
  }
  
  .task-box:hover .back {
    transform: rotateY(0deg);
  }
  
  .task-box:hover .back,
  .task-box:hover .front {
    cursor: pointer;
  }
  </style>
  