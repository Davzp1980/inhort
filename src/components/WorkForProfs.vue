<script setup></script>
<template>
  <div class="container" id="work-for-section">
    <h2 class="h-2">Працюємо для <span class="span">професіоналів</span></h2>
    <div class="work-content">
      <div class="work"></div>
      <div class="work"></div>
      <div class="work"></div>
      <div class="work"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 54px;
  width: 1920px;
  padding: 57px 0 82px 0;
}

.h-2,
.span {
  font-family: var(--font-family), sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #333;
  margin-bottom: 54px;
}

.span {
  color: #b00;
}

.work-content {
  display: flex;
  gap: 70px;
}

.work {
  border-radius: 15px;
  width: 242px;
  height: 240px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #e0d9ce;
}
</style>
