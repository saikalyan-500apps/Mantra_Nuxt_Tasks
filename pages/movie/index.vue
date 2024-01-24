<template>
    <div>
        <h1 class="text-3xl text-center font-bold font-sans md:font-serif">Movie list</h1>
        <!-- Pagination controls -->
      <div class="flex justify-center mt-4">
        <button
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="bg-gray-600 text-gray-100 py-2 px-4 rounded-md mr-2 w-40"
        >
          Previous
        </button>
        <button
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="bg-gray-600 text-gray-100 py-2 px-4 rounded-md w-40"
        >
          Next
        </button>
      </div>

      <!-- movieList -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="movie in paginatedMovies" :key="movie._id" class="bg-white p-4 rounded shadow-md">
          <img :src="movie.poster_path" alt="movie_image" class="w-full h-110 object-cover mb-4 rounded-md">
          <h4 class="text-lg font-semibold mb-2 text-center">{{ movie.title }}</h4>
          <button @click="navigateTo(`/movie/${movie._id}`)" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-800 ml-24">
            More details
          </button>
        </div>
      </div>
  
    </div>
  </template>
  

<script setup>

import { ref } from 'vue';
  
  const movieData = ref([]);
  const itemsPerPage = 12;
const currentPage = ref(1);

const paginatedMovies = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return movieData.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(movieData.value.length / itemsPerPage));

const changePage = (newPage) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage;
  }
};

  
  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '68df74a627mshb2b63f4873f82f7p148afcjsn8955113f228c',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
      },
    };
    try {
      const response = await fetch('https://movies-api14.p.rapidapi.com/movies', options);
      const data = await response.json();
      movieData.value = data.movies;
      console.log(movieData.value);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData()
  </script>