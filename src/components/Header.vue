<script setup>
import { ref } from 'vue';

const props = defineProps({
  scrollTo: {
    type: Function,
    default: () => {},
  },
});

const emit = defineEmits(['openModal', 'openMobileModal']);
const activeTab = ref('');

function setActiveTab(tab) {
  activeTab.value = tab;
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  activeTab.value = '';
}
</script>

<template>
  <div class="header">
    <img class="logo" src="/img/Logo.svg" alt="logo" @click="scrollTop" />
    <nav>
      <ul class="nav-links">
        <li
          class="nav-link"
          :class="activeTab === 'models' ? 'active' : ''"
          @click="
            setActiveTab('models');
            props.scrollTo('models');
          "
        >
          Моделі
        </li>
        <li
          class="nav-link"
          :class="activeTab === 'personalization' ? 'active' : ''"
          @click="
            setActiveTab('personalization');
            props.scrollTo('personalization');
          "
        >
          Персоналізації
        </li>
        <li
          class="nav-link"
          :class="activeTab === 'viewConfigurations' ? 'active' : ''"
          @click="
            setActiveTab('viewConfigurations');
            props.scrollTo('viewConfigurations');
          "
        >
          Конфігурації
        </li>
        <li
          class="nav-link"
          :class="activeTab === 'ourSystems' ? 'active' : ''"
          @click="
            setActiveTab('ourSystems');
            props.scrollTo('ourSystems');
          "
        >
          Системи
        </li>
        <li
          class="nav-link"
          :class="activeTab === 'joinUs-section' ? 'active' : ''"
          @click="
            setActiveTab('joinUs-section');
            props.scrollTo('joinUs-section');
          "
        >
          Контакти
        </li>
      </ul>
    </nav>

    <div class="connect">
      <div class="phone-div">
        <img src="/img/phone.svg" alt="phone" />
        <p class="nav-link">+380 63 846 65 46</p>
      </div>
      <button class="button" type="button" @click="emit('openModal')">
        Зв'язатися з нами
      </button>
      <button
        class="burger-button"
        type="button"
        @click="emit('openMobileModal')"
      >
        <img src="/burger.svg" alt="mobile menu" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 113px;
  background: #fff;
}

.logo {
  margin: 0;
  width: 132px;
  height: 38px;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: clamp(8px, 2vw, 40px);
  list-style: none;
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #364153;
}

.nav-link {
  position: relative;
  cursor: pointer;
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #364153;
}

.nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;

  width: 0;
  height: 2px;

  background-color: #b00;
  transition: width 0.3s ease;
}

.nav-link:hover::before {
  width: 100%;
}

.active {
  color: #b00;
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

.burger-button {
  display: none;
}

@media (min-width: 767px) and (max-width: 1439px) {
  .header {
    box-sizing: border-box;
    padding: 26px 22px;
    width: 100%;
  }

  .phone-div {
    display: none;
  }

  .button {
    padding: 0 0;
  }
}

@media (min-width: 320px) and (max-width: 766px) {
  .header {
    box-sizing: border-box;
    padding: 17px 12px;
    width: 100%;
  }

  .button {
    display: none;
  }

  .nav-links {
    display: none;
  }

  .phone-div {
    display: none;
  }

  .burger-button {
    display: block;
    border: none;
    background-color: transparent;
  }
}
</style>
