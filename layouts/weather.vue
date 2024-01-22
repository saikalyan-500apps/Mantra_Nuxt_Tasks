<template>
    <div>
        <header class="bg-gray-800 p-4">
            <nav>
                <ul class="flex flex-row gap-8 justify-between">
                    <li class="list-style-none"><NuxtLink class="text-white text-lg font-bold font-sans md:font-serif" to="/weather">weather</NuxtLink></li>
                    <ul>
                        <ul class="flex flex-row gap-8 justify-center">
                            <li class="list-style-none"><NuxtLink class="text-white text-lg font-bold font-sans md:font-serif" to="/">Home</NuxtLink></li>
                        </ul>
                    </ul>
                </ul>
            </nav>
        </header>
       <div>
        <slot/>
       </div>
    </div>
</template>
