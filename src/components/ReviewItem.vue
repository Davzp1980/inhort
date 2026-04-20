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
      <img :src="review.img" :alt="review.userName" />
    </div>
  </div>
</template>

<style scoped>
.review-container {
  box-sizing: border-box;
  border-radius: 15px;
  padding: 24px;
  width: 384px;
  height: 420px;
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
</style>
