<template>
    <div>
        <header class="shawdow-sm bg-gray-800 p-4">
            <nav>
                <ul class="flex gap-8 justify-center">
                    <li><NuxtLink class="text-white font-bold text-lg font-sans md:font-serif" to="/">Home</NuxtLink></li>
                    <li><NuxtLink class="text-white font-bold text-lg font-sans md:font-serif" to="/form">form-register</NuxtLink></li>
                    <li><NuxtLink class="text-white font-bold text-lg font-sans md:font-serif" to="/form2">form-login</NuxtLink></li>
                    <li><NuxtLink class="text-white font-bold text-lg font-sans md:font-serif" to="/weather">weather</NuxtLink></li>
                    <li><NuxtLink class="text-white font-bold text-lg font-sans md:font-serif" to="/game">game</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto">
            <slot/>
        </div>
    </div>
</template>

