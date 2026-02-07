<script setup></script>
<template>
  <div class="container" id="faqs">
    <h2 class="h-2">Найпоширеніші <span class="span">питання</span></h2>

    <div class="faqs-container">
      <div class="faq">віпалфоа фвало фдвао фва фвда фвапівап</div>
      <div class="faq">віпалфоа фвало фдвао фва фвда фвапівап</div>
      <div class="faq">віпалфоа фвало фдвао фва фвда фвапівап</div>
      <div class="faq">віпалфоа фвало фдвао фва фвда фвапівап</div>
      <div class="faq">віпалфоа фвало фдвао фва фвда фвапівап</div>
      <div class="faq">віпалфоа фвало фдвао фва фвда фвапівап</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1920px;
  padding: 46px 0 94px 0;
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

.faqs-container {
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 77px 95px 47px 95px;
  border-radius: 20px;
  width: 1249px;
  backdrop-filter: blur(70px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    270deg,
    rgba(187, 0, 0, 0.4) 33.17%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

.faq {
  border-bottom: 1px solid #fff;
  padding-bottom: 28px;

  font-family: var(--font-family), sans-serif;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: 0.04em;
  color: #fff;
}
</style>
