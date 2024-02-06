//composables/useWeatherApi.js
import { ref } from 'vue';
import { useFetch } from '#app';

export const useWeatherApi = () => {
    const placeName = ref('');
    const places = ref({});
    const places_current = ref({});
    const loading = ref(false);
    const error = ref(null);
    
    const fetchData = async () => {
        loading.value = true;
        error.value = null;
        
        try {
            const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${placeName.value}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3f4174474amsh600331a31614d2ep12bf23jsndddced32c21c',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                },
            };
            const response = await useFetch(url, options);
            const data = response.data;
            
            places.value = data.location;
            places_current.value = data.current;
        } catch (e) {
            error.value = e.message;
        } finally {
            loading.value = false;
        }
    };

    return { fetchData, placeName, places, places_current, loading, error };
};
