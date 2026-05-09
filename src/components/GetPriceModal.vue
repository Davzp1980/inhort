<script setup>
import 'primeicons/primeicons.css';
import { useToast } from 'vue-toastification';
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import IMask from 'imask';
import { onMounted, ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const props = defineProps({
  closeModal: {
    type: Function,
    default: () => {},
  },
});

const phoneInputRef = ref(null);
const toast = useToast();

const validationSchema = toTypedSchema(
  zod.object({
    name: zod
      .string({
        required_error: 'Ім’я обов’язкове',
        invalid_type_error: 'Невірне ім’я',
      })
      .min(3, { message: 'Ім’я повинно містити щонайменше три літери' }),

    phone: zod
      .string({
        required_error: 'Номер телефона обов’язковий',
        invalid_type_error: 'Не вірний номер телефона',
      })
      .regex(/^\+380\s\(\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/, {
        message: 'Формат номера: +380 (00) 000 00 00',
      }),
  })
);

const { handleSubmit, errors, setFieldValue } = useForm({
  validationSchema,
});

const { value: name } = useField('name');
const { value: phone } = useField('phone');

let mask = null;
onMounted(() => {
  const input = phoneInputRef.value;
  if (!input) return;

  input.addEventListener('focus', () => {
    if (mask) return;

    mask = IMask(input, {
      mask: '+{380} (00) 000 00 00',
    });

    mask.on('accept', () => {
      setFieldValue('phone', mask.value);
    });

    mask.value = '+380 ';
  });
});

const onSubmit = handleSubmit(values => {
  console.log(values);
  toast.success('Ваші реквізити успішно відправлено!', {
    position: 'top-center',
    timeout: 2000,
    hideProgressBar: true,
    toastClassName: 'success-toast',
  });
  props.closeModal();
});

function onClose() {
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

        <div v-if="!isSend" class="form-div">
          <form class="form" @submit="onSubmit">
            <label class="label">
              Ваше ім’я
              <span class="input-wrapper">
                <input
                  v-model="name"
                  class="input"
                  type="text"
                  placeholder="Василь"
                  :class="errors.name ? 'error' : ''"
                />
                <img
                  v-if="errors.name"
                  class="error-icon"
                  src="/error-icon.svg"
                  alt="error"
                />
              </span>
              <span class="error">{{ errors.name }}</span>
            </label>

            <label class="label">
              Номер телефона
              <span class="input-wrapper">
                <input
                  class="input"
                  type="tel"
                  placeholder="+380 (00) 000 00 00"
                  :class="errors.phone ? 'error' : ''"
                  ref="phoneInputRef"
                />
                <img
                  v-if="errors.phone"
                  class="error-icon"
                  src="/error-icon.svg"
                  alt="error"
                />
              </span>
              <span class="error">{{ errors.phone }}</span>
            </label>

            <button class="button" type="submit">Зв'язатися з нами</button>
          </form>
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
  align-items: center;
}

.modal-content {
  box-sizing: border-box;
  position: relative;
  width: 572px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px;
  background-color: #fff;

  border-radius: 16px;
}

.close-btn {
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
}

.form-div {
  box-sizing: border-box;
  border-radius: 16px;
  padding: 40px 32px;
  width: 572px;
  height: auto;
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

.input-wrapper {
  position: relative;
}

.input {
  box-sizing: border-box;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  outline: none;

  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #171717;
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

.error-icon {
  position: absolute;
  top: 16px;
  right: 16px;
}
.button {
  margin-top: 8px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 18px 34px;
  width: 100%;
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

.error {
  border-color: red;
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #ef4444;
}

.error::placeholder {
  color: red;
}

@media (min-width: 767px) and (max-width: 1439px) {
}

@media (min-width: 320px) and (max-width: 766px) {
  .form-div {
    box-sizing: border-box;
    border-radius: 0;
    padding: 32px 15px;
    width: 108%;
    height: auto;
    background: #fff;
  }
}
</style>
