<script setup lang="ts">
import { computed, resolveComponent } from 'vue';
import { routeHref } from '../composables/useAppRoute';
import { useI18n } from '../i18n';
import {
  getProductPath,
  getProductRouteId,
  getProductThumbnail,
  localizeProductTagText,
  localizeProductText,
  type Product
} from '../data/products';

const { locale, t } = useI18n();
const NuxtLink = resolveComponent('NuxtLink');

type ImageLoading = 'eager' | 'lazy';
type ImageFetchPriority = 'high' | 'low' | 'auto';

const props = withDefaults(defineProps<{
  item: Product;
  imageLoading?: ImageLoading;
  imageFetchPriority?: ImageFetchPriority;
}>(), {
  imageLoading: 'lazy',
  imageFetchPriority: 'low'
});

const productName = computed(() => localizeProductText(props.item.name, locale.value));
const productNameParts = computed(() => {
  const match = productName.value.match(
    /^(.*?)(紅包袋\s*[（(]\d+(?:入|卡)[）)]|Red Envelope\s*[（(]\d+(?:-Pack|-card)[）)])$/i
  );

  return match ? { prefix: match[1], suffix: match[2] } : { prefix: productName.value, suffix: '' };
});
const productTag = computed(() => localizeProductTagText(props.item.tag, locale.value));
const productDescription = computed(() => localizeProductText(props.item.description, locale.value));
const productLocation = computed(() => localizeProductText(props.item.location, locale.value));
const pricePrefix = computed(() => t('productSection.pricePrefix'));
const isSoldOut = computed(() => typeof props.item.originalPrice === 'string');
const originalPriceText = computed(() => {
  const { originalPrice } = props.item;

  if (!originalPrice) {
    return '';
  }

  return typeof originalPrice === 'string' ? originalPrice : `${pricePrefix.value} ${originalPrice}`;
});
const detailHref = computed(() => routeHref(getProductPath(props.item)));
const cardTag = computed(() => (isSoldOut.value ? 'article' : NuxtLink));
const cardAttrs = computed(() =>
  isSoldOut.value
    ? { 'aria-label': productName.value, 'aria-disabled': 'true' }
    : { to: detailHref.value, 'aria-label': productName.value }
);
const productRouteId = computed(() => getProductRouteId(props.item));
const productImage = computed(() => getProductThumbnail(props.item));
</script>

<template>
  <component
    :is="cardTag"
    class="product-card"
    :class="{ 'product-card--sold': isSoldOut }"
    v-bind="cardAttrs"
  >
    <div class="product-image-wrap">
      <img
        :src="productImage"
        :alt="productName"
        :loading="imageLoading"
        :fetchpriority="imageFetchPriority"
        decoding="async"
      />
      <span class="shop-badge">Cloud Harbor</span>
    </div>
    <div class="product-body">
      <h4>
        {{ productNameParts.prefix }}<span v-if="productNameParts.suffix" class="product-name-suffix">{{ productNameParts.suffix }}</span>
      </h4>
      <p>{{ productDescription }}</p>
      <div class="product-price-row">
        <span class="price">{{ pricePrefix }} {{ item.price }}</span>
        <span v-if="originalPriceText" class="original-price" :class="{ 'sold-label': isSoldOut }">{{ originalPriceText }}</span>
      </div>
      <div class="product-meta">
        <span class="tag">#{{ productRouteId }} {{ productTag }}</span>
        <span>{{ productLocation }}</span>
      </div>
    </div>
  </component>
</template>

<style scoped>
.product-card {
  display: block;
  overflow: hidden;
  min-height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  background: rgba(8, 12, 35, 0.75);
  color: #ffffff;
  box-shadow: 0 18px 42px rgba(2, 4, 14, 0.28);
  backdrop-filter: blur(14px);
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.product-card:not(.product-card--sold):hover {
  transform: translateY(-3px);
  border-color: rgba(255, 184, 222, 0.42);
  box-shadow: 0 22px 48px rgba(2, 4, 14, 0.36);
}

.product-card--sold {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(27, 29, 40, 0.72);
  box-shadow: none;
  cursor: not-allowed;
  filter: grayscale(1);
  opacity: 0.58;
}

.product-image-wrap {
  position: relative;
  background: rgba(255, 255, 255, 0.06);
}

.product-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
  display: block;
}

.shop-badge {
  position: absolute;
  left: 10px;
  top: 10px;
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 8px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff7fd8, #7f6cff);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 800;
}

.product-body {
  display: grid;
  gap: 8px;
  padding: 12px;
}

.product-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  color: #d8d6f7;
  font-size: 0.76rem;
}

.product-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.tag {
  display: inline-block;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(255, 184, 222, 0.18);
  color: #ffd8ee;
  font-size: 0.75rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
}

.original-price {
  color: rgba(216, 214, 247, 0.58);
  font-size: 0.82rem;
  text-decoration: line-through;
}

.original-price.sold-label {
  color: #ffffff;
  font-weight: 800;
  text-decoration: none;
}

h4,
p {
  margin: 0;
}

h4 {
  display: -webkit-box;
  min-height: 2.8em;
  overflow: hidden;
  color: #ffffff;
  font-size: 0.96rem;
  line-height: 1.4;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.product-name-suffix {
  white-space: nowrap;
}

p {
  display: -webkit-box;
  min-height: 2.9em;
  overflow: hidden;
  color: #d8d6f7;
  font-size: 0.84rem;
  line-height: 1.45;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
