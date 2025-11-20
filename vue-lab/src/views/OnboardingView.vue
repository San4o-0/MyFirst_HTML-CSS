<template>
  <div class="flex justify-center items-center h-screen font-[Lato] bg-white">
    <div class="flex flex-col justify-center items-center w-full h-screen max-w-[1200px] px-[4vw] py-[2vh]">

      <OnboardingSlide :slide="slides[currentSlideIndex]!" />
      <div class="flex justify-between items-center w-full gap-[2vw] py-[1vh] md:gap-[3vw]">

        <button @click="handleSkip"
                :class="['flex-1 bg-[#F5F5FF] text-[#32323C] font-semibold uppercase tracking-wide py-[clamp(1vh,1.5vh,2vh)] text-[clamp(1.5vh,2vw,2vh)] rounded transition-all duration-200 hover:bg-[#e6e6ff]', {'invisible': isLastSlide}]">
          Skip
        </button>

        <OnboardingIndicators :count="slides.length" :activeIndex="currentSlideIndex" />

        <button @click="handleNext"
                class="flex-1 bg-[#FF5F5F] text-white font-semibold uppercase tracking-wide
                     py-[clamp(1vh,1.5vh,2vh)] text-[clamp(1.5vh,2vw,2vh)] rounded transition-all duration-200 hover:bg-[#ff4444]">
          {{ isLastSlide ? 'Get Started' : 'Next' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import OnboardingSlide from '../components/OnboardingSlide.vue';
import OnboardingIndicators from '../components/OnboardingIndicators.vue';

const slides = [
  {
    image: 'public/assets/meet_people_1.png',
    title: 'MEET NEW PEOPLE',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    cta: 'MEET NEW PEOPLE'
  },
  {
    image: 'public/assets/chat_2.png',
    title: 'CHAT WITH EASE',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    cta: 'CHAT WITH EASE'
  },
  {
    image: 'public/assets/match_3.png',
    title: 'FIND YOUR MATCH',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    cta: 'FIND YOUR MATCH'
  }
];

const currentSlideIndex = ref(0);

const isLastSlide = computed(() => currentSlideIndex.value === slides.length - 1);


function handleNext() {
  if (!isLastSlide.value) {
    currentSlideIndex.value++;
  } else {
    alert('Перехід до головного додатку!');
  }
}

function handleSkip() {
  alert('Вступний тур пропущено.');
}
</script>

<style>
.font-\[Lato\] { font-family: 'Lato', sans-serif; }
</style>
