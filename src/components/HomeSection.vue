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
  <div class="container" id="home-section">
    <div class="main-content">
      <h1 class="h1">РИМСЬКІ ШТОРИ</h1>
      <p class="p-1">гуртом вiд виробника</p>
      <p class="p-2">Для салонів, дизайнерів, підрядників.</p>
      <p class="p-3">Стабільні терміни, сучасний дизайн, бездоганна якість</p>
      <button class="button" type="button">Зв'язатися з нами</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-width: 1440px;
  height: 852px;
  background:
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('/img/hero-bg1.png') center / cover no-repeat;
  margin-bottom: 60px;
}

.main-content {
  padding: 180px 0 0 102px;
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
.button {
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 18px 34px;
  width: 223px;
  height: 61px;
  background-color: #b00;
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
}
</style>
