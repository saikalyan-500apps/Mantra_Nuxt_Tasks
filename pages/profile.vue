<template>
    <div>
      <h1>Registered User:</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in registeredUsers" :key="index">
            <td>{{ user.Username }}</td>
            <td>{{ user.Password }}</td>
            <td>{{ user.Email }}</td>
            <td>{{ user.PhoneNumber }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useFormStore } from '~/store/form';
  
  const storeData = useFormStore();
  const registeredUsers = storeData.userData.registeredUsers;
  </script>
  