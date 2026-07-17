<script setup lang="ts">
import { createError, useHead, useRoute } from '#imports';
import { computed, onMounted, ref } from 'vue';
import ProductCard from '../../../components/ProductCard.vue';
import { routeHref } from '../../../composables/useAppRoute';
import { createSiteOgMeta } from '../../../composables/useSiteSeo';
import { useI18n } from '../../../i18n';
import {
  getProductPath,
  getProductImageThumbnail,
  getProductThumbnail,
  getProductById,
  getProductRouteId,
  getProductsByUniqueCategories,
  getRandomProductsByUniqueCategories,
  localizeProductSpecValue,
  localizeProductTagText,
  localizeProductText,
  productCategoryLabels,
  products,
  type LocalizedText,
  type ProductCategory,
  type ProductCategoryCode,
  type ProductSpec
} from '../../../data/products';

const route = useRoute();
const { locale, t } = useI18n();
const productCategory = String(route.params.category ?? '') as ProductCategoryCode;
const productId = String(route.params.id ?? '');
const product = getProductById(productCategory, productId);

if (!product) {
  throw createError({
    statusCode: 404,
    statusMessage: t('productDetail.notFoundTitle'),
    message: t('productDetail.notFoundText')
  });
}

const productsHref = routeHref('products/');
const copy = computed(() => ({
  backToProducts: t('productDetail.backToProducts'),
  storeBadge: t('productDetail.storeBadge'),
  stockTitle: t('productDetail.stockTitle'),
  stockLabel: t('productDetail.stockLabel', { count: product.stock }),
  productDetailsTitle: t('productDetail.productDetailsTitle'),
  specsTitle: t('productDetail.specsTitle'),
  shippingTitle: t('productDetail.shippingTitle'),
  highlightsTitle: t('productDetail.highlightsTitle'),
  relatedTitle: t('productDetail.relatedTitle')
}));
const productName = computed(() => localizeProductText(product.name, locale.value));
const productTag = computed(() => localizeProductTagText(product.tag, locale.value));
const productDescription = computed(() => localizeProductText(product.description, locale.value));
const productDetails = computed(() => localizeProductText(product.details, locale.value));
const productShipping = computed(() => localizeProductText(product.shipping, locale.value));
const productLocation = computed(() => localizeProductText(product.location, locale.value));
const productRouteId = getProductRouteId(product);
const defaultImage = product.images[0];
const productImages = product.images.map((image, index) => ({
  full: image,
  preview: index === 0 ? getProductThumbnail(product) : getProductImageThumbnail(image)
}));
const selectedImage = ref(defaultImage);
const pricePrefix = computed(() => t('productSection.pricePrefix'));
const badgeTexts = computed(() => product.badges.map((badge) => localizeProductTagText(badge, locale.value)));
const highlightTexts = computed(() => product.highlights.map((highlight) => localizeProductText(highlight, locale.value)));
const stockText = computed(() => {
  if (product.stockText) {
    return localizeProductText(product.stockText, locale.value);
  }

  return locale.value === 'zh-TW' ? `${product.stock} 件` : `${product.stock} items`;
});
type SpecRow = {
  key: string;
  label: string;
  value: string;
};

const minimumSpecRows = 3;
const hiddenSpecLabels = new Set(['販售方式', 'Sales']);
const specLabel = (text: LocalizedText) => localizeProductText(text, locale.value);
const isHiddenSpec = (spec: ProductSpec) =>
  hiddenSpecLabels.has(spec.label['zh-TW']) || hiddenSpecLabels.has(spec.label.en);
