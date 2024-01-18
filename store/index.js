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
