<script setup lang="ts">
import { computed } from 'vue';
import ProductCard from '../../components/ProductCard.vue';
import { routeHref } from '../../composables/useAppRoute';
import { createSiteOgMeta } from '../../composables/useSiteSeo';
import { useI18n } from '../../i18n';
import { productDetailCopy, productSectionCopy } from '../../data/productContent';
import {
  formatProductCopy,
  getProductById,
  localizeProductText,
  products
} from '../../data/products';

const route = useRoute();
const { locale, t } = useI18n();
const productId = String(route.params.id ?? '');
const product = getProductById(productId);

if (!product) {
  const fallbackCopy = productDetailCopy[locale.value];

  throw createError({
    statusCode: 404,
    statusMessage: fallbackCopy.notFoundTitle,
    message: fallbackCopy.notFoundText
  });
}

const productsHref = routeHref('products/');
const copy = computed(() => productDetailCopy[locale.value]);
const productName = computed(() => localizeProductText(product.name, locale.value));
const productTag = computed(() => localizeProductText(product.tag, locale.value));
const productDescription = computed(() => localizeProductText(product.description, locale.value));
const productDetails = computed(() => localizeProductText(product.details, locale.value));
const productShipping = computed(() => localizeProductText(product.shipping, locale.value));
const productLocation = computed(() => localizeProductText(product.location, locale.value));
const pricePrefix = computed(() => productSectionCopy[locale.value].pricePrefix);
const badgeTexts = computed(() => product.badges.map((badge) => localizeProductText(badge, locale.value)));
const highlightTexts = computed(() => product.highlights.map((highlight) => localizeProductText(highlight, locale.value)));
const specRows = computed(() =>
  product.specs.map((spec) => ({
    label: localizeProductText(spec.label, locale.value),
    value: localizeProductText(spec.value, locale.value)
  }))
);
const stockText = computed(() => formatProductCopy(copy.value.stockLabel, { count: product.stock }));
const relatedProducts = computed(() => products.filter((item) => item.id !== product.id).slice(0, 3));

useHead(() => ({
  title: `${productName.value} | ${t('site.title')}`,
  meta: [
    {
      key: 'description',
      name: 'description',
      content: productDescription.value
    },
    ...createSiteOgMeta({
      title: `${productName.value} | ${t('site.title')}`,
      description: productDescription.value,
      locale: locale.value,
      path: `products/${product.id}/`,
      image: product.image,
      imageAlt: productName.value,
      type: 'product'
    }),
    { key: 'product:price:amount', property: 'product:price:amount', content: String(product.price) },
    { key: 'product:price:currency', property: 'product:price:currency', content: 'TWD' }
  ]
}));
</script>

<template>
  <main class="product-detail-page">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a :href="productsHref">{{ copy.backToProducts }}</a>
      <span>/</span>
      <span>{{ productName }}</span>
    </nav>

    <section class="product-shell">
      <div class="product-gallery">
        <div class="product-main-image">
          <img :src="product.image" :alt="productName" />
        </div>
        <div class="gallery-strip" aria-label="Product image preview">
          <button type="button" class="active">
            <img :src="product.image" :alt="productName" />
          </button>
          <span>#{{ product.id }}</span>
          <span>{{ productTag }}</span>
        </div>
      </div>

      <section class="product-summary">
        <p class="store-badge">{{ copy.storeBadge }}</p>
        <h1>{{ productName }}</h1>

        <div class="product-location-row">
          <span>{{ productLocation }}</span>
        </div>

        <div class="price-panel">
          <span class="price">{{ pricePrefix }} {{ product.price }}</span>
          <span v-if="product.originalPrice" class="original-price">{{ pricePrefix }} {{ product.originalPrice }}</span>
        </div>

        <p class="summary-text">{{ productDescription }}</p>

        <div class="badge-row">
          <span v-for="badge in badgeTexts" :key="badge">{{ badge }}</span>
        </div>

        <dl class="purchase-meta">
          <div>
            <dt>{{ copy.shippingTitle }}</dt>
            <dd>{{ productShipping }}</dd>
          </div>
          <div>
            <dt>{{ copy.stockTitle }}</dt>
            <dd>{{ stockText }}</dd>
          </div>
        </dl>

      </section>
    </section>

    <section class="detail-grid" :aria-label="copy.productDetailsTitle">
      <section class="info-block">
        <h2>{{ copy.highlightsTitle }}</h2>
        <ul>
          <li v-for="highlight in highlightTexts" :key="highlight">{{ highlight }}</li>
        </ul>
      </section>

      <section class="info-block">
        <h2>{{ copy.specsTitle }}</h2>
        <dl class="spec-list">
          <div v-for="spec in specRows" :key="spec.label">
            <dt>{{ spec.label }}</dt>
            <dd>{{ spec.value }}</dd>
          </div>
        </dl>
      </section>

      <section class="info-block wide">
        <h2>{{ copy.productDetailsTitle }}</h2>
        <p>{{ productDetails }}</p>
      </section>

      <section class="info-block wide">
        <h2>{{ copy.shippingTitle }}</h2>
        <p>{{ productShipping }}</p>
      </section>
    </section>

    <section v-if="relatedProducts.length" class="related-section">
      <h2>{{ copy.relatedTitle }}</h2>
      <div class="related-grid">
        <ProductCard v-for="item in relatedProducts" :key="item.id" :item="item" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.product-detail-page {
  display: grid;
  gap: 18px;
  padding-top: 8px;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  color: #ffd8ee;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: #ffffff;
  font-weight: 800;
}

