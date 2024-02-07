<template>
    <div class="search">
      <input v-model="placeName" class="border-gray-500" placeholder="Enter City Name"/>
      <button @click="fetchData">Search place</button>
    </div>

        <div class="relative mx-auto border-gray-400 dark:border-gray-400 bg-gray-400 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] mt-12">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                <div >
                  <p>City : {{ places.name }}, {{ places.region }}, {{ places.country }}</p>
                  <p>Latitude: {{ places.lat }} / longitude {{ places.lon }}</p>
                  <p>Temperature: {{ places_current.temp_c }}°C / {{ places_current.temp_f }}°F</p>
                  <img v-if="places_current.temp_c > 20" src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png" alt="sun" class="h-12 w-12 ">
                  <img v-else-if="places_current.temp_c < 20 & places_current.temp_c > 10 " src="https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-16.png" alt="cloud" class="h-12 w-12 ">
                  <img v-else="places_current.temp_c < 10" src="https://cdn-icons-png.flaticon.com/512/414/414866.png" alt="snow" class="h-12 w-12 ">
                  <p>LocalTime: {{ places.localtime }}</p>
                </div>
            </div>
        </div>
        <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>

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
  