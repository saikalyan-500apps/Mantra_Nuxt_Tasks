export default defineNuxtPlugin(nuxtApp => {
    const responses = [
        'Register/login to view entire application',
        'wanna know current temparature head on weather page',
        "Bored? head on game page"
      ];      

    nuxtApp.response = () => {
         const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
    }
})
  