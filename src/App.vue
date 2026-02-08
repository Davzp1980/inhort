<script setup>
import HomeSection from './components/HomeSection.vue';
import WorkForProfs from '@/components/WorkForProfs.vue';
import WhyWe from '@/components/WhyWe.vue';
import Models from '@/components/Models.vue';
import FaqS from '@/components/FaqS.vue';
import SomeWordsAbout from '@/components/SomeWordsAbout.vue';
import Reviews from '@/components/Reviews.vue';
import Footer from '@/components/Footer.vue';
import GetPriceModal from '@/components/GetPriceModal.vue';
import { ref } from 'vue';

const scrollTo = id => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const isOpenModal = ref(false);

function openModal(val) {
  isOpenModal.value = val;
}

function closeModal() {
  isOpenModal.value = false;
}
</script>

<template>
  <main>
    <HomeSection :scrollTo="scrollTo" id="home" @open-modal="openModal" />
    <WorkForProfs />
    <WhyWe />
    <Models id="models" />
    <FaqS id="faqs" />
    <SomeWordsAbout id="some-words-about" />
    <Reviews />
    <Footer id="contacts" />
    <GetPriceModal v-if="isOpenModal" :closeModal="closeModal" />
  </main>
</template>

<style scoped></style>
