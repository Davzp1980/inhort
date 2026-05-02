<script setup></script>
<template>
  <div class="container" id="why-we">
    <h2 class="h-2">Чому саме ми</h2>
    <p class="h2-desc">
      Ми пропонуємо найкращі умови для професійного співробітництва
    </p>

    <div class="why-we-container1">
      <div class="why-we-item">
        <img class="why-we-item-img" src="/img/opt.svg" alt="image" />
        <div class="why-we-item-desc">
          <h2 class="why-we-item-h2">Гуртові ціни</h2>
          <p class="why-we-item-text">Найкращі умови для оптових покупців</p>
        </div>
      </div>
      <div class="why-we-item">
        <img class="why-we-item-img" src="/img/fabric.svg" alt="image" />
        <div class="why-we-item-desc">
          <h2 class="why-we-item-h2">Якісні тканини</h2>
          <p class="why-we-item-text">
            Широкий асортимент преміальних матеріалів
          </p>
        </div>
      </div>
      <div class="why-we-item">
        <img class="why-we-item-img" src="/img/time.svg" alt="image" />
        <div class="why-we-item-desc">
          <h2 class="why-we-item-h2">Швидке виробництво</h2>
          <p class="why-we-item-text">Терміни від 3 робочих днів</p>
        </div>
      </div>
    </div>

    <div class="why-we-container1 why-we-container2">
      <div class="why-we-item">
        <img class="why-we-item-img" src="/img/car.svg" alt="image" />
        <div class="why-we-item-desc">
          <h2 class="why-we-item-h2">Доставка</h2>
          <p class="why-we-item-text">Безкоштовна доставка по Україні</p>
        </div>
      </div>
      <div class="why-we-item">
        <img class="why-we-item-img" src="/img/gear.svg" alt="image" />
        <div class="why-we-item-desc">
          <h2 class="why-we-item-h2">Індивідуальне виробництво</h2>
          <p class="why-we-item-text">Робота з нестандартними розмірами</p>
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
  justify-content: center;
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
  margin-bottom: 16px;
}

.h2-desc {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #525252;
  margin-bottom: 48px;
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
  font-family: var(--font-family), sans-serif;
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

@media (min-width: 767px) and (max-width: 1439px) {
  .container {
    box-sizing: border-box;
    width: 100%;
    padding: 40px 32px;
    margin-bottom: 0;
  }
  .why-we-container1 {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;
  }

  .h-2 {
    font-size: 48px;
    margin-bottom: 8px;
  }

  .h2-desc {
    margin-bottom: 32px;
  }
  .why-we-item-h2 {
    margin-bottom: 0;
  }
  .why-we-item {
    width: 100%;
    height: 120px;
    padding: 32px;
    flex-direction: row;
    justify-content: start;
    gap: 24px;
  }
  .why-we-item-desc {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

@media (min-width: 320px) and (max-width: 766px) {
  .container {
    box-sizing: border-box;
    width: 100%;
    padding: 40px 12px;
    margin-bottom: 0;
  }

  .h-2 {
    font-size: 36px;
    margin-bottom: 12px;
  }
  .h2-desc {
    font-size: 16px;
    margin-bottom: 32px;
  }
  .why-we-container1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    margin-bottom: 12px;
  }
  .why-we-item {
    padding: 24px;
  }
  .why-we-item-img {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
  .why-we-item-h2 {
    font-size: 16px;
    margin-bottom: 6px;
  }
}
</style>
