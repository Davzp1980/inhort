<script setup>
import ReviewItem from '@/components/ReviewItem.vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { useTemplateRef } from 'vue';
import 'primeicons/primeicons.css';

const myCarousel = useTemplateRef('carousel');
</script>
<template>
  <div class="container" id="reviews">
    <h2 class="h-2">Відгуки</h2>

    <div class="slider">
      <div class="navigation">
        <div class="navBtn prev" @click="myCarousel.prev()">
          <i
            class="pi pi-arrow-left"
            style="font-size: 30px; color: #bb0000"
          ></i>
        </div>
        <div class="navBtn next" @click="myCarousel.next()">
          <i
            class="pi pi-arrow-right"
            style="font-size: 30px; color: #bb0000"
          ></i>
        </div>
      </div>

      <div class="carousel-wrapper">
        <carousel
          ref="carousel"
          :items-to-show="4"
          :snap-align="'start'"
          :gap="10"
        >
          <slide v-for="index in 5" :key="index">
            <ReviewItem />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 0 95px 0;
}

.h-2 {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #333;
  margin-bottom: 61px;
}

.slider {
  .navigation {
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
  }

  .navBtn {
    cursor: pointer;
  }

  .carousel-wrapper {
    padding: 20px;
  }
}
</style>
