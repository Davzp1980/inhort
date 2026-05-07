<script setup>
import 'primeicons/primeicons.css';
import { useToast } from 'vue-toastification';
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import IMask from 'imask';
import { onMounted, ref } from 'vue';

const props = defineProps({
  closeModal: {
    type: Function,
    default: () => {},
  },
});

const schema = z.object({
  name: z.string().min(1, "Ім'я повинно бути більше одниєї літери"),
  email: z.string().email('Неверный email'),
  phone: z
    .string()
    .regex(/^\+380 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введіть номер телефону'),
});

// 2️⃣ Создаем форму через vee-validate
const { handleSubmit, setErrors } = useForm({
  initialValues: { name: '', email: '', phone: '' },
});

// Поля формы
const { value: name, errorMessage: nameError } = useField('name');
const { value: email, errorMessage: emailError } = useField('email');
const { value: phone, errorMessage: phoneError } = useField('phone');

function onClose() {
  props.closeModal();
}
const toast = useToast();

const onSubmit = handleSubmit(values => {
  try {
    schema.parse(values); // Zod валидация
    console.log('Форма валидна:', values);
    toast.success('Успешно!', {
      position: 'top-center',
      timeout: 2000,
      hideProgressBar: true,
      toastClassName: 'success-toast',
    });
    props.closeModal();
  } catch (err) {
    if (err instanceof z.ZodError) {
      const formErrors = {};
      for (const issue of err.issues) {
        // ⚠️ используем `issues`, а не `errors`
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

// 🔹 Маска телефона
const phoneInputRef = ref(null);

onMounted(() => {
  if (phoneInputRef.value) {
    IMask(phoneInputRef.value, {
      mask: '+38 (000) 000 00 00',
    });
  }
});
</script>

<template>
  <Teleport to="body">
    <div class="container" @click.self="onClose">
      <div class="modal-content">
        <button class="close-btn" type="button" @click="onClose">
          <i class="pi pi-times" style="font-size: 30px; color: #b00"></i>
        </button>

        <form class="send-form" @submit.prevent="onSubmit">
          <label class="form-label"
            >Ваше ім’я
            <input
              class="input"
              type="text"
              v-model="name"
              :placeholder="nameError ? nameError : 'Введіть ваше ім\'я'"
              :class="nameError ? 'error' : ''"
            />
          </label>

          <label class="form-label"
            >Номер телефона
            <input
              class="input"
              type="text"
              v-model="phone"
              :placeholder="phoneError ? phoneError : '+38 (000) 000 00 00'"
              :class="phoneError ? 'error' : ''"
              ref="phoneInputRef"
            />
          </label>

          <label class="form-label">
            Email
            <input
              class="input"
              type="email"
              v-model="email"
              :placeholder="emailError ? emailError : 'Введіть email'"
              :class="emailError ? 'error' : ''"
            />
          </label>

          <button class="submit-btn" type="submit">Відправити</button>
        </form>
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

.send-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-label {
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
  padding-left: 10px;
  border: none;
  border-radius: 10px;
  background-color: rgba(5, 5, 5, 0.1);
  height: 40px;
}

.error::placeholder {
  color: red;
}

.submit-btn {
  cursor: pointer;
  border: none;
  border-radius: 10px;
  height: 70px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #b00;
  margin-top: 20px;

  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
}
</style>
