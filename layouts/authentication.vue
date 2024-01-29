<template>
    <div>
      <header class="bg-gray-800 p-4 flex justify-between items-center">
        <div>
          <NuxtLink class="text-white text-lg font-bold font-sans md:font-serif" to="/">Home</NuxtLink>
        </div>
        <nav>
          <ul class="flex gap-8">
            <li><NuxtLink class="text-white text-lg font-bold font-sans md:font-serif" to="/register-form">Register</NuxtLink></li>
            <li><NuxtLink class="text-white text-lg font-bold font-sans md:font-serif" to="/login-form">Login</NuxtLink></li>
          </ul>
        </nav>
      </header>
      <div>
        <slot/>
      </div>
    </div>
  </template>
  