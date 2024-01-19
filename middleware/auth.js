import { useCaptchaStore } from '~/store';

export default defineNuxtRouteMiddleware((to,from) => {
  const  captchaStore  = useCaptchaStore();
 console.log(captchaStore)
  if (captchaStore.captchaVerified) {
    return navigateTo('/captcha');
  }
});

  