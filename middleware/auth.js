export default defineNuxtRouteMiddleware((to, from) => {
    // console.log(to)
    // console.log(from)
    console.log("Im middleware")
    const captchaRequired = true;
  
    if (captchaRequired) {
      return navigateTo('/captcha');
    }
  });
  