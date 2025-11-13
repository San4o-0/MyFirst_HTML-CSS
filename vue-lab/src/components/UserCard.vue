<script setup lang="ts">

defineProps<{
  username: string,
  isActive: boolean
}>()
</script>

<template>
  <div class="user-card" :class="{ 'card-active': isActive }">
    <h3>{{ username }}</h3>
    <p>Статус: {{ isActive ? 'Онлайн' : 'Офлайн' }}</p>
  </div>
</template>

<style scoped>
.user-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  background-color: #f9f9f9;
}

.user-card h3 {
  margin-top: 0;
  color: #333;
}

.card-active {
  border-color: #42b883;
  background-color: #e6fff3;
  box-shadow: 0 4px 8px rgba(66, 184, 131, 0.2);
}
</style>
