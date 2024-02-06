<!-- components/WeatherComponent.vue -->
<template>
    <div class="search">
        <input v-model="searchInput" class="border-gray-500" placeholder="Enter City Name"/>
        <button @click="fetchWeather">Search Place</button>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
        <div class="info">
            <h2>City : {{ places?.name }}, {{ places?.region }}, {{ places?.country }}</h2>
            <p>Latitude: {{ places?.lat }} / longitude {{ places?.lon }}</p>
            <p>Temperature: {{ places_current?.temp_c }}°C / {{ places_current?.temp_f }}°F</p>
            <img :src="getWeatherIcon" alt="weather icon">
            <p>LocalTime: {{ places?.localtime }}</p>
        </div>
    </div>
</template>

<script setup>
import { useWeatherApi } from '~/composables/useWeatherApi';

const { fetchData, placeName, places, places_current, loading, error } = useWeatherApi();
const searchInput = placeName.value;

const getWeatherIcon = () => {
    if (places_current.value.temp_c > 20) {
        return 'https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png';
    } else if (places_current.value.temp_c > 10) {
        return 'https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-16.png';
    } else {
        return 'https://cdn-icons-png.flaticon.com/512/414/414866.png';
    }
};

const fetchWeather = async () => {
    await fetchData();
};
</script>
