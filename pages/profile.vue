<template>
  <div>
    <h1 class="text-2xl text-center mt-4 mb-4">Registered Users</h1>
    <div class="container mx-auto mt-8">
      <div class="overflow-x-auto">
        <table class="table-auto border-collapse border border-gray-500">
          <thead>
            <tr>
              <th class="border border-gray-500 px-4 py-2">Username</th>
              <th class="border border-gray-500 px-4 py-2">Password</th>
              <th class="border border-gray-500 px-4 py-2">Email</th>
              <th class="border border-gray-500 px-4 py-2">PhoneNumber</th>
              <th class="border border-gray-500 px-4 py-2">Edit User</th>
              <th class="border border-gray-500 px-4 py-2">Delete User</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in registeredUsers" :key="index" class="hover:bg-gray-200">
              <td class="border border-gray-500 px-4 py-2">{{ user.Username }}</td>
              <td class="border border-gray-500 px-4 py-2">{{ user.Password }}</td>
              <td class="border border-gray-500 px-4 py-2">{{ user.Email }}</td>
              <td class="border border-gray-500 px-4 py-2">{{ user.PhoneNumber }}</td>
              <td class="border border-gray-500 px-4 py-2">
                <button @click="editUser(index)" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded transition duration-300 ease-in-out">Edit</button>
              </td>
              <td class="border border-gray-500 px-4 py-2">
                <button @click="deleteUser(index)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded transition duration-300 ease-in-out">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Edit User Form -->
    <div v-if="editingUser !== null" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded-md">
        <h2 class="text-2xl font-semibold mb-4">Edit User</h2>
        <form @submit.prevent="updateUser">
          <label class="block mb-2">
            Username:
            <input v-model="editedUser.Username" type="text" class="border border-gray-300 p-2 w-full" />
          </label>
          <label class="block mb-2">
            Password:
            <input v-model="editedUser.Password" type="password" class="border border-gray-300 p-2 w-full" />
          </label>
          <label class="block mb-2">
            Email:
            <input v-model="editedUser.Email" type="text" class="border border-gray-300 p-2 w-full" />
          </label>
          <label class="block mb-2">
            Phone Number:
            <input v-model="editedUser.PhoneNumber" type="tel" class="border border-gray-300 p-2 w-full" />
          </label>
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Update</button>
          <button @click="cancelEdit" class="ml-2 text-gray-600 hover:text-gray-800">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFormStore } from '~/store/form';

const storeData = useFormStore();
const registeredUsers = storeData.userData.registeredUsers;

const editingUser = ref(null);
const editedUser = ref({
  Username: '',
  Password: '',
  Email: '',
  PhoneNumber: '',
});

const editUser = (index) => {
  editingUser.value = index;
  const user = registeredUsers[index];
  editedUser.value = { ...user };
};

const updateUser = () => {
  registeredUsers[editingUser.value] = { ...editedUser.value };
  editingUser.value = null;
};

const cancelEdit = () => {
  editingUser.value = null;
};

const deleteUser = (index) => {
  registeredUsers.splice(index, 1);
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.table-auto {
  width: 100%;
}

th,
td {
  text-align: left;
}

th,
td {
  padding: 8px;
}
</style>
