<script setup lang="ts">
import { computed } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ProductGrid from '../components/ProductGrid.vue';
import { featuredProductIds, getProductsByIds } from '../data/products';

const mainProducts = computed(() => getProductsByIds(featuredProductIds));
</script>

<template>
  <HeroSection />
  <main>
    <AboutSection />
    <ProductGrid :products="mainProducts" />
  </main>
</template>
