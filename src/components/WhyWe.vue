<script setup></script>
<template>
  <div class="container" id="why-we">
    <h2 class="h-2">Чому саме <span class="span">ми</span></h2>
    <div class="why-we-container">
      <div class="why-we-item">
        <img src="/img/gear.svg" alt="image" />
        <p class="why-we-item-text">Індивідуальне виробництво</p>
      </div>
      <div class="why-we-item">
        <div class="why-we-item">
          <img src="/img/car.svg" alt="image" />
          <p class="why-we-item-text">Безкоштовна доставка по Україні</p>
        </div>
      </div>
      <div class="why-we-item">
        <div class="why-we-item">
          <img src="/img/sale.svg" alt="image" />
          <p class="why-we-item-text">Гуртові ціни від виробника</p>
        </div>
      </div>
      <div class="why-we-item">
        <div class="why-we-item">
          <img src="/img/textile.svg" alt="image" />
          <p class="why-we-item-text">Терміни від 3 робочих днів</p>
        </div>
      </div>
      <div class="why-we-item">
        <img src="/img/gear.svg" alt="image" />
        <p class="why-we-item-text">Індивідуальне виробництво</p>
      </div>
      <div class="why-we-item">
        <div class="why-we-item">
          <img src="/img/car.svg" alt="image" />
          <p class="why-we-item-text">Безкоштовна доставка по Україні</p>
        </div>
      </div>
      <div class="why-we-item">
        <div class="why-we-item">
          <img src="/img/sale.svg" alt="image" />
          <p class="why-we-item-text">Гуртові ціни від виробника</p>
        </div>
      </div>
      <div class="why-we-item">
        <div class="why-we-item">
          <img src="/img/textile.svg" alt="image" />
          <p class="why-we-item-text">Терміни від 3 робочих днів</p>
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
  gap: 54px;
  width: 1920px;
  padding: 66px 0 77px 0;
  background: #cfcfcf;
}

.h-2,
.span {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #333;
  margin-bottom: 54px;
}

.span {
  color: #b00;
}

.why-we-container {
  width: 1010px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 70px;
}

.why-we-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  border-radius: 15px;
  width: 200px;
  height: 200px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
}

.why-we-item-text {
  font-family: var(--font-family), sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: #574d4d;
  max-width: 180px;
}
</style>
