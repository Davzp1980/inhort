<script setup></script>
<template>
  <div class="container" id="some-words-about">
    <h2 class="h-2">Декілька слів про <span class="span">Інхорт</span></h2>

    <div class="some-words-content">
      <div class="left-container">
        Давно выяснено, что при оценке дизайна и композиции читаемый текст
        мешает сосредоточиться. Lorem Ipsum используют потому, что тот
        обеспечивает более или менее стандартное заполнение шаблона, а также
        реальное распределение букв и пробелов в абзацах, которое не получается
        при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш
        текст.." Многие программы электронной вёрстки и редакторы HTML
        используют Lorem Ipsum в качестве текст
      </div>
      <div class="right-container">
        <div class="photo-container">
          <div class="photo-container-1"></div>
          <div class="two-photo-container">
            <div class="photo-container-2"></div>
            <div class="photo-container-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1920px;
  padding: 45px 0 108px 0;
  background-color: #cfcfcf;
}

.h-2,
.span {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #333;
  margin-bottom: 42px;
}

.span {
  color: #b00;
}

.some-words-content {
  display: flex;
  gap: 41px;
}

.left-container {
  width: 322px;

  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3a3a3a;
}

.photo-container {
  width: 810px;
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.photo-container-1 {
  width: 100%;
  height: 210px;
  background-color: #fff;
  border-radius: 15px;
}

.two-photo-container {
  display: flex;
  gap: 45px;
}

.photo-container-2 {
  border-radius: 15px;
  width: 448px;
  height: 212px;
  background-color: #fff;
}

.photo-container-3 {
  border-radius: 15px;
  width: 316px;
  height: 212px;
  background-color: #fff;
}
</style>
