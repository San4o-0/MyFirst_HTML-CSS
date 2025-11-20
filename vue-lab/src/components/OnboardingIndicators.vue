<template>
  <div class="flex items-center justify-center gap-[clamp(1vw,2vw,3vw)] mt-[2vh]">
    <span
      v-for="(_, index) in count"
      :key="index" :class="['w-[clamp(0.8vh,1.5vw,1.2vh)] h-[clamp(0.8vh,1.5vw,1.2vh)] rounded-full transition-colors duration-300',
               index === activeIndex ? 'bg-[#FF5F5F]' : 'bg-[#F5F5FF]']">
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number;
  activeIndex: number;
}>();
</script>
