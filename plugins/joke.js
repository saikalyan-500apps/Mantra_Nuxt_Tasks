export default defineNuxtPlugin(nuxtApp => {
    const jokes = [
        'Why don\'t scientists trust atoms? Because they make up everything!',
        'What do you call fake spaghetti? An impasta!',
        'Why did the scarecrow win an award? Because he was outstanding in his field!',
        'How does a penguin build its house? Igloos it together!',
        'Why did the bicycle fall over? Because it was two-tired!',
        'What do you call a fish wearing a crown? A kingfish!',
        'Why did the math book look sad? Because it had too many problems.',
        'What did the grape say when it got stepped on? Nothing, it just let out a little wine!',
        'Why don\'t skeletons fight each other? They don\'t have the guts!',
        'What do you call a can opener that doesn\'t work? A can\'t opener!'
      ];      

    nuxtApp.joke = () => {
         const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
    }
})
  