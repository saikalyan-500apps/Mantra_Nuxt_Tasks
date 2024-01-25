<template>
  <div class="flex flex-wrap justify-center items-center">
    <div v-for="(task, index) in tasks" :key="index" @click="flipCard(index)" class="card">
      <div class="front bg-blue-500 rounded p-4">
        <p class="text-white font-bold">Task - {{ index + 1 }}</p>
      </div>
      <div v-show="flippedCard === index" class="back bg-green-500 rounded p-4">
        <p>{{ task.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
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

let flippedCard = null;

const flipCard = (index) => {
  flippedCard = flippedCard === index ? null : index;
};
</script>

<style scoped>
.card {
  perspective: 1000px;
  width: 120px;
  height: 120px;
  margin: 10px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  cursor: pointer;
}

.card:hover {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.back {
  transform: rotateY(180deg);
}
</style>
