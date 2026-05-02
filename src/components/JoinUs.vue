<script setup>
import 'primeicons/primeicons.css';
import { useToast } from 'vue-toastification';
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import IMask from 'imask';
import { onMounted, ref } from 'vue';

const isSend = ref(false);

const schema = z.object({
  name: z.string().min(1, "Ім'я повинно бути більше одниєї літери"),
  email: z.string().email('Неверный email'),
  phone: z
    .string()
    .regex(/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введіть номер телефону'),
});

const { handleSubmit, setErrors } = useForm({
  initialValues: { name: '', email: '', phone: '' },
});

const { value: name, errorMessage: nameError } = useField('name');
const { value: email, errorMessage: emailError } = useField('email');
const { value: phone, errorMessage: phoneError } = useField('phone');

const toast = useToast();

const onSubmit = handleSubmit(values => {
  try {
    console.log('Форма валидна:', values);

    toast.success('Успешно!', {
      position: 'top-center',
      timeout: 2000,
      hideProgressBar: true,
      toastClassName: 'success-toast',
    });

    isSend.value = true;
  } catch (err) {
    if (err instanceof z.ZodError) {
      const formErrors = {};
      for (const issue of err.issues) {
        if (issue.path.length > 0) {
          formErrors[issue.path[0]] = issue.message;
        }
      }
      setErrors(formErrors); // покажет ошибки под полями
    } else {
      console.error('Неизвестная ошибка:', err);
    }
  }
});

const phoneInputRef = ref(null);

onMounted(() => {
  if (phoneInputRef.value) {
    IMask(phoneInputRef.value, {
      mask: '+38 (00) 000 00 00',
    });
  }
});
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
            <div class="content">
              <img class="phone-icon" src="/phone-icon.svg" alt="phone" />
              <p class="email-title">Телефон</p>
              <p class="email-text">Пн-Пт з 9:00 до 17:00</p>
              <a class="email" href="tel:+380638466546">+380 63 846 65 46</a>
            </div>
          </div>

          <div class="content">
            <img src="/pointer-ison.svg" alt="pointer" />
            <p class="email-title">Виробництво</p>
            <p class="email-text">Завітайте до нашого головного офісу.</p>
            <p class="email">
              вул. Автоклубна, 31, Запоріжжя, Запорізька область, 69000
            </p>
          </div>
        </div>

        <div v-if="!isSend" class="form-div">
          <form class="form" @submit.prevent="onSubmit">
            <label class="label">
              Ваше ім’я
              <input
                v-model="name"
                class="input"
                type="text"
                :placeholder="nameError ? nameError : 'Василь'"
                :class="nameError ? 'error' : ''"
              />
            </label>

            <label class="label">
              Номер телефона
              <input
                class="input"
                type="tel"
                v-model="phone"
                :placeholder="phoneError ? phoneError : '+38 (00) 000 00 00'"
                :class="phoneError ? 'error' : ''"
                ref="phoneInputRef"
              />
            </label>
            <button class="button" type="submit">Зв'язатися з нами</button>
          </form>
        </div>

        <div v-else class="successfully-sent">
          <div class="img-wrapper">
            <img src="/success-icon.svg" alt="success" />
          </div>
          <div class="successfully-text-wrapper">
            <h2 class="successfully-title">Ваша заявка успішно оформлена</h2>
            <p class="successfully-desc">
              Наші менеджери зв’яжуться з вами найближчим часом
            </p>
          </div>
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
  background-size: contain;
  background-repeat: no-repeat;
}
.container {
  box-sizing: border-box;
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
.connection-div {
  width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.email-phone-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  flex-shrink: 0;
  gap: 48px;
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
  height: 397px;
  background: #fff;
}

.successfully-sent {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 40px 32px;
  width: 572px;
  height: 345px;
  background: #fff;
}

.img-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background: #dcfce7;
}

.successfully-text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.successfully-title {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #000;
  margin-bottom: 8px;
}

.successfully-desc {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #4a5565;
  max-width: 300px;
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

.error::placeholder {
  color: red;
}

@media (min-width: 767px) and (max-width: 1439px) {
  .wrapper {
    width: 100%;
  }

  .container {
    padding: 64px 32px;
    width: 768px;
  }

  .h-2 {
    font-size: 48px;
  }

  .connection-div {
    width: 704px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 72px;
  }

  .email-phone-container {
    align-items: start;
    width: 704px;
    flex-direction: row;
    gap: 32px;
  }

  .email-phone-div {
    display: flex;
    align-items: flex-start;
  }
  .content {
    width: 213px;
  }
  .phone-icon {
    margin-top: 0;
  }

  .form-div {
    width: 704px;
  }
}

@media (min-width: 320px) and (max-width: 766px) {
  .wrapper {
    width: 100%;
  }
  .container {
    padding: 64px 16px 0 16px;
    width: 100%;
  }

  .h-2 {
    font-size: 30px;
    line-height: 127%;
  }
  .connection-div {
    width: 100%;
    flex-direction: column;
  }
  .email-phone-container {
    gap: 40px;
    padding-bottom: 48px;
  }

  .email-phone-div {
    flex-direction: column;
    align-items: start;
    gap: 40px;
  }

  .email-title {
    font-size: 18px;
    line-height: 156%;
    margin-top: 12px;
    margin-bottom: 4px;
  }

  .email-text {
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 12px;
  }

  .form-div {
    box-sizing: border-box;
    border-radius: 0;
    padding: 32px 15px;
    width: 108%;
    height: auto;
    background: #fff;
  }

  .input {
    width: 100%;
  }

  .button {
    padding: 0;
  }
}
</style>
