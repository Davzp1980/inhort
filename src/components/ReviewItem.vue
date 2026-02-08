<script setup></script>
<template>
  <div class="review-container">
    <div class="review-photo-div">
      <img src="/img/user.png" alt="user photo" />
    </div>
    <h2 class="user-name">Микита Борисов</h2>
    <p class="user-review">
      На ПК потрібно було замінити SSD, я обрав м2 і тут вже потрібно було
      встановити вінду, майстер супер, встановив спочатку на диск D, а потім на
      C, але гроші взяв тільки за одну установку, рекомендую
    </p>
  </div>
</template>

<style scoped>
.review-container {
  border-radius: 20px;
  width: 245px;
  height: 400px;
  padding: 13px 17px 35px 13px;
  backdrop-filter: blur(70px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    270deg,
    rgba(52, 52, 52, 0.4) 35.48%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

.review-photo-div {
  border-radius: 50%;
  width: 110px;
  height: 110px;
  overflow: hidden;
  margin-bottom: 10px;
}

.user-name {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  margin-bottom: 14px;
}

.user-review {
  font-family: var(--font-family), sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #e0e0ff;
  text-align: left;
}
</style>
