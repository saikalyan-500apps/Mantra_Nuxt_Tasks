<template>
    <div>
      <header class="shadow-sm bg-gray-800 p-4">
        <nav class="flex items-center justify-between">
          <div>
            <ul class="flex gap-8">
              <li><NuxtLink class="text-white font-bold text-lg font-sans md:font-serif" to="/">Home</NuxtLink></li>
              <li> <NuxtLink class="text-white font-bold text-lg font-sans md:font-serif" to="/weather">Weather</NuxtLink></li>
              <li> <NuxtLink class="text-white font-bold text-lg font-sans md:font-serif" to="/currency-exchange">currency</NuxtLink></li>
              <li><NuxtLink class="text-white font-bold text-lg font-sans md:font-serif" to="/game">Games</NuxtLink></li>
            </ul>
          </div>
          <div>
            <ul class="flex gap-8">
              <li class="text-white font-bold text-4xl font-sans md:font-serif">Nuxt Tasks</li>
            </ul>
          </div>
          <div>
            <div>
                <ul class="flex gap-8">
                    <li><NuxtLink class="text-white font-bold text-lg font-sans md:font-serif hover:bg-gray-500 p-3 rounded-md" to="/register-form">Register</NuxtLink></li>
                    <li><NuxtLink class="text-white font-bold text-lg font-sans md:font-serif hover:bg-gray-500 p-3 rounded-md" to="/login-form">Login</NuxtLink></li>
                </ul>
            </div>

          </div>
        </nav>
      </header>
      <div class="container mx-auto">
        <slot />
      </div>
    </div>
  </template>
  