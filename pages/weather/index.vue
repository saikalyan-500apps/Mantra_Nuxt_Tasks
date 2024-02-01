<template>
    <div class="search">
      <input v-model="placeName" class="border-gray-500" placeholder="Enter City Name"/>
      <button @click="fetchData">Search place</button>
    </div>
    <div class="info">
        <h2>City : {{ places.name }}, {{ places.region }}, {{ places.country }}</h2>
        <p>Latitude: {{ places.lat }} / longitude {{ places.lon }}</p>
        <p>Temperature: {{ places_current.temp_c }}°C / {{ places_current.temp_f }}°F</p>
        <img v-if="places_current.temp_c > 20" src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png" alt="sun">
        <img v-else-if="places_current.temp_c < 20 & places_current.temp_c > 10 " src="https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-16.png" alt="cloud">
        <img v-else="places_current.temp_c < 10" src="https://cdn-icons-png.flaticon.com/512/414/414866.png" alt="snow">
        <p>LocalTime: {{ places.localtime }}</p>
      </div>
      <PluginComponent/>
  </template>
  
  <script setup>
  import { ref,onMounted } from 'vue';

  definePageMeta({
  layout: 'weather',
  middleware : ['auth']
})
  
  const places = ref({});
  const places_current = ref({});
  const placeName = ref('');
  
  const fetchData = async () => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${placeName.value}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3f4174474amsh600331a31614d2ep12bf23jsndddced32c21c',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      places.value = result.location;
      places_current.value = result.current;
      console.log(places.value);
      console.log(places_current.value);
    } catch (error) {
      console.error(error);
    }
  };
  onMounted(() => {
    fetchData()
  })
  </script>

  <style>
  .search{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input{
    width: 1000px;
    height: 50px;
    margin-top: 20px;
  }
  .search button{
    height: 50px;
    padding: 10px;
    background-color: rgb(30, 103, 187);
    margin-top: 20px;
  }
  .search button:hover{
    background-color: transparent;
    border: 1px solid white;
  }
  .info{
    margin-top: 10px;
    margin-left: 20%;
  }
  .info img{
    height: 50px;
    width: 50px;
  }
  .info p {
    font-size: 20px;
  }
</style>
  