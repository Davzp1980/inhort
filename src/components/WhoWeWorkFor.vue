<script setup>
import { whoWeWorkFor } from '/src/data/productList.js';
</script>

<template>
  <div class="ourSystems">
    <div class="container" id="whoWeWorkFor">
      <h2 class="h-2">Для кого ми працюємо</h2>
      <p class="desc">Наша дружня команда завжди готова поспілкуватися</p>
      <div class="wrapper">
        <div
          v-for="product in whoWeWorkFor"
          :key="whoWeWorkFor.id"
          class="item"
        >
          <img :src="product.img" alt="photo" />
          <p class="item-desc">{{ product.desc }}</p>
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
  padding: 80px 112px;
}

.h-2 {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #171717;
}

.desc {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #4a5565;
  margin-bottom: 48px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.item {
  width: 224px;
  height: 172px;
  display: flex;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: #f9fafb;
}

.item-desc {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 156%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #0a0a0a;
}
</style>
