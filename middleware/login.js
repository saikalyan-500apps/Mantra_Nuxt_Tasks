import { useLoginStore } from '~/store';

export default defineNuxtRouteMiddleware((to,from) => {
  const  LoginStore  = useLoginStore();
 console.log(LoginStore,"hello")
  if (!LoginStore.loggedIn) {
    return navigateTo('/login-form');
  }
});

  