// store/form.js
import { defineStore } from "pinia";


export const useFormStore = defineStore("formdata", () => {
  const RegisterForm = [
    {
      Heading: "Registration",
      fields: [
        { label: "Username", inputfield: "text" },
        { label: "Password", inputfield: "password"},
        { label: "Email", inputfield: "text" },
        { label: "PhoneNumber", inputfield: "tel" }
      ],
      button: "Register",
    },
  ];

  const LoginForm = [
    {
      Heading: "Login",
      fields: [
        { label: "Username", inputfield: "text" },
        { label: "Password", inputfield: "password" },
      ],
      button: "Submit",
    },
  ];

  const userData = {
    loggedInUser: null,
    registeredUsers: [],

    initialize: () => {
      if (typeof localStorage !== 'undefined') {
        userData.registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      }
    },

    storeUser: (user) => {
      userData.registeredUsers.push(user);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('registeredUsers', JSON.stringify(userData.registeredUsers));
      }
    },

    checkLogin: (username, password) => {
      return userData.registeredUsers.find(user => user.Username === username && user.Password === password);
    },

    validateUsername: (username) => {
      return /^[a-zA-Z0-9_-]{3,16}$/.test(username);
    },

    validatePassword: (password) => {
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    },

    validateEmail: (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    validatePhoneNumber: (phoneNumber) => {
      return /^\d{10}$/.test(phoneNumber);
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