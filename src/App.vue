<script setup lang="ts">
import { ref } from 'vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import SiteFooter from './components/SiteFooter.vue';
import ProductGrid from './components/ProductGrid.vue';
import { products, type Product } from './data/products';

const productList = ref<Product[]>(products);
</script>

<template>
  <div class="app-shell">
    <div class="page-shell">
      <HeroSection />
      <main>
        <AboutSection />
        <ProductGrid :products="productList" />
      </main>
    </div>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}

@media (max-width: 640px) {
  .page-shell {
    padding: 16px 14px 40px;
  }
}
</style>
