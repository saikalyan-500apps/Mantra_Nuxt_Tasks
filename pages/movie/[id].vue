<template>
  <div class="h-screen bg-zinc-900">
    <div class="max-w-screen-md mx-auto bg-zinc-000">
      <h1 class="text-3xl text-center text-white font-bold font-sans md:font-serif mb-6">Movie Info</h1>
  
      <div class="mb-6">
        <img :src="movie.backdrop_path" alt="cover_image" class="w-full h-auto rounded-md shadow-md">
      </div>
  
      <div class="flex">
        <img :src="movie.poster_path" alt="movie_image" class="w-32 h-48 object-cover rounded-md shadow-md mr-4">
  
        <div>
          <h2 class="text-2xl font-bold mb-2 text-white">{{ movie.title }}</h2>
          <h4 class="text-lg mb-2 text-white">Release Date: {{ movie.release_date }}</h4>
          <h4 class="text-lg mb-2 text-white">Genre: {{ movie.genres }}</h4>
          <h4 class="text-lg mb-2 text-white">
            Vote Average: {{ movie.vote_average }}
            <span v-if="movie.vote_average > 5" class="text-green-500">🔺</span>
            <span v-else class="text-red-500">🔻</span>
          </h4>
          <p class="mb-4 text-white">Movie Overview: {{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
   
  </template>

<script setup>
const { id } = useRoute().params

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const movie = ref({});

const fetchMovieDetails = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3f4174474amsh600331a31614d2ep12bf23jsndddced32c21c',
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(`https://movies-api14.p.rapidapi.com/movie/${id}`, options);
    const data = await response.json();
    console.log(data);
    movie.value = data.movie;
    console.log('main-movie',movie.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchMovieDetails();
});

</script>

