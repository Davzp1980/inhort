<script setup></script>
<template>
  <div class="container" id="why-we">
    <h2 class="h-2">Чому саме ми</h2>

    <div class="why-we-container1">
      <div class="why-we-item">
        <img class="why-we-item-img" src="/img/opt.svg" alt="image" />
        <h2 class="why-we-item-h2">Гуртові ціни</h2>
        <p class="why-we-item-text">Найкращі умови для оптових покупців</p>
      </div>
      <div class="why-we-item">
        <img class="why-we-item-img" src="/img/fabric.svg" alt="image" />
        <h2 class="why-we-item-h2">Якісні тканини</h2>
        <p class="why-we-item-text">
          Широкий асортимент преміальних матеріалів
        </p>
      </div>
      <div class="why-we-item">
        <img class="why-we-item-img" src="/img/time.svg" alt="image" />
        <h2 class="why-we-item-h2">Швидке виробництво</h2>
        <p class="why-we-item-text">Терміни від 3 робочих днів</p>
      </div>
    </div>

    <div class="why-we-container1 why-we-container2">
      <div class="why-we-item">
        <img class="why-we-item-img" src="/img/car.svg" alt="image" />
        <h2 class="why-we-item-h2">Доставка</h2>
        <p class="why-we-item-text">Безкоштовна доставка по Україні</p>
      </div>
      <div class="why-we-item">
        <img class="why-we-item-img" src="/img/gear.svg" alt="image" />
        <h2 class="why-we-item-h2">Індивідуальне виробництво</h2>
        <p class="why-we-item-text">ШРобота з нестандартними розмірами</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 112px;

  background: #f9fafb;
  margin-bottom: 60px;
}

.h-2 {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #171717;
  margin-bottom: 32px;
}

.why-we-container1 {
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-bottom: 32px;
}
.why-we-container2 {
  margin-bottom: 0;
}

.why-we-item {
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-radius: 15px;
  width: 384px;
  height: 240px;
  padding: 32px 32px 56px 32px;
  background: #fff;
}

.why-we-item-img {
  margin-bottom: 24px;
}

.why-we-item-h2 {
  font-family: var(--font-family) sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #101828;
  margin-bottom: 12px;
}

.why-we-item-text {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #4a5565;
}
</style>
