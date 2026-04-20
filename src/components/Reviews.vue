<script setup>
import ReviewItem from '@/components/ReviewItem.vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { useTemplateRef } from 'vue';
import 'primeicons/primeicons.css';
import { reviews } from '/src/data/productList.js';

const myCarousel = useTemplateRef('carousel');
</script>
<template>
  <div class="container" id="reviews">
    <h2 class="h-2">Відгуки наших клієнтів</h2>
    <p class="desc">Наша дружня команда завжди готова поспілкуватися</p>
    <div class="reviews-div">
      <ReviewItem
        v-for="reviews in reviews"
        :key="reviews.id"
        :review="reviews"
      />
    </div>

    <!--    <div class="slider">-->
    <!--      <div class="navigation">-->
    <!--        <div class="navBtn prev" @click="myCarousel.prev()">-->
    <!--          <i-->
    <!--            class="pi pi-arrow-left"-->
    <!--            style="font-size: 30px; color: #bb0000"-->
    <!--          ></i>-->
    <!--        </div>-->
    <!--        <div class="navBtn next" @click="myCarousel.next()">-->
    <!--          <i-->
    <!--            class="pi pi-arrow-right"-->
    <!--            style="font-size: 30px; color: #bb0000"-->
    <!--          ></i>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="carousel-wrapper">-->
    <!--        <carousel-->
    <!--          ref="carousel"-->
    <!--          :items-to-show="3"-->
    <!--          :snap-align="'start'"-->
    <!--          :gap="0"-->
    <!--        >-->
    <!--          <slide v-for="review in reviews" :key="review.id">-->
    <!--            <ReviewItem :review="review" />-->
    <!--          </slide>-->
    <!--        </carousel>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<style scoped>
.container {
  width: 1440px;
  padding: 60px 80px;
}

.h-2 {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #171717;
  margin-bottom: 24px;
}

.desc {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #4a5565;
  margin-bottom: 40px;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  .navBtn {
    cursor: pointer;
  }

  .carousel-wrapper {
    max-width: 1440px;
    padding: 20px 0;
  }
}
.reviews-div {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 32px;
}
</style>
