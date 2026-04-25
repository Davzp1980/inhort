<script setup>
defineProps({
  review: Object,
});
</script>
<template>
  <div class="review-container">
    <img src="/img/marks.svg" alt="marks" />

    <p class="user-review">{{ review.desc }}</p>
    <div>
      <div class="review-item-div">
        <img :src="review.img" :alt="review.userName" />
        <div>
          <p class="review-user-name">{{ review.userName }}</p>
          <p class="review-user-position">{{ review.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-container {
  box-sizing: border-box;
  border-radius: 15px;
  padding: 24px;
  width: 384px;
  height: auto;
  background: #f9fafb;
}

.user-review {
  font-family: var(--font-family), sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #000;
  margin-top: 24px;
  margin-bottom: 24px;
}
.review-item-div {
  display: flex;
  gap: 16px;
  align-items: center;
}
.review-user-name {
  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #171717;
}

.review-user-position {
  font-family: var(--font-family), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #525252;
}

@media (max-width: 768px) {
  .review-container {
    width: 100%;
  }
}
</style>
