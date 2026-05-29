<script setup>
import ReviewItem from '@/components/ReviewItem.vue';
import 'vue3-carousel/dist/carousel.css';
import 'primeicons/primeicons.css';
import { reviews } from '/src/data/productList.js';
</script>
<template>
  <div class="container" id="reviews">
    <div class="header-title">
      <h2 class="h-2">Відгуки наших клієнтів</h2>
      <p class="desc">Наша дружня команда завжди готова поспілкуватися</p>
    </div>
    <div class="reviews-div">
      <ReviewItem v-for="review in reviews" :key="review.id" :review="review" />
    </div>
  </div>
</template>

<style scoped>
.container {
  box-sizing: border-box;
  margin: 0 auto;
  width: 1440px;
  padding: 60px 112px;
  scroll-margin-top: 120px;
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

.reviews-div {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  gap: 32px;
}

@media (min-width: 767px) and (max-width: 1439px) {
  .container {
    width: 100%;
    padding: 60px 32px;
  }

  .h-2 {
    font-size: 48px;
  }
  .reviews-div {
    max-width: 704px;
    flex-direction: column;
  }
}

@media (min-width: 320px) and (max-width: 766px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
    width: 336px;
    padding: 60px 12px;
    margin-bottom: 0;
  }

  .header-title {
    width: 336px;
  }

  .h-2 {
    font-size: 36px;
    margin-bottom: 12px;
    text-align: left;
    max-width: 390px;
  }

  .desc {
    font-size: 20px;
    text-align: left;
    max-width: 390px;
  }

  .reviews-div {
    width: 100%;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
}
</style>
