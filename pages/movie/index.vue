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

        <!-- Sort options -->
    <div class="flex justify-end mt-4">
      <label class="mr-2">Sort:</label>
      <select @change="sortMovies($event.target.value)">
        <option value="default">Default</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </div>
    <div role="status" v-if="loading" class="flex justify-center">
      <svg aria-hidden="true" class="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
    </div>


    <!-- movieList -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="movie in paginatedMovies" :key="movie._id" class="bg-white p-4 rounded shadow-md">
        <img :src="movie.poster_path" alt="movie_image" class="w-240 h-100  mb-4 rounded-md">
        <h4 class="text-lg font-semibold mb-2 text-center">{{ movie.title }}</h4>
        <button @click="navigateTo(`/movie/${movie._id}`)" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-800 ml-24">
          More details
        </button>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';

definePageMeta({
  middleware : ['login']
})

const movieData = ref([]);
const itemsPerPage = 12;
const currentPage = ref(1);
const loading = ref(true)

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
  setTimeout(async () => {
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
    loading.value = false; 
  } catch (error) {
    console.log(error);
    loading.value = false; 
  }

  },2000)
};
onMounted(() => {
    fetchData()
})

// Method to sort movies based on the selected option
const sortMovies = (option) => {
  switch (option) {
    case 'asc':
      insertionSort('title', true);
      break;
    case 'desc':
      insertionSort('title', false);
      break;
    default:
      break;
  }
};

// Insertion sort algorithm
const insertionSort = (key, ascending = true) => {
  for (let i = 1; i < movieData.value.length; i++) {
    let j = i - 1;
    const temp = movieData.value[i];
    while (j >= 0 && (ascending ? movieData.value[j][key] > temp[key] : movieData.value[j][key] < temp[key])) {
      movieData.value[j + 1] = movieData.value[j];
      j--;
    }
    movieData.value[j + 1] = temp;
  }
};
</script>
