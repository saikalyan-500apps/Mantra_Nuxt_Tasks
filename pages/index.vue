<template>
  <div>
    <!-- Section 1: Introduction -->
    <section class="bg-gray-900 text-white py-16 w-full">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4 mt-8">Welcome to All-in-One Entertainment!</h1>
        <p class="text-xl mb-8">Explore movies, learn, play games, and more!</p>
        <NuxtLink class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out" to="/register-form">Get Started</NuxtLink>
      </div>
    </section>

    <!-- Section 2: Movies -->
    <section id="movies" class="py-16  bg-gray-100 w-full">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Discover Movies</h2>
        <p class="text-xl">We use RapidAPI for fetching movie data.</p>
      </div>
    </section>

    <!-- Section 2: Movies -->
    <section id="movies" class="py-16  bg-gray-200 w-full">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Explore and Learn</h2>
        <p class="text-xl">checkout our Learn page and findout how shapes, forms are generated.</p>
      </div>
    </section>

    <!-- Section 3: Weather -->
    <section class="py-16  bg-gray-300 w-full">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Check the Weather</h2>
        <p class="text-xl">We use RapidAPI for fetching weather information.</p>
      </div>
    </section>

    <!-- Section 4: Games -->
    <section class="py-16  bg-gray-400 w-full">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Play Games</h2>
        <p class="text-xl">We have created a tic-tac-toe game for you to enjoy and relax.</p>
      </div>
    </section>

    <!-- Section 5: Currency Exchange -->
    <section class="py-16  bg-gray-500 w-full">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Check Currency Exchange</h2>
        <p class="text-xl">We offer a currency exchange feature to check real-time exchange rates between different countries.</p>
      </div>
    </section>

    <!-- Section 6: More Features -->
    <section class="py-16  bg-gray-600 w-full">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Explore More Features</h2>
        <p class="text-x mb-12">We are constantly working on adding new features to enhance your experience. Stay tuned for updates!</p>
      </div>
    </section>

    <PluginComponent/>
  </div>
</template>


<script setup>

</script>
