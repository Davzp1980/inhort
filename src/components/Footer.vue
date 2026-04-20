<script setup>
defineProps({
  scrollTo: Function,
});
</script>
<template>
  <div class="wrapper">
    <div class="footer-container" id="contacts">
      <div class="logo-nav">
        <div class="logo">
          <img class="logo-svg" src="/img/logo.svg" alt="logo" />
          <p class="logo-nav-desc">Римські штори гуртом від виробника</p>
          <p class="rights">© 2026 ІНХОРТ. Всі права захищені.</p>
        </div>

        <div class="nav">
          <h2 class="h2-nav">Навігація</h2>
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
        </div>
      </div>

      <div class="contacts">
        <p class="contacts-title">Контакти</p>
        <a class="contacts-text" href="tel:+380638466546">
          <img src="/phone-red-ison.svg" alt="phone" />
          +380 63 846 65 46
        </a>
        <a class="contacts-text" href="mailto:inhortopt@gmail.com">
          <img src="/email-red-icon.svg" alt="email" />
          inhortopt@gmail.com
        </a>
        <p class="contacts-text">
          <img src="/pointer-red-icon.svg" alt="email" />
          Україна
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: #101828;
}

.footer-container {
  margin: 0 auto;
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 112px;
}

.logo {
  width: 268px;
  flex-shrink: 0;
}
.logo-nav {
  flex-shrink: 0;
  width: 268px;
  display: flex;
  align-items: start;
  gap: 48px;
}

.logo-svg {
  margin-left: -8px;
  width: 132px;
  height: 39px;
  margin-bottom: 16px;
}

.logo-nav-desc {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #99a1af;
  margin-bottom: 17px;
}

.rights {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.01em;
  color: #6a7282;
}

.nav {
}

.h2-nav {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 16px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-link {
  cursor: pointer;
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #99a1af;
}

.contacts-title {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  letter-spacing: -0.02em;
  color: #fff;
}

.contacts-text {
  display: flex;

  gap: 12px;
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #99a1af;
}
</style>
