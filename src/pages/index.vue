<script setup lang="ts">
import { computed } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ProductGrid from '../components/ProductGrid.vue';
import { getProductsByIds, showinmain } from '../data/products';

const mainProducts = computed(() => getProductsByIds(showinmain));
</script>

<template>
  <HeroSection />
  <main>
    <AboutSection />
    <ProductGrid :products="mainProducts" />
  </main>
</template>
