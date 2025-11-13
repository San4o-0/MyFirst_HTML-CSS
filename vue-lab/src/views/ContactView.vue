<script setup lang="ts">

import UserCard from '@/components/UserCard.vue';

</script>

<template>
  <div class="contact-page">
    <h1>Сторінка контактів</h1>
    <p>Це наша нова сторінка контактів, де ми демонструємо використання TypeScript для типізації пропсів.</p>

    <UserCard username="Студент 1 (Admin)" :isActive="true" />
    <UserCard username="Студент 2 (Гість)" :isActive="false" />


  </div>
</template>

<style scoped>
.contact-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
}

.contact-page h1 {
  color: #35495e;
  border-bottom: 2px solid #42b883;
  padding-bottom: 10px;
}
</style>
