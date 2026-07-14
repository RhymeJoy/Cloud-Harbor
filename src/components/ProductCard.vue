<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '../i18n';
import { localizeProductText, productSectionCopy, type Product } from '../data/products';

const { locale } = useI18n();

const props = defineProps<{
  item: Product;
}>();

const productName = computed(() => localizeProductText(props.item.name, locale.value));
const productTag = computed(() => localizeProductText(props.item.tag, locale.value));
const productDescription = computed(() => localizeProductText(props.item.description, locale.value));
const pricePrefix = computed(() => productSectionCopy[locale.value].pricePrefix);
</script>

<template>
  <article class="product-card">
    <img :src="item.image" :alt="productName" />
    <div class="product-body">
      <div class="product-meta">
        <span class="tag">#{{ item.id }} {{ productTag }}</span>
        <span class="price">{{ pricePrefix }} {{ item.price }}</span>
      </div>
      <h4>{{ productName }}</h4>
      <p>{{ productDescription }}</p>
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
  font-weight: 700;
}

.price {
  font-weight: 700;
  color: #ffffff;
}

h4, p {
  margin: 0;
}
</style>
