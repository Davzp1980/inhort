<script setup>
import { ref } from 'vue';

const phone = ref('');
const email = ref('');
</script>
<template>
  <div class="wrapper" id="joinUs">
    <div class="container">
      <h2 class="h-2">Звʼяжіться з нами</h2>
      <div class="connection-div">
        <div class="email-phone-container">
          <div class="email-phone-div">
            <div class="content">
              <img src="/email-icon.svg" alt="email" />
              <p class="email-title">Email</p>
              <p class="email-text">Ми завжди готові допомогти.</p>
              <a class="email" href="mailto:inhortopt@gmail.com"
                >inhortopt@gmail.com
              </a>
            </div>
            <div>
              <img src="/phone-icon.svg" alt="phone" />
              <p class="email-title">Телефон</p>
              <p class="email-text">Пн-Пт з 9:00 до 17:00</p>
              <a class="email" href="tel:+380638466546">+380 63 846 65 46</a>
            </div>
          </div>

          <div>
            <img src="/pointer-ison.svg" alt="pointer" />
            <p class="email-title">Виробництво</p>
            <p class="email-text">Завітайте до нашого головного офісу.</p>
            <p class="email">
              вул. Автоклубна, 31, Запоріжжя, Запорізька область, 69000
            </p>
          </div>
        </div>

        <div class="form-div">
          <form class="form">
            <label class="label">
              Ваше ім’я
              <input
                v-model="email"
                class="input"
                type="email"
                placeholder="Василь"
              />
            </label>

            <label class="label">
              Номер телефона
              <input
                class="input"
                type="tel"
                v-model="phone"
                placeholder="+380 (00) 000 00 00"
              />
            </label>
            <button class="button" type="submit">Зв'язатися з нами</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  background-color: #333;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1216px;
  margin: 0 auto;
  padding: 96px 112px;
  background-color: #333;
}

.h-2 {
  align-self: start;
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #fff;
  text-align: left;
  margin-bottom: 64px;
}

.email-phone-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  flex-shrink: 0;
  gap: 48px;
}

.connection-div {
  width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.email-phone-div {
  display: flex;
  align-items: center;
  gap: 32px;
}

.email-title {
  margin-top: 16px;
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #fff;
  margin-bottom: 16px;
}
.email-text {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
}

.email {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #fff;
}

.form-div {
  box-sizing: border-box;
  border-radius: 16px;
  padding: 40px 32px;
  width: 572px;
  height: 345px;
  background: #fff;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--font-family), sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: #404040;
}

.input {
  box-sizing: border-box;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  padding: 12px 16px;
  width: 508px;
  height: 48px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  outline: none;
}

.input:focus {
  outline: none;
}

.input::placeholder {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #737373;
}

.button {
  margin-top: 8px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 18px 34px;
  width: 223px;
  height: 61px;
  background: #b00;
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
}
</style>
