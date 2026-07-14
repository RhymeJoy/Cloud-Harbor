<script setup>
import ProductCard from './ProductCard.vue';
import { useI18n } from '../i18n';

const { t } = useI18n();

defineProps({
  products: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section id="products" class="product-section">
    <div class="section-title">
      <p class="eyebrow">{{ t('products.eyebrow') }}</p>
      <h3>{{ t('products.title') }}</h3>
    </div>
    <div class="product-grid">
      <ProductCard v-for="item in products" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<style scoped>
.product-section {
  margin-top: 24px;
}

.section-title {
  margin-bottom: 16px;
}

.eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffb8de;
  margin: 0 0 8px;
}

h3 {
  margin: 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
