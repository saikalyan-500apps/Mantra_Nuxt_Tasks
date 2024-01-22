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
  };

  userData.initialize();

//   const SavedLocalData = ref(
//     typeof localStorage !== 'undefined'
//       ? JSON.parse(localStorage.getItem('registeredUserData')) || null
//       : null
//   );

//   console.log('Saved User Data:', SavedLocalData.value);

  return { RegisterForm, LoginForm, SavedLocalData, userData };
});
