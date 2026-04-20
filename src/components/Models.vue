<script setup>
import { models } from '/src/data/productList.js';
</script>
<template>
  <div class="container" id="personalization">
    <h2 class="h-2">Наші моделі</h2>

    <div v-for="product in models" :key="models.id" class="model-container">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 112px;
  gap: 80px;
}

.h-2 {
  font-family: var(--font-family) sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #171717;
  margin-bottom: 60px;
}

.model-container {
  width: 1200px;
  margin-bottom: 80px;
}
.model-container:last-child {
  margin-bottom: 0;
}

.model-name-wrapper {
  display: grid;
  grid-template-columns: 300px 1fr;
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
  color: #171717;
}

.model-description {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #4a5565;
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
  flex-shrink: 0;
}
</style>
