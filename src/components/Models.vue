<script setup></script>
<template>
  <div class="container" id="models">
    <h2 class="h-2">Наші <span class="span">моделі</span></h2>

    <div class="model-container">
      <h2 class="model-name">Назва моделі</h2>
      <p class="model-description">
        это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
        является стандартной "рыбой" для текстов на латинице с начала XVI века.
        В то время некий
      </p>
      <div class="model-img-container">
        <img class="model-img" src="/img/shtora.webp" alt="photo" />
        <img class="model-img" src="/img/shtora.webp" alt="photo" />
        <img class="model-img" src="/img/shtora.webp" alt="photo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 38px 0;
}

.h-2,
.span {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #333;
  margin-bottom: 16px;
}

.span {
  color: #b00;
}

.model-container {
  width: 1230px;
  padding: 48px 0 39px 0;
}

.model-name {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 30px;
  text-align: left;
  color: #333;
}

.model-description {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #6c6c6c;
  margin-bottom: 33px;
}

.model-img-container {
  display: flex;
  gap: 45px;
}

.model-img {
  border-radius: 16px;
  overflow: hidden;
  width: 380px;
  height: 380px;
}
</style>
