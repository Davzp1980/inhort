<script setup>
defineProps({
  scrollTo: Function,
});
</script>

<template>
  <div class="header">
    <img class="logo" src="/img/Logo.svg" alt="logo" />
    <nav>
      <ul class="nav-links">
        <li class="nav-link" @click="scrollTo('models')">Моделі</li>
        <li class="nav-link" @click="scrollTo('personalization')">
          Персоналізації
        </li>
        <li class="nav-link" @click="scrollTo('viewConfigurations')">
          Конфігурації
        </li>
        <li class="nav-link" @click="scrollTo('ourSystems')">Системи</li>
        <li class="nav-link" @click="scrollTo('contacts')">Контакти</li>
      </ul>
    </nav>

    <div class="connect">
      <div class="phone-div">
        <img src="/img/phone.svg" alt="phone" />
        <p class="nav-link">+380 63 846 65 46</p>
      </div>
      <button class="button" type="button">Зв'язатися з нами</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 113px;
}

.logo {
  margin: 0;
  width: 132px;
  height: 38px;
}

.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #364153;
}

.nav-link {
  cursor: pointer;
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #364153;
}
.connect {
  display: flex;
  align-items: center;
  gap: 24px;
}
.phone-div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.button {
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 12px 16px;
  width: 170px;
  height: 46px;
  background-color: #b00;
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
}

@media (max-width: 768px) {
  .header {
    box-sizing: border-box;
    padding: 26px 32px;
    width: 768px;
  }
  nav {
    display: none;
  }
}
</style>
