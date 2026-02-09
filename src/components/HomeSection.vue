<script setup>
defineProps({
  scrollTo: Function,
});

const emit = defineEmits(['open-modal']);

function onOpen() {
  emit('open-modal', true);
}
</script>
<template>
  <div class="container main-container" id="home-section">
    <div class="header">
      <img class="logo" src="/img/logo.svg" alt="logo" />
      <nav>
        <ul class="nav-links">
          <li class="nav-link" @click="scrollTo('home')">Головна</li>
          <li class="nav-link" @click="scrollTo('models')">Моделі</li>
          <li class="nav-link"><a href="#">Тканини</a></li>
          <li class="nav-link" @click="scrollTo('some-words-about')">
            Про Інхорт
          </li>

          <li class="nav-link" @click="scrollTo('faqs')">FAQ</li>
          <li class="nav-link" @click="scrollTo('contacts')">Контакти</li>
        </ul>
      </nav>
    </div>

    <div class="main-content">
      <h1 class="h1">РИМСЬКІ ШТОРИ</h1>
      <p class="p-1">гуртом вiд виробника</p>
      <p class="p-2">Для салонів, дизайнерів, підрядників.</p>
      <p class="p-3">Стабільні терміни, сучасний дизайн, бездоганна якість</p>
      <div class="buttons-div">
        <button class="get-price-btn" type="button" @click="onOpen">
          Отримати гуртовий прайс
        </button>
        <button class="contact-us-btn" type="button">З'язатися з нами</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 852px;
  background-image: url('/img/mainBg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 44px;
  padding-left: 112px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 132px;
}

.logo {
  margin-right: 230px;
}
.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
}

.nav-link {
  cursor: pointer;
  font-family: var(--font-family), sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
}

.main-content {
  margin-left: 202px;
}

.h1 {
  font-family: var(--font-family), sans-serif;
  font-weight: 900;
  font-size: 83px;
  color: #fff;
}

.p-1 {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: #fff;
  margin-bottom: 26px;
}

.p-2,
.p-3 {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 23px;
  color: #fff;
}

.p-3 {
  margin-bottom: 46px;
}

.buttons-div {
  display: flex;
  gap: 30px;
}

.get-price-btn {
  cursor: pointer;
  border: none;
  border-radius: 10px;
  width: 266px;
  height: 70px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #b00;

  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
}

.contact-us-btn {
  cursor: pointer;
  border: 2px solid #b00;
  border-radius: 10px;
  width: 266px;
  height: 70px;

  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: black;
  background-color: transparent;
}
</style>
