<script setup>
import { ourSystems } from '/src/data/productList.js';
</script>

<template>
  <div class="container" id="models">
    <h2 class="h-2">Наші системи</h2>
    <div class="wrapper">
      <div
        v-for="product in ourSystems"
        :key="ourSystems.id"
        class="ourSystems-wrapper"
      >
        <div class="item-container">
          <picture>
            <source media="(max-width: 766px)" :srcset="product.imgMobile" />

            <img class="img" :src="product.img" :alt="product.title" />
          </picture>
          <div class="description-div">
            <h2 class="item-title">{{ product.title }}</h2>
            <p class="item-description">{{ product.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 132px;
  background: #f9fafb;
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

.wrapper {
  width: 1378px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  row-gap: 64px;
  column-gap: 32px;
}

.ourSystems-wrapper {
  width: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-container {
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item-title {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #0a0a0a;
  margin-bottom: 12px;
}

.item-description {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #525252;
  max-width: 530px;
}

.img {
  border-radius: 16px;
  width: 540px;
  height: 540px;
  object-fit: none;
}

@media (min-width: 767px) and (max-width: 1439px) {
  .container {
    margin: 0;
    width: 100%;
    padding: 60px 32px;
  }

  .h-2 {
    font-size: 48px;
    margin-bottom: 64px;
  }

  .wrapper {
    width: 704px;
    row-gap: 48px;
    column-gap: 24px;
  }

  .ourSystems-wrapper {
    width: 340px;
    align-items: start;
    justify-content: start;
  }

  .item-container {
    width: 340px;
    row-gap: 48px;
    column-gap: 24px;
  }

  .img {
    width: 340px;
    height: 340px;
  }
}

@media (min-width: 320px) and (max-width: 766px) {
  .container {
    box-sizing: border-box;
    width: 100%;
    padding: 60px 12px;
    margin-bottom: 0;
  }

  .h-2 {
    font-size: 36px;
    margin-bottom: 80px;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
  }
  .ourSystems-wrapper {
    width: 100%;
  }
  .item-container {
    width: 100%;
  }

  .img {
    width: 336px;
    height: 336px;
  }

  .item-title {
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 8px;
  }

  .item-description {
    font-size: 16px;
    max-width: 336px;
  }
}
</style>