const specKey = (spec: ProductSpec) => spec.label.en.toLowerCase();
const createFallbackSpec = (key: string, label: LocalizedText, value: string): SpecRow => ({
  key,
  label: specLabel(label),
  value
});
const fallbackFormats: Record<ProductCategory, LocalizedText> = {
  'body-pillows': { 'zh-TW': '等身抱枕套', en: 'Body Pillow Cover' },
  food: { 'zh-TW': '食品商品', en: 'Food Item' },
  plush: { 'zh-TW': '絨毛布偶', en: 'Plush' },
  badges: { 'zh-TW': '徽章', en: 'Badge' },
  'acrylic-stands': { 'zh-TW': '壓克力立牌', en: 'Acrylic Stand' },
  keychains: { 'zh-TW': '鑰匙圈', en: 'Keychain' },
  'ring-holders': { 'zh-TW': '手機指環支架', en: 'Ring Holder' },
  figures: { 'zh-TW': '手辦', en: 'Figure' },
  bandages: { 'zh-TW': 'OK 繃', en: 'Bandage' },
  'card-skins': { 'zh-TW': '造型卡貼', en: 'Card Sticker' },
  rulers: { 'zh-TW': '造型尺', en: 'Shaped Ruler' },
  medals: { 'zh-TW': '獎牌', en: 'Medal' },
  postcards: { 'zh-TW': '明信片', en: 'Postcard' },
  books: { 'zh-TW': '書籍', en: 'Book' },
  'hair-accessories': { 'zh-TW': '髮飾', en: 'Hair Accessory' },
  puzzles: { 'zh-TW': '拼圖', en: 'Puzzle' },
  bookmarks: { 'zh-TW': '書籤', en: 'Bookmark' },
  'red-envelopes': { 'zh-TW': '正反雙面圖樣', en: 'Front and Back Artwork' },
  'yearly-decorations': { 'zh-TW': '年節裝飾', en: 'Lunar New Year Decoration' }
};
const characterMatchers: Array<{ value: LocalizedText; aliases: string[] }> = [
  { value: { 'zh-TW': '六主角', en: 'Mane 6' }, aliases: ['六主角', 'Mane 6'] },
  { value: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' }, aliases: ['暮光閃閃', 'Twilight Sparkle', 'Twilight'] },
  { value: { 'zh-TW': '雲寶', en: 'Rainbow Dash' }, aliases: ['雲寶', 'Rainbow Dash'] },
  { value: { 'zh-TW': '珍奇', en: 'Rarity' }, aliases: ['珍奇', 'Rarity'] },
  { value: { 'zh-TW': '蘋果嘉兒', en: 'Applejack' }, aliases: ['蘋果嘉兒', 'Applejack'] },
  { value: { 'zh-TW': '柔柔', en: 'Fluttershy' }, aliases: ['柔柔', 'Fluttershy'] },
  { value: { 'zh-TW': '碧琪', en: 'Pinkie Pie' }, aliases: ['碧琪', 'Pinkie Pie', 'Pinkie'] },
  { value: { 'zh-TW': '穗龍', en: 'Spike' }, aliases: ['穗龍', 'Spike'] }
];
const productSearchText = computed(() =>
  [
    product.name,
    product.description,
    product.details,
    ...product.badges,
    ...product.highlights
  ]
    .flatMap((text) => [text['zh-TW'], text.en])
    .join(' ')
    .toLowerCase()
);
const productCharacters = computed(() => {
  const matchedCharacters = characterMatchers.filter((matcher) =>
    matcher.aliases.some((alias) => productSearchText.value.includes(alias.toLowerCase()))
  );

  if (matchedCharacters.length === 0) {
    if (productSearchText.value.includes('彩虹小馬') || productSearchText.value.includes('my little pony')) {
      return 'My Little Pony Characters';
    }

    return null;
  }

  return matchedCharacters.map((matcher) => matcher.value.en).join(', ');
});
const specDisplayOrder = ['category', 'format', 'character', 'series'];
const orderedSpecRows = (rows: SpecRow[]) =>
  [...rows].sort((left, right) => {
    const leftOrder = specDisplayOrder.indexOf(left.key);
    const rightOrder = specDisplayOrder.indexOf(right.key);
    const normalizedLeftOrder = leftOrder === -1 ? specDisplayOrder.length : leftOrder;
    const normalizedRightOrder = rightOrder === -1 ? specDisplayOrder.length : rightOrder;

    return normalizedLeftOrder - normalizedRightOrder;
  });
const specRows = computed(() => {
  const rows = product.specs
    .filter((spec) => !isHiddenSpec(spec))
    .map((spec) => ({
      key: specKey(spec),
      label: specLabel(spec.label),
      value: localizeProductSpecValue(spec, locale.value)
    }));
  const hasSeriesSpec = rows.some((row) => row.key === 'series');
  const fallbackRows: SpecRow[] = [
    createFallbackSpec(
      'category',
      { 'zh-TW': '類別', en: 'Category' },
      localizeProductText(productCategoryLabels[product.category], locale.value)
    ),
    ...(!hasSeriesSpec
      ? [createFallbackSpec('format', { 'zh-TW': '形式', en: 'Format' }, specLabel(fallbackFormats[product.category]))]
      : []),
    ...(productCharacters.value
      ? [createFallbackSpec('character', { 'zh-TW': '角色', en: 'Character' }, productCharacters.value)]
      : []),
    createFallbackSpec('id', { 'zh-TW': '編號', en: 'ID' }, productRouteId),
    createFallbackSpec('stock', { 'zh-TW': '庫存', en: 'Stock' }, stockText.value)
  ];

  for (const row of fallbackRows) {
    const isCoreSpec = specDisplayOrder.includes(row.key);

    if (!isCoreSpec && rows.length >= minimumSpecRows) {
      break;
    }

    if (!rows.some((existingRow) => existingRow.key === row.key)) {
      rows.push(row);
    }
  }

  return orderedSpecRows(rows);
});
const getAvailableRelatedProducts = () =>
  products.filter((item) => getProductRouteId(item) !== productRouteId);
const getRelatedProducts = (randomize = false) => {
  const availableProducts = getAvailableRelatedProducts();
  const sameCategoryProducts = availableProducts.filter((item) => item.category === product.category);
  const sameCategoryProduct = randomize
    ? sameCategoryProducts[Math.floor(Math.random() * sameCategoryProducts.length)]
    : sameCategoryProducts[0];

  if (!sameCategoryProduct) {
    return randomize
      ? getRandomProductsByUniqueCategories(3, availableProducts)
      : getProductsByUniqueCategories(3, availableProducts);
  }

  const otherCategoryProducts = availableProducts.filter((item) => item.category !== product.category);
  const remainingProducts = randomize
    ? getRandomProductsByUniqueCategories(2, otherCategoryProducts)
    : getProductsByUniqueCategories(2, otherCategoryProducts);

  return [sameCategoryProduct, ...remainingProducts];
};
const relatedProducts = ref(getRelatedProducts());

onMounted(() => {
  relatedProducts.value = getRelatedProducts(true);
});

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
      path: getProductPath(product),
      image: defaultImage,
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
      <NuxtLink :to="productsHref">{{ copy.backToProducts }}</NuxtLink>
      <span>/</span>
      <span>{{ productName }}</span>
    </nav>

    <section class="product-shell">
      <div class="product-gallery">
        <div class="product-main-image">
          <img
            :src="selectedImage"
            :alt="productName"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <div class="gallery-strip mobile-gallery-strip" aria-label="Product image preview">
          <button
            v-for="(image, index) in productImages"
            :key="image.full"
            type="button"
            :class="{ active: selectedImage === image.full }"
            :aria-label="`${productName} ${index + 1}`"
            :aria-pressed="selectedImage === image.full"
            @click="selectedImage = image.full"
          >
            <img
              :src="image.preview"
              :alt="`${productName} ${index + 1}`"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </button>
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
          <span class="mobile-stock">{{ copy.stockTitle }}：{{ stockText }}</span>
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

        <div class="gallery-strip" aria-label="Product image preview">
          <button
            v-for="(image, index) in productImages"
            :key="image.full"
            type="button"
            :class="{ active: selectedImage === image.full }"
            :aria-label="`${productName} ${index + 1}`"
            :aria-pressed="selectedImage === image.full"
            @click="selectedImage = image.full"
          >
            <img
              :src="image.preview"
              :alt="`${productName} ${index + 1}`"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </button>
          <span>#{{ productRouteId }}</span>
          <span>{{ productTag }}</span>
        </div>
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
          <div v-for="spec in specRows" :key="spec.key">
            <dt>{{ spec.label }}</dt>
            <dd>{{ spec.value }}</dd>
          </div>
        </dl>
      </section>

      <section class="info-block wide">
        <h2>{{ copy.productDetailsTitle }}</h2>
        <p>{{ productDetails }}</p>
      </section>
    </section>

    <section v-if="relatedProducts.length" class="related-section">
      <h2>{{ copy.relatedTitle }}</h2>
      <div class="related-grid">
        <ProductCard
          v-for="item in relatedProducts"
          :key="getProductRouteId(item)"
          :item="item"
          image-loading="lazy"
          image-fetch-priority="low"
        />
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
  display: flex;
  min-height: 0;
}

