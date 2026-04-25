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
        <div class="model-img-wrapper">
          <img class="model-img" :src="product.img1" alt="photo" />
        </div>
        <div class="model-img-wrapper">
          <img class="model-img" :src="product.img2" alt="photo" />
        </div>
        <div class="model-img-wrapper">
          <img class="model-img" :src="product.img3" alt="photo" />
        </div>
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
}

.h-2 {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #171717;
  margin-bottom: 80px;
}

.model-container {
  width: 1216px;
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
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: center;
}

.model-img-wrapper {
  border-radius: 16px;
  width: 384px;
  height: 384px;
  overflow: hidden;
}
.model-img {
  object-fit: cover;
}

@media (max-width: 768px) {
  .container {
    padding: 60px 32px 0 32px;
    width: 768px;
  }

  .h-2 {
    font-size: 48px;
  }

  .model-container {
    width: 768px;
  }
  .model-name-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: start;
    margin-bottom: 24px;
  }

  .model-img-container {
    justify-content: start;
    gap: 16px;
  }

  .model-img-wrapper {
    width: 224px;
    height: 224px;
  }
}
</style>
