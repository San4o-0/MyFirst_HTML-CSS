<template>
  <div class="flex flex-col items-center justify-center w-full max-h-[80vh] gap-[clamp(2vh,3vw,5vh)]">

    <div class="flex justify-center items-center w-4/5 max-h-[35vh] md:max-h-[40vh]">
      <img :src="slide.image" :alt="slide.title" class="w-full h-full object-contain rounded-xl">
    </div>

    <button class="bg-[#FF5F5F] text-white font-semibold rounded-md uppercase tracking-wide transition-all duration-300 cursor-pointer
                   whitespace-nowrap my-[3vh] py-[2vh] px-[4vw] text-[clamp(2.5vh,2.5vw,3vh)]
                   md:py-[2vh] md:px-[4vw] md:text-[clamp(2vh,2.5vw,2.5vh)] hover:bg-[#ff4444]">
      {{ slide.cta }}
    </button>

    <p class="text-[#5A5A64] text-center leading-snug max-h-[20vh] overflow-hidden
              text-[clamp(1.5vh,2vw,1.8vh)] px-[1vw] pb-[10vw]">
      {{ slide.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Slide {
  image: string;
  title: string;
  description: string;
  cta: string;
}

defineProps<{
  slide: Slide;
}>();
</script>

<style scoped>
</style>
