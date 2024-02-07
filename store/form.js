// store/form.js
import { defineStore } from "pinia";


export const useFormStore = defineStore("formdata", () => {
  const RegisterForm = [
    {
      Heading: "Registration",
      fields: [
        { label: "Username", inputfield: "text", value:'' },
        { label: "Password", inputfield: "password", value:''},
        { label: "Email", inputfield: "text",value:'' },
        { label: "PhoneNumber", inputfield: "tel",value:'' }
      ],
      button: "Register",
    },
  ];

  const LoginForm = [
    {
      Heading: "Login",
      fields: [
        { label: "Username", inputfield: "text" ,value:'' },
        { label: "Password", inputfield: "password" , value:''},
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
  const captchaForm = [
    {
      Heading: "Security Check",
      fields: [
        { label: "code", inputfield: "text" , value:''},
      ],
      button: "Submit",
    },
  ]
  return { captchaForm };
})

export const useShapeForm = defineStore('shape', () => {
    const ShapeForm = [
    {
      Heading : "create shape",
      fields :[
        {label :"select shape", inputfield:'select', options: ['Circle', 'Rectangle', 'Square'],value:''},
        {label :"Height", inputfield:'number', value:''},
        {label :"Width", inputfield:'number', value:''},
        {label : "color", inputfield:'color', value:''}   
    ],
      button : "generate shape"
    }
  ]
  return { ShapeForm };
})