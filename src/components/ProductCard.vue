<script setup>
import { useI18n } from '../i18n';

const { t } = useI18n();

defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <article class="product-card">
    <img :src="item.image" :alt="t(item.nameKey)" />
    <div class="product-body">
      <div class="product-meta">
        <span class="tag">{{ t(item.tagKey) }}</span>
        <span class="price">{{ t('products.pricePrefix') }} {{ item.price }}</span>
      </div>
      <h4>{{ t(item.nameKey) }}</h4>
      <p>{{ t(item.descriptionKey) }}</p>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  overflow: hidden;
  border-radius: 20px;
  background: rgba(8, 12, 35, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.product-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.product-body {
  padding: 16px;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.tag {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(255, 183, 222, 0.2);
  color: #ffd8ee;
  font-size: 0.75rem;
}

.price {
  font-weight: 700;
  color: #ffffff;
}

h4, p {
  margin: 0;
}
</style>
