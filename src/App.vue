<script setup lang="ts">
import { computed } from 'vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import SiteFooter from './components/SiteFooter.vue';
import ProductGrid from './components/ProductGrid.vue';
import ProductsPage from './pages/ProductsPage.vue';
import { useAppRoute } from './composables/useAppRoute';
import { getProductsByIds, products, showinmain } from './data/products';

const { isProductsPage } = useAppRoute();
const mainProducts = computed(() => getProductsByIds(showinmain));
</script>

<template>
  <div class="app-shell">
    <div class="page-shell">
      <template v-if="isProductsPage">
        <ProductsPage :products="products" />
      </template>
      <template v-else>
        <HeroSection />
        <main>
          <AboutSection />
          <ProductGrid :products="mainProducts" />
        </main>
      </template>
    </div>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-shell {
  flex: 1;
  width: min(1200px, 100%);
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