.product-main-image {
  width: 100%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
}

.product-main-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.gallery-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 8px;
  margin-top: auto;
}

.mobile-gallery-strip {
  display: none;
}

.gallery-strip span:first-of-type {
  margin-left: auto;
}

.gallery-strip span {
  align-self: flex-end;
  justify-content: flex-end;
  text-align: right;
}

.gallery-strip button {
  width: 100px;
  height: 100px;
  padding: 0;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  opacity: 0.68;
  transition: border-color 160ms ease, opacity 160ms ease, transform 160ms ease;
}

.gallery-strip button:hover,
.gallery-strip button:focus-visible,
.gallery-strip button.active {
  border-color: rgba(255, 184, 222, 0.9);
  opacity: 1;
}

.gallery-strip button:hover {
  transform: translateY(-2px);
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
  display: flex;
  flex-direction: column;
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

.mobile-stock {
  display: none;
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
  grid-template-columns: 100px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
}

.purchase-meta dt {
  padding-top: 0.2em;
  color: #ffd8ee;
  font-size: 0.86rem;
}

.purchase-meta dd {
  line-height: 1.65;
  text-align: justify;
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

  .product-main-image img {
    aspect-ratio: 1 / 1.15;
    height: auto;
  }

  .product-gallery {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 68px;
    gap: 10px;
  }

  .product-summary > .gallery-strip {
    display: none;
  }

  .mobile-gallery-strip {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    align-self: stretch;
    margin-top: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .mobile-gallery-strip button {
    width: 68px;
    height: 68px;
    flex: 0 0 68px;
  }

  .price-panel {
    flex-wrap: wrap;
  }

  .purchase-meta div:nth-child(2) {
    display: none;
  }

  .mobile-stock {
    display: inline-flex;
    align-self: center;
    margin-left: auto;
    color: #ffd8ee;
    font-size: 0.82rem;
    font-weight: 800;
    text-align: right;
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

  .product-gallery {
    grid-template-columns: minmax(0, 1fr) 64px;
    gap: 8px;
  }

  .mobile-gallery-strip button {
    width: 64px;
    height: 64px;
    flex-basis: 64px;
    border-radius: 10px;
  }
}
</style>
