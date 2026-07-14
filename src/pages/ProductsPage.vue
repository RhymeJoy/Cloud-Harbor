<script setup lang="ts">
import { computed } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import { routeHref } from '../composables/useAppRoute';
import { useI18n } from '../i18n';
import { productPageCopy, type Product } from '../data/products';

defineProps<{
  products: Product[];
}>();

const { locale } = useI18n();
const homeHref = routeHref();
const pageCopy = computed(() => productPageCopy[locale.value]);
</script>

<template>
  <main class="products-page">
    <a class="back-link" :href="homeHref">{{ pageCopy.backHome }}</a>

    <header class="products-header">
      <p class="eyebrow">{{ pageCopy.eyebrow }}</p>
      <h1>{{ pageCopy.title }}</h1>
      <p>{{ pageCopy.description }}</p>
    </header>

    <div class="products-grid">
      <ProductCard v-for="item in products" :key="item.id" :item="item" />
    </div>
  </main>
</template>

<style scoped>
.products-page {
  padding-top: 12px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  margin-bottom: 18px;
  padding: 0 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #ffd8ee;
  font-weight: 700;
  transition: transform 0.2s ease, background 0.2s ease;
}

.back-link:hover {
  transform: translateY(-1px);
  background: rgba(255, 184, 222, 0.16);
}

.products-header {
  max-width: 720px;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #ffb8de;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

h1,
p {
  margin: 0;
}

h1 {
  margin-bottom: 10px;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.15;
}

.products-header p {
  color: #d8d6f7;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

@media (max-width: 900px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
