<script setup>
import HomeSection from './components/HomeSection.vue';
import WhyWe from '@/components/WhyWe.vue';
import Models from '@/components/Models.vue';
import Reviews from '@/components/Reviews.vue';
import Footer from '@/components/Footer.vue';
import GetPriceModal from '@/components/GetPriceModal.vue';
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Personalization from '@/components/Personalization.vue';
import ViewConfigurations from '@/components/ViewConfigurations.vue';
import OurSystems from '@/components/OurSystems.vue';
import WhoWeWorkFor from '@/components/WhoWeWorkFor.vue';
import JoinUs from '@/components/JoinUs.vue';

const scrollTo = id => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const isOpenModal = ref(false);

function openModal() {
  isOpenModal.value = true;
}

function closeModal() {
  isOpenModal.value = false;
}
</script>

<template>
  <main>
    <div class="main-container">
      <Header :scrollTo="scrollTo" @open-modal="openModal" />
      <HomeSection :scrollTo="scrollTo" id="home" @open-modal="openModal" />
      <WhyWe id="why-we" />
      <Models id="models" />
      <Personalization id="personalization" />
      <ViewConfigurations id="viewConfigurations" />
      <OurSystems id="ourSystems" />
      <WhoWeWorkFor id="whoWeWorkFor" />
      <Reviews id="reviews" />
      <JoinUs id="joinUs" />

      <Footer id="contacts" :scrollTo="scrollTo" />
      <GetPriceModal v-if="isOpenModal" :closeModal="closeModal" />
    </div>
  </main>
</template>

<style scoped>
.main-container {
}
</style>
