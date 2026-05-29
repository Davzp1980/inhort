<script setup>
import 'primeicons/primeicons.css';

const props = defineProps({
  closeModal: {
    type: Function,
    default: () => {},
  },
  scrollTo: Function,
});

const emit = defineEmits(['openModal']);

function onClose() {
  props.closeModal();
}

function handleScroll(section) {
  props.scrollTo(section);
  props.closeModal();
}

function handleClockJoinUs() {
  emit('openModal');
  props.closeModal();
}
</script>

<template>
  <Teleport to="body">
    <div class="container" @click.self="onClose">
      <div class="modal-content">
        <button class="close-btn" type="button" @click="onClose">
          <i class="pi pi-times" style="font-size: 30px; color: #b00"></i>
        </button>

        <div>
          <nav>
            <ul class="nav-links">
              <li class="nav-link" @click="handleScroll('models')">Моделі</li>
              <li class="nav-link" @click="handleScroll('personalization')">
                Персоналізації
              </li>
              <li class="nav-link" @click="handleScroll('viewConfigurations')">
                Конфігурації
              </li>
              <li class="nav-link" @click="handleScroll('ourSystems')">
                Системи
              </li>
              <li class="nav-link" @click="handleScroll('joinUs-section')">
                Контакти
              </li>
            </ul>
          </nav>

          <button class="button" type="button" @click="handleClockJoinUs">
            Зв'язатися з нами
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  inset: 0;
  z-index: 2000;
}

.modal-content {
  box-sizing: border-box;
  position: relative;
  width: 572px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 40px 32px;
  background-color: #fff;
}

.close-btn {
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  list-style: none;
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #364153;
  margin-bottom: 20px;
}

.nav-link {
  cursor: pointer;
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #364153;
}

.button {
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 12px 16px;
  width: 100%;
  height: 60px;
  background-color: #b00;
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 26px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
}
</style>
