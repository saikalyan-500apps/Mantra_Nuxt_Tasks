// store/form.js
import { defineStore } from "pinia";

export const useFormStore = defineStore("formdata", () => {
    const RegisterForm = ref([
        {
          Heading: "Registration",
          fields: [
            { label: "Username", inputfield: "text", validation: { pattern: /^[a-zA-Z0-9_-]{3,16}$/, error: "Invalid username" } },
            { label: "Password", inputfield: "password", validation: { pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, error: "Password must contain at least 8 characters, one digit, one lowercase and one uppercase letter" } },
            { label: "Email", inputfield: "text", validation: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, error: "Invalid email address" } },
            { label: "PhoneNumber", inputfield: "tel", validation: { pattern: /^\d{10}$/, error: "Invalid phone number" } },
          ],
          button: "Register",
        },
      ]);

  const LoginForm = ref([
    {
      Heading: "Login",
      fields: [
        { label: "Username", inputfield: "text" },
        { label: "Password", inputfield: "password" },
      ],
      button: "Submit",
    },
  ]);

  const userData = {
    loggedInUser: null,
    registeredUsers: [],

    initialize: () => {
      if (typeof localStorage !== 'undefined') {
        userData.registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      }
      console.log('Initialized registeredUsers:', userData.registeredUsers);
    },

    storeUser: (user) => {
      userData.registeredUsers.push(user);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('registeredUsers', JSON.stringify(userData.registeredUsers));
      }
    },

    checkLogin: (username, password) => {
      console.log('Checking login with:', username, password);

      const user = userData.registeredUsers.find(user => user.Username === username && user.Password === password);
      
      console.log('Found user:', user);
  
      return user;
    },
  };

  userData.initialize();


  return { RegisterForm, LoginForm, userData };
});

export const useCaptchaForm = defineStore('captcha', () => {
  const captchaForm = ref([
    {
      Heading: "Security Check",
      fields: [
        { label: "Code", inputfield: "text" },
      ],
      button: "Submit",
    },
  ])
  return { captchaForm };
})