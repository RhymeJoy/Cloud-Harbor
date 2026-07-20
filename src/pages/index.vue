<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ProductGrid from '../components/ProductGrid.vue';
import {
  getAvailableProducts,
  getProductsByUniqueCategories,
  getRandomFeaturedProducts,
  type Product
} from '../data/products';

const mainProducts = ref<Product[]>(getProductsByUniqueCategories(undefined, getAvailableProducts()));

onMounted(() => {
  mainProducts.value = getRandomFeaturedProducts();
});
</script>

<template>
  <HeroSection />
  <main>
    <AboutSection />
    <ProductGrid :products="mainProducts" />
  </main>
</template>
