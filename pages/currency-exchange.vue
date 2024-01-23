<template>
    <div class="flex">
      <!-- Left side: Currency Conversion -->
      <div class="flex-1 mr-4">
        <label for="fromCurrency">From Currency:</label>
        <select v-model="fromCurrency" id="fromCurrency" class="p-2 border rounded-md">
          <option v-for="currency in currencies" :key="currency.value" :value="currency.value">
            {{ currency.label }}
          </option>
        </select><br/>
        <br/>
        <label for="toCurrency" class="mt-4">To Currency:</label>
        <select v-model="toCurrency" id="toCurrency" class="p-2 border rounded-md ml-5">
          <option v-for="currency in currencies" :key="currency.value" :value="currency.value">
            {{ currency.label }}
          </option>
        </select><br/>
  
        <button @click="fetchExchangeRate" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-28">Fetch Exchange Rate</button>
  
        <div v-if="exchangeRate !== null" class="mt-4">
          <p class="text-lg font-semibold ml-28">Exchange Rate:</p>
          <p class="text-xl ml-36">{{ exchangeRate }}</p>
        </div>
  
        <div v-if="error !== null" class="mt-4">
          <p class="text-red-700 text-lg font-semibold ml-28">Error:</p>
          <p class="text-xl ml-28">{{ error }}</p>
        </div>
      </div>
  
      <!-- Right side: Detailed Currencies -->
      <div class="flex-1">
        <label class="text-lg font-semibold ml-96">Check Currency Info</label><br/>
        <select v-model='check' class="p-2 border rounded-md ml-80">
          <option v-for="currency in currencies" :key="currency.value" :value="currency.value">
            {{ currency.label }}
          </option>
        </select>
  
        <div v-if="selectedCurrencyInfo" class="mt-4">
          <p class="text-lg font-semibold">Detailed Information:</p>
          <p class="text-xl">{{ selectedCurrencyInfo }}</p>
        </div>
      </div>
    </div>
  </template>
  

<script setup>
import { ref,onMounted } from 'vue';

const currencies = [
  { value: 'SGD', label: 'SGD : Singapore Dollar' },
  { value: 'MYR', label: 'MYR : Malaysian Ringgit' },
  { value: 'EUR', label: 'EUR : Euro [E.U.]' },
  { value: 'USD', label: 'USD : U.S. Dollar' },
  { value: 'AUD', label: 'AUD : Australian Dollar' },
  { value: 'JPY', label: 'JPY : Japanese Yen' },
  { value: 'CNH', label: 'CNH : Chinese Yuan' },
  { value: 'HKD', label: 'HKD : Hong Kong Dollar' },
  { value: 'CAD', label: 'CAD : Canadian Dollar' },
  { value: 'INR', label: 'INR : Indian Rupee' },
  { value: 'DKK', label: 'DKK : Danish Krone' },
  { value: 'GBP', label: 'GBP : Great Britain Pound [Sterling]' },
  { value: 'RUB', label: 'RUB : Russian Ruble' },
  { value: 'NZD', label: 'NZD : New Zealand Dollar' },
  { value: 'MXN', label: 'MXN : Mexican Peso' },
  { value: 'IDR', label: 'IDR : Indonesian Rupiah' },
  { value: 'TWD', label: 'TWD : Taiwanese Dollar' },
  { value: 'THB', label: 'THB : Thai Baht' },
  { value: 'VND', label: 'VND : Vietnamese Dong' }
];
const check = ref('')

const createCurrencyExchangeComponent = () => {
    // Private variables
    const fromCurrency = ref('');
    const toCurrency = ref('');
    const exchangeRate = ref(null);
    const error = ref(null);
    const currencyOptions = ref([]);

    const fetchCurrencyOptions = async () => {
        const url = 'https://currency-exchange.p.rapidapi.com/listquotes';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3f4174474amsh600331a31614d2ep12bf23jsndddced32c21c',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            currencyOptions.value = await response.json();
        } catch (err) {
            console.error(err);
            error.value = 'Error fetching currency options';
        }
    };

    const fetchExchangeRate = async () => {
        const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${fromCurrency.value}&to=${toCurrency.value}&q=1.0`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3f4174474amsh600331a31614d2ep12bf23jsndddced32c21c',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        exchangeRate.value = result;
        error.value = null;
    } catch (err) {
        console.error(err);
        exchangeRate.value = null;
        error.value = 'Error fetching exchange rate';
    }
    };

    onMounted(fetchCurrencyOptions);

    return {
        fromCurrency,
        toCurrency,
        exchangeRate,
        error,
        currencyOptions,
        fetchExchangeRate
    };
};

// Creating an instance of the currency exchange component
const currencyExchangeComponent = createCurrencyExchangeComponent();

// Destructuring the public properties for use in the template
const { fromCurrency, toCurrency, exchangeRate, error, currencyOptions, fetchExchangeRate } = currencyExchangeComponent;

</script>


