<script setup>
import 'primeicons/primeicons.css';
import { ref } from 'vue';

const props = defineProps({
  closeModal: {
    type: Function,
    default: () => {},
  },
});

const formData = ref({
  name: '',
  email: '',
});

function onClose() {
  props.closeModal();
}

function onSubmit() {
  console.log(formData.value.name);
  props.closeModal();
}
</script>

<template>
  <Teleport to="body">
    <div class="container" @click.self="onClose">
      <div class="modal-content">
        <h1 class="h-1">Send form</h1>
        <button class="close-btn" type="button" @click="onClose">
          <i class="pi pi-times" style="font-size: 30px; color: #b00"></i>
        </button>

        <form class="send-form" @submit.prevent="onSubmit">
          <label class="form-label"
            >Ім'я
            <input class="input" type="text" v-model="formData.name" />
          </label>

          <label class="form-label">
            Email
            <input class="input" type="email" v-model="formData.email" />
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
  width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f7f7f8;
  border: 1px solid #d9d9de;
  border-radius: 8px;
}

.close-btn {
  border: none;
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
}

.send-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-label {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;
}

.input {
  border: none;
  border-radius: 10px;
  background-color: rgba(5, 5, 5, 0.1);
  height: 40px;
}

.submit-btn {
  cursor: pointer;
  border: none;
  border-radius: 10px;
  height: 70px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #b00;

  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
}
</style>
