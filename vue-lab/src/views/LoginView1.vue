<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const email = ref('');

const usernameError = ref('');
const passwordError = ref('');
const emailError = ref('');

const validateEmail = (e: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
};

const handleRegister = () => {
  usernameError.value = '';
  passwordError.value = '';
  emailError.value = '';
  let isValid = true;

  if (username.value.length < 3) {
    usernameError.value = 'Ім\'я має містити мінімум 3 символи.';
    isValid = false;
  }
  if (password.value.length < 6) {
    passwordError.value = 'Пароль має містити мінімум 6 символів.';
    isValid = false;
  }
  if (!validateEmail(email.value)) {
    emailError.value = 'Введіть коректну адресу електронної пошти.';
    isValid = false;
  }

  if (!isValid) {
    console.error('Помилка валідації форми реєстрації. Перевірте поля.');
    return;
  }

  console.log('--- REGISTER FORM DATA (SUCCESS) ---');
  console.log('Username:', username.value);
  console.log('Password:', password.value);
  console.log('Email:', email.value);
  console.log('Дані успішно відправлені (симуляція)');

};
</script>

<template>
  <div class="bg-red-400 min-h-screen flex flex-col items-center justify-center p-6">

    <div class="flex flex-col items-center mb-10 w-full">
      <img src="../../public/imageheart.png" alt="Heart Logo" class="max-w-[200px] w-1/2 h-auto mb-4" />
      <h1 class="text-white text-5xl p-2 font-extrabold tracking-widest mt-2 ">FATED</h1>
    </div>

    <div class="flex mb-8 w-full max-w-[310px] shadow-md rounded-lg overflow-hidden">
      <RouterLink
        to="/login"
        class="flex-1 text-center py-3 text-sm uppercase font-bold transition duration-300 bg-red-400 text-white border-2 border-transparent hover:bg-red-300"
      >
        Login
      </RouterLink>
      <RouterLink
        to="/register"
        class="flex-1 text-center py-3 text-sm uppercase font-bold transition duration-300 bg-white text-red-500 border-2 border-white"
      >
        Register
      </RouterLink>
    </div>

    <form @submit.prevent="handleRegister" class="w-full max-w-xs flex flex-col items-center">

      <div class=" w-full p-1">
        <input
          type="text"
          v-model="username"
          placeholder="user name"
          class="w-full p-4 mb-6 rounded-xl border-2 transition duration-200 bg-white text-gray-800 placeholder-gray-500"
          :class="usernameError ? 'border-yellow-300 ring-2 ring-yellow-300' : 'border-transparent focus:ring-2 focus:ring-white'"
        />

        <p v-if="usernameError" class="text-yellow-300 text-xs mb-4 self-start">{{ usernameError }}</p>
      </div>

      <div class=" w-full p-1">

        <input
          type="password"
          v-model="password"
          placeholder="password"
          class="w-full p-4 mb-6 rounded-xl border-2 transition duration-200 bg-white text-gray-800 placeholder-gray-500"
          :class="passwordError ? 'border-yellow-300 ring-2 ring-yellow-300' : 'border-transparent focus:ring-2 focus:ring-white'"
        />
        <p v-if="passwordError" class="text-yellow-300 text-xs mb-4 self-start">{{ passwordError }}</p>
      </div>

      <div class=" w-full p-1">
        <input
          type="email"
          v-model="email"
          placeholder="email"
          class="w-full p-4 mb-6 rounded-xl border-2 transition duration-200 bg-white text-gray-800 placeholder-gray-500"
          :class="emailError ? 'border-yellow-300 ring-2 ring-yellow-300' : 'border-transparent focus:ring-2 focus:ring-white'"
        />
        <p v-if="emailError" class="text-yellow-300 text-xs mb-4 self-start">{{ emailError }}</p>
      </div>

      <a href="#" class="text-white text-sm uppercase mb-6 hover:text-red-100 transition duration-200">Forgot Password?</a>

      <button
        type="submit"
        class="w-full bg-white text-red-500 py-3 rounded-xl uppercase font-bold text-lg shadow-2xl hover:bg-red-100 transition duration-300"
      >
        Login
      </button>

    </form>
  </div>
</template>
