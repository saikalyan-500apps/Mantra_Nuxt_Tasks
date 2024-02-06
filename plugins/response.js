export default defineNuxtPlugin(nuxtApp => {
    const responses = [
        'Register/login to view entire application',
        'Checkout weather page to know current temparature',
        "Bored? play a game for a while",
        "learn the formation of HTML code and shape generartion",
        "Also check out exchange rate of different currencies"
      ];      

    nuxtApp.response = () => {
         const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
    }
})
  