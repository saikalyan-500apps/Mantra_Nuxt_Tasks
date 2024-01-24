<template>
    <div class="max-w-screen-md mx-auto">
      <h1 class="text-3xl text-center font-bold font-sans md:font-serif mb-6">Movie Info</h1>
  
      <div class="mb-6">
        <img :src="movie.backdrop_path" alt="cover_image" class="w-full h-auto rounded-md shadow-md">
      </div>
  
      <div class="flex">
        <img :src="movie.poster_path" alt="movie_image" class="w-32 h-48 object-cover rounded-md shadow-md mr-4">
  
        <div>
          <h2 class="text-2xl font-bold mb-2">{{ movie.title }}</h2>
          <h4 class="text-lg mb-2">Release Date: {{ movie.release_date }}</h4>
          <h4 class="text-lg mb-2">Genre: {{ movie.genres }}</h4>
          <h4 class="text-lg mb-2">
            Vote Average: {{ movie.vote_average }}
            <span v-if="movie.vote_average > 5" class="text-green-500">🔺</span>
            <span v-else class="text-red-500">🔻</span>
          </h4>
          <p class="mb-4">Movie Overview: {{ movie.overview }}</p>
          <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-800">
            <a :href="youtubeTrailerUrl" target="_blank">Watch Trailer</a>
          </button>
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

const youtubeTrailerUrl = movie.value.youtube_trailer
console.log('trailer',youtubeTrailerUrl)

onMounted(() => {
  fetchMovieDetails();
});

</script>

