<script setup>
import { ourSystems } from '/src/data/productList.js';
</script>

<template>
  <div class="ourSystems">
    <div class="container" id="models">
      <h2 class="h-2">Наші системи</h2>
      <div class="wrapper">
        <div
          v-for="product in ourSystems"
          :key="ourSystems.id"
          class="ourSystems-wrapper"
        >
          <div class="item-container">
            <img :src="product.img" alt="product.title" />
            <div class="description-div">
              <h2 class="item-title">{{ product.title }}</h2>
              <p class="item-description">{{ product.desc }}</p>
            </div>
          </div>
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
  padding: 60px 132px;
  background: #f9fafb;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
  row-gap: 32px;
  column-gap: 64px;
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

.h-2 {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #171717;
  margin-bottom: 64px;
}
</style>
