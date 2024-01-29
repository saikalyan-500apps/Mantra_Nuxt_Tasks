import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    username: '',
    password: '',
  }),
  actions: {
    register(username, password) {
      this.username = username;
      this.password = password;
    },
  },
});

export const useCaptchaStore = defineStore({
  id: 'captcha',
  state: () => ({
    captchaVerified: true,
  }),
  actions: {
    setCaptchaVerified(value) {
      this.captchaVerified = value;
    },
  },
});


export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    setLoggedIn(value) {
      this.loggedIn = value;
    },
  },
});
