<script setup>
import { models } from '/src/data/productList.js';
</script>
<template>
  <div class="container" id="models">
    <div class="title-header">
      <h2 class="h-2">Наші моделі</h2>
    </div>

    <div v-for="product in models" :key="models.id" class="model-container">
      <div class="model-name-wrapper">
        <h2 class="model-name">{{ product.title }}</h2>
        <p class="model-description">
          {{ product.desc }}
        </p>
      </div>
      <div class="model-img-container">
        <div class="model-img-wrapper">
          <picture>
            <source
              :srcset="product.img1Tablet"
              media="(min-width: 767px) and (max-width: 1439px)"
            />

            <img class="model-img" :src="product.img1" alt="photo" />
          </picture>
        </div>
        <div class="model-img-wrapper">
          <picture>
            <source
              :srcset="product.img2Tablet"
              media="(min-width: 767px) and (max-width: 1439px)"
            />

            <img class="model-img" :src="product.img2" alt="photo" />
          </picture>
        </div>
        <div class="model-img-wrapper">
          <picture>
            <source
              :srcset="product.img3Tablet"
              media="(min-width: 767px) and (max-width: 1439px)"
            />

            <img class="model-img" :src="product.img3" alt="photo" />
          </picture>
        </div>
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
  padding: 0 112px;
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

@media (min-width: 767px) and (max-width: 1439px) {
  .container {
    padding: 60px 32px 0 32px;
    width: 100%;
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

@media (min-width: 320px) and (max-width: 766px) {
  .container {
    box-sizing: border-box;
    width: 100%;
    padding: 60px 12px 0 12px;
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
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
  }

  .model-name-wrapper {
    width: 336px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
  }

  .model-name {
    font-size: 24px;
  }
  .model-description {
    font-size: 16px;
    max-width: 336px;
  }

  .model-img-container {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .model-img-wrapper {
    width: 336px;
    height: 336px;
  }
  .model-img {
    width: 336px;
    height: 336px;
  }
}
</style>
