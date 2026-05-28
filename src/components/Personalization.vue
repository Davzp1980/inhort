<script setup>
import { personalization } from '@/data/productList.js';
</script>

<template>
  <div class="container" id="personalization">
    <div class="title-header">
      <h2 class="h-2">Персоналізація</h2>
    </div>
    <div
      v-for="product in personalization"
      :key="product.id"
      class="model-container"
    >
      <div class="model-name-wrapper">
        <h2 class="model-name">{{ product.title }}</h2>
        <p class="model-description">
          {{ product.desc }}
        </p>
      </div>
      <div class="model-img-container">
        <img class="model-img" :src="product.img1" alt="photo" />
        <img class="model-img" :src="product.img2" alt="photo" />
        <img class="model-img" :src="product.img3" alt="photo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 112px;
  background: #333;
  scroll-margin-top: 120px;
}

.h-2 {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
}

.model-container {
  padding-top: 80px;
  width: 1216px;
}
.model-container:last-child {
  margin-bottom: 0;
}

.model-name-wrapper {
  display: grid;
  grid-template-columns: 400px 1fr;
  align-items: start;
  column-gap: 300px;
  margin-bottom: 48px;
}

.model-name {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 40px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #fff;
}

.model-description {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.7);
  max-width: 650px;
}

.model-img-container {
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: center;
}

.model-img {
  border-radius: 16px;
  overflow: hidden;
  width: 384px;
  height: 384px;
  object-fit: none;
}

@media (min-width: 767px) and (max-width: 1439px) {
  .container {
    box-sizing: border-box;
    width: 100%;
    padding: 60px 32px;
  }

  .h-2 {
    font-size: 48px;
  }
  .model-container {
    width: 704px;
  }

  .model-name-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
  }
  .model-img-container {
    gap: 16px;
  }

  .model-img {
    width: 224px;
    height: 224px;
    object-fit: contain;
  }
}

@media (min-width: 320px) and (max-width: 766px) {
  .container {
    box-sizing: border-box;
    width: 100%;
    padding: 60px 12px;
    margin-bottom: 0;
  }

  .title-header {
    width: 336px;
  }

  .h-2 {
    font-size: 36px;
    text-align: start;
  }
  .model-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 336px;
    padding-top: 40px;
  }
  .model-name-wrapper {
    width: 336px;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }

  .model-name {
    font-family: var(--font-family), sans-serif;
    font-size: 24px;
    margin-bottom: 12px;
  }
  .model-description {
    font-size: 16px;

    max-width: 336px;
  }

  .model-img-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .model-img {
    width: 336px;
    height: 336px;
  }
}
</style>