.product-shell {
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(320px, 1.1fr);
  gap: 18px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 28px;
  background: rgba(8, 12, 35, 0.78);
  color: #f7f3ff;
  box-shadow: 0 22px 55px rgba(2, 4, 14, 0.35);
  backdrop-filter: blur(18px);
}

.product-gallery {
  display: grid;
  align-content: start;
  gap: 12px;
}

.product-main-image {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
}

.product-main-image img {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
}

.gallery-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.gallery-strip button {
  width: 58px;
  height: 58px;
  padding: 0;
  overflow: hidden;
  border: 2px solid rgba(255, 184, 222, 0.7);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
}

.gallery-strip img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-strip span,
.badge-row span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 9px;
  border-radius: 999px;
  background: rgba(255, 184, 222, 0.18);
  color: #ffd8ee;
  font-size: 0.78rem;
  font-weight: 800;
}

.product-summary {
  display: grid;
  align-content: start;
  gap: 14px;
}

.store-badge,
h1,
h2,
p,
dl,
dd,
ul {
  margin: 0;
}

.store-badge {
  width: fit-content;
  padding: 5px 9px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff7fd8, #7f6cff);
  color: #ffffff;
  font-size: 0.76rem;
  font-weight: 900;
}

h1 {
  color: #ffffff;
  font-size: clamp(1.5rem, 2.8vw, 2.6rem);
  line-height: 1.18;
}

.product-location-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  color: #d8d6f7;
  font-size: 0.92rem;
}

.product-location-row span {
  color: #ffd8ee;
  font-weight: 900;
}

.price-panel {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
}

.price {
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 900;
  line-height: 1;
}

.original-price {
  color: rgba(216, 214, 247, 0.58);
  font-size: 1rem;
  text-decoration: line-through;
}

.summary-text {
  color: #d8d6f7;
  line-height: 1.75;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.purchase-meta {
  display: grid;
  gap: 10px;
  color: #ece9ff;
}

.purchase-meta div {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
}

.purchase-meta dt {
  color: #ffd8ee;
  font-size: 0.86rem;
}

.purchase-meta dd {
  line-height: 1.65;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.info-block,
.related-section {
  display: grid;
  gap: 12px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  color: #f7f3ff;
  backdrop-filter: blur(14px);
}

.info-block.wide {
  grid-column: 1 / -1;
}

.info-block h2,
.related-section h2 {
  color: #ffffff;
  font-size: 1.05rem;
}

.info-block p,
.info-block li {
  color: #d8d6f7;
  line-height: 1.75;
}

.info-block ul {
  display: grid;
  gap: 8px;
  padding-left: 20px;
}

.spec-list {
  display: grid;
  gap: 1px;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
}

.spec-list div {
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  gap: 12px;
  padding: 12px;
  background: rgba(8, 12, 35, 0.5);
}

.spec-list dt {
  color: #ffd8ee;
}

.spec-list dd {
  color: #ffffff;
  font-weight: 700;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

@media (max-width: 860px) {
  .product-shell,
  .detail-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .product-shell,
  .info-block,
  .related-section {
    padding: 12px;
  }

  .purchase-meta div,
  .spec-list div {
    grid-template-columns: 1fr;
    gap: 5px;
  }
}
</style>
