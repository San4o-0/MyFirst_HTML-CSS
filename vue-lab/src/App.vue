<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="max-h-screen leading-relaxed">
    <div class="wrapper flex flex-col lg:flex-row lg:items-start flex-wrap lg:pr-8">

      <HelloWorld msg="You did it!" />

      <nav class="w-full text-center mt-8 lg:mt-4 lg:text-left text-sm lg:text-base">
        <RouterLink to="/" class="inline-block px-4 border-l border-gray-300 first:border-l-0 hover:text-gray-700">Home</RouterLink>
        <RouterLink to="/about" class="inline-block px-4 border-l border-gray-300 hover:text-gray-700">About</RouterLink>
        <RouterLink to="/contact" class="inline-block px-4 border-l border-gray-300 hover:text-gray-700">Contact</RouterLink>
        <RouterLink to="/onboarding" class="inline-block px-4 border-l border-gray-300 hover:text-gray-700">Figma_page</RouterLink>
        <RouterLink to="/login" class="inline-block px-4 border-l border-gray-300 hover:text-gray-700">Login_page</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />
</template>
