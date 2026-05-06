<script setup>
import { whoWeWorkFor } from '/src/data/productList.js';
</script>

<template>
  <div class="ourSystems">
    <div class="container" id="whoWeWorkFor">
      <div class="desc-wrapper">
        <h2 class="h-2">Для кого ми працюємо</h2>
        <p class="desc">Професійні рішення для бізнесу різних сфер</p>
      </div>
      <div class="wrapper">
        <div
          v-for="product in whoWeWorkFor"
          :key="whoWeWorkFor.id"
          class="item"
        >
          <img class="img" :src="product.img" alt="photo" />
          <p class="item-desc">{{ product.desc }}</p>
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
  margin-bottom: 12px;
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

@media (min-width: 767px) and (max-width: 1439px) {
  .container {
    width: 100%;
  }

  .h-2 {
    font-size: 48px;
  }

  .desc {
    margin-bottom: 32px;
  }

  .wrapper {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }

  .item {
    box-sizing: border-box;
    padding: 24px;
    width: 100%;
    flex-direction: row;
    justify-content: start;
    height: 80px;
  }

  .img {
    width: 32px;
    height: 32px;
  }
}

@media (min-width: 320px) and (max-width: 766px) {
  .container {
    box-sizing: border-box;
    width: 100%;
    padding: 80px 12px;
    margin-bottom: 0;
  }

  .desc-wrapper {
    margin-bottom: 32px;
  }

  .h-2 {
    font-size: 36px;
    text-align: start;
  }

  .desc {
    font-size: 16px;
    text-align: start;
    margin-bottom: 0;
  }

  .wrapper {
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 12px;
  }

  .item {
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    display: flex;
    border-radius: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 20px;
    background: #f9fafb;
    padding: 16px;
  }

  .img {
    width: 32px;
    height: 32px;
  }

  .item-desc {
    font-size: 16px;
  }
}
</style>
