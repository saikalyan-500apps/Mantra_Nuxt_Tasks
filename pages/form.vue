<!-- <template>
  <div>
    <h2 class="text-center">Student Data</h2>
    <div class="form">
      <form @submit.prevent="FormRegister" class="flex flex-col">
        <label for="username">Username</label>
        <input id="username" v-model="username" class="h-12 w-full border mb-4"><br/>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" class="h-12 w-full border mb-4"><br/>
        <button type="submit" class="bg-blue-500 h-12 text-white font-base cursor-pointer">Register</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/store';

const userStore = useUserStore();
const username = ref('');
const password = ref('');

function FormRegister() {
  userStore.register(username.value, password.value);

  username.value = '';
  password.value = '';
}
</script>
 -->


 <template>
  <div>
    <FormComponent
      title="Register"
      :formInputs="registerFormInputs"
      submitButtonText="Register"
      @on-submit="register"
    />
  </div>
</template>

<script setup>
import { useUserStore } from '~/store';

const userStore = useUserStore();

const registerFormInputs = [
  { id: 'firstName', label: 'First Name' },
  { id: 'password', label: 'Password' },
];

registerFormInputs[{'id':'firstName'}] = ref('')
registerFormInputs[{'id':'password'}] = ref('')

const register = ({ firstName, password }) => {
  userStore.register({ firstName, password });
};
</script>
