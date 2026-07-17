<script setup lang="ts">
import { computed, ref } from 'vue';
import ProductCard from '../../components/ProductCard.vue';
import { routeHref } from '../../composables/useAppRoute';
import { useProductFilters } from '../../composables/useProductFilters';
import { publicAsset } from '../../composables/usePublicAssets';
import { createSiteOgMeta } from '../../composables/useSiteSeo';
import { useI18n } from '../../i18n';
import {
  getProductRouteId,
  localizeProductText,
  productCategoryLabels,
  products,
  type ProductCategory
} from '../../data/products';

const { locale, t } = useI18n();
const homeHref = routeHref();
const shopLogoSrc = publicAsset('favicon.ico');
const pageCopy = computed(() => ({
  eyebrow: t('products.eyebrow'),
  title: t('products.title'),
  description: t('products.description'),
  backHome: t('products.backHome'),
  shopName: t('products.shopName'),
  shopSubtitle: t('products.shopSubtitle'),
  shopBadge: t('products.shopBadge'),
  searchLabel: t('products.searchLabel'),
  searchPlaceholder: t('products.searchPlaceholder'),
  searchButton: t('products.searchButton'),
  filterLabel: t('products.filterLabel'),
  sidebarTitle: t('products.sidebarTitle'),
  allCategories: t('products.allCategories'),
  priceRangeLabel: t('products.priceRangeLabel'),
  minPricePlaceholder: t('products.minPricePlaceholder'),
  maxPricePlaceholder: t('products.maxPricePlaceholder'),
  sortLabel: t('products.sortLabel'),
  sortDefault: t('products.sortDefault'),
  sortPriceAsc: t('products.sortPriceAsc'),
  sortPriceDesc: t('products.sortPriceDesc'),
  clearFilters: t('products.clearFilters'),
  detailButton: t('products.detailButton'),
  emptyTitle: t('products.emptyTitle'),
  emptyText: t('products.emptyText')
}));
const {
  searchQuery,
  selectedCategory,
  sortMode,
  minPriceInput,
  maxPriceInput,
  clearProductFilters
} = useProductFilters();
const normalizedSearch = computed(() => searchQuery.value.trim().toLowerCase());
const minPrice = computed(() => Number.parseInt(minPriceInput.value, 10));
const maxPrice = computed(() => Number.parseInt(maxPriceInput.value, 10));
const hasMinPrice = computed(() => Number.isFinite(minPrice.value));
const hasMaxPrice = computed(() => Number.isFinite(maxPrice.value));
const categoryGroups: Partial<Record<ProductCategory, ProductCategory[]>> = {
  badges: ['badges', 'hair-accessories']
};
const groupedCategories = new Set(
  Object.values(categoryGroups).flatMap((categories) => categories.slice(1))
);
const getCategoryFilterKey = (category: ProductCategory) => {
  for (const [groupCategory, categories] of Object.entries(categoryGroups) as Array<
    [ProductCategory, ProductCategory[]]
  >) {
    if (categories.includes(category)) {
      return groupCategory;
    }
  }

  return category;
};
const getCategoryFilterCategories = (category: ProductCategory) => {
  const categoryKey = getCategoryFilterKey(category);

  return categoryGroups[categoryKey] ?? [categoryKey];
};
const isCategoryFilterActive = (category: ProductCategory) =>
  selectedCategory.value !== 'all' && getCategoryFilterKey(selectedCategory.value) === category;
const categoryOptions = computed(() => {
  const categories = (Object.keys(productCategoryLabels) as ProductCategory[]).filter(
    (category) => !groupedCategories.has(category)
  );

  return categories.map((category) => {
    const matchingCategories = getCategoryFilterCategories(category);

    return {
      category,
      count: products.filter((product) => matchingCategories.includes(product.category)).length,
      label: localizeProductText(productCategoryLabels[category], locale.value)
    };
  });
});
const sortOptions = computed(() => [
  { value: 'default' as const, label: pageCopy.value.sortDefault },
  { value: 'price-asc' as const, label: pageCopy.value.sortPriceAsc },
  { value: 'price-desc' as const, label: pageCopy.value.sortPriceDesc }
]);
const filteredProducts = computed(() => {
  const filtered = products.filter((product) => {
    const selectedCategories =
      selectedCategory.value === 'all'
        ? null
        : getCategoryFilterCategories(selectedCategory.value);
    const matchesCategory = !selectedCategories || selectedCategories.includes(product.category);
    const matchesMinPrice = !hasMinPrice.value || product.price >= minPrice.value;
    const matchesMaxPrice = !hasMaxPrice.value || product.price <= maxPrice.value;
    const searchableText = [
      getProductRouteId(product),
      ...Object.values(product.name),
      ...Object.values(product.tag),
      ...Object.values(product.description),
      ...Object.values(product.details),
      ...Object.values(product.location),
      ...Object.values(product.shipping),
      ...product.badges.flatMap((badge) => Object.values(badge)),
      ...product.highlights.flatMap((highlight) => Object.values(highlight)),
      ...product.specs.flatMap((spec) => [
        ...Object.values(spec.label),
        ...Object.values(spec.value)
      ]),
      String(product.price)
    ]
      .join(' ')
      .toLowerCase();
    const matchesSearch = !normalizedSearch.value || searchableText.includes(normalizedSearch.value);

    return matchesCategory && matchesMinPrice && matchesMaxPrice && matchesSearch;
  });

  return [...filtered].sort((current, next) => {
    if (sortMode.value === 'price-asc') {
      return current.price - next.price;
    }

    if (sortMode.value === 'price-desc') {
      return next.price - current.price;
    }

    return products.indexOf(current) - products.indexOf(next);
  });
});
const resultText = computed(() => t('products.resultCount', { count: filteredProducts.value.length }));
const areMobileFiltersOpen = ref(false);
const hasActiveFilters = computed(
  () =>
    normalizedSearch.value.length > 0 ||
    selectedCategory.value !== 'all' ||
    sortMode.value !== 'default' ||
    minPriceInput.value.trim().length > 0 ||
    maxPriceInput.value.trim().length > 0
);
const clearFilters = clearProductFilters;

useHead(() => {
  const title = `${pageCopy.value.title} | ${t('site.title')}`;
  const description = pageCopy.value.description;

  return {
    title,
    meta: [
      { key: 'description', name: 'description', content: description },
      ...createSiteOgMeta({
        title,
        description,
        locale: locale.value,
        path: 'products/',
        imageAlt: pageCopy.value.shopName
      })
    ]
  };
});
</script>

<template>
  <main class="products-page">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a :href="homeHref">{{ pageCopy.backHome }}</a>
      <span>/</span>
      <span>{{ pageCopy.title }}</span>
    </nav>

    <section class="shop-header">
      <div class="shop-identity">
        <div class="shop-logo">
          <img :src="shopLogoSrc" alt="" decoding="async" fetchpriority="low" />
        </div>
        <div>
          <p class="shop-badge">{{ pageCopy.shopBadge }}</p>
          <h1>{{ pageCopy.shopName }}</h1>
          <p>{{ pageCopy.shopSubtitle }}</p>
        </div>
      </div>

      <section class="shop-intro">
        <p class="eyebrow">{{ pageCopy.eyebrow }}</p>
        <h2>{{ pageCopy.title }}</h2>
        <p>{{ pageCopy.description }}</p>
      </section>
    </section>

    <div class="market-layout">
      <aside class="market-sidebar" :aria-label="pageCopy.sidebarTitle">
        <button
          class="filter-toggle"
          type="button"
          :class="{ active: hasActiveFilters }"
          :aria-expanded="areMobileFiltersOpen"
          aria-controls="product-filter-panel"
          @click="areMobileFiltersOpen = !areMobileFiltersOpen"
        >
          <span>{{ pageCopy.sidebarTitle }}</span>
          <span class="filter-toggle-icon" aria-hidden="true"></span>
        </button>

        <div id="product-filter-panel" class="filter-panel" :class="{ open: areMobileFiltersOpen }">
          <div class="filter-panel-inner">
            <div class="sidebar-section">
              <div class="category-list" role="group" :aria-label="pageCopy.filterLabel">
                <button type="button" :class="{ active: selectedCategory === 'all' }" @click="selectedCategory = 'all'">
                  <span>{{ pageCopy.allCategories }}</span>
                  <span>{{ products.length }}</span>
                </button>
                <button
                  v-for="option in categoryOptions"
                  :key="option.category"
                  type="button"
                  :class="{ active: isCategoryFilterActive(option.category) }"
                  @click="selectedCategory = option.category"
                >
                  <span>{{ option.label }}</span>
                  <span>{{ option.count }}</span>
                </button>
              </div>
            </div>

            <div class="sidebar-section">
              <h3>{{ pageCopy.sortLabel }}</h3>
              <div class="sort-tabs" role="group" :aria-label="pageCopy.sortLabel">
                <button
                  v-for="option in sortOptions"
                  :key="option.value"
                  type="button"
                  :class="{ active: sortMode === option.value }"
                  @click="sortMode = option.value"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>

            <div class="sidebar-section">
              <h3>{{ pageCopy.priceRangeLabel }}</h3>
              <div class="price-range">
                <input v-model="minPriceInput" type="number" min="0" inputmode="numeric" :placeholder="pageCopy.minPricePlaceholder" />
                <span>-</span>
                <input v-model="maxPriceInput" type="number" min="0" inputmode="numeric" :placeholder="pageCopy.maxPricePlaceholder" />
              </div>
            </div>

            <button v-if="hasActiveFilters" class="reset-button" type="button" @click="clearFilters">
              {{ pageCopy.clearFilters }}
            </button>
          </div>
        </div>
      </aside>

      <section class="market-main" :aria-label="pageCopy.title">
        <div class="market-toolbar">
          <label class="market-search" for="product-search">
            <span>{{ pageCopy.searchLabel }}</span>
            <input id="product-search" v-model="searchQuery" type="search" :placeholder="pageCopy.searchPlaceholder" />
            <button type="button">{{ pageCopy.searchButton }}</button>
          </label>
          <div class="toolbar-status">
            <p>{{ resultText }}</p>
          </div>
        </div>

        <div v-if="filteredProducts.length" class="products-grid">
          <ProductCard v-for="item in filteredProducts" :key="`${item.category}/${item.id}`" :item="item" />
        </div>
        <div v-else class="empty-state">
          <h2>{{ pageCopy.emptyTitle }}</h2>
          <p>{{ pageCopy.emptyText }}</p>
          <button type="button" @click="clearFilters">{{ pageCopy.clearFilters }}</button>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.products-page {
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
  font-weight: 700;
}

.shop-header {
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(280px, 1.1fr);
  gap: 18px;
  align-items: center;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 28px;
  background:
    linear-gradient(160deg, rgba(255, 127, 216, 0.16), rgba(127, 108, 255, 0.18)),
    rgba(8, 12, 35, 0.78);
  box-shadow: 0 22px 55px rgba(2, 4, 14, 0.35);
  backdrop-filter: blur(18px);
}

.shop-identity {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #ffffff;
}

.shop-logo {
  display: grid;
  flex: 0 0 64px;
  width: 64px;
  height: 64px;
  place-items: center;
  border: 2px solid rgba(255, 255, 255, 0.72);
  border-radius: 50%;
  background: linear-gradient(135deg, #ff7fd8, #7f6cff);
}

.shop-logo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.shop-badge,
.eyebrow,
h1,
h2,
h3,
p {
  margin: 0;
}

.shop-badge {
  display: inline-flex;
  margin-bottom: 4px;
  padding: 3px 7px;
  border-radius: 999px;
  background: rgba(255, 184, 222, 0.18);
  color: #ffe0f1;
  font-size: 0.74rem;
  font-weight: 800;
}

h1 {
  font-size: clamp(1.35rem, 2.3vw, 2.1rem);
  line-height: 1.15;
}

.shop-identity p:not(.shop-badge) {
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.82);
}

.market-search {
  display: grid;
  grid-template-columns: 1fr auto;
  flex: 1 1 360px;
  gap: 8px;
  align-items: center;
  min-width: 240px;
  max-width: none;
  padding: 2px 8px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
}

.market-search span {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.market-search input {
  min-height: 42px;
  min-width: 0;
  border: 0;
  background: transparent;
  color: #ffffff;
  padding: 0 10px;
  outline: 0;
}

.market-search input::placeholder,
.price-range input::placeholder {
  color: rgba(216, 214, 247, 0.62);
}

.market-search button,
.reset-button,
.empty-state button {
  min-height: 35px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff7fd8, #7f6cff);
  color: #ffffff;
  padding: 0 20px;
  font-weight: 800;
}

.shop-intro {
  display: grid;
  align-content: center;
  justify-items: center;
  justify-self: center;
  width: min(100%, 620px);
  padding: 4px 2px;
  text-align: center;
}

.eyebrow {
  margin-bottom: 6px;
  color: #ffb8de;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.28em;
}

.shop-intro h2 {
  margin-bottom: 6px;
  color: #ffffff;
  font-size: clamp(1.6rem, 2.4vw, 2.4rem);
}

.shop-intro p {
  max-width: 760px;
  color: #d8d6f7;
}

.market-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
}

.market-sidebar,
.market-main {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  color: #f7f3ff;
  backdrop-filter: blur(14px);
}

.market-sidebar {
  padding: 16px;
}

.filter-toggle {
  display: none;
}

.filter-panel-inner {
  display: grid;
  gap: 18px;
}

.sidebar-section {
  display: grid;
  gap: 10px;
}

.sidebar-section h3 {
  color: #ffffff;
  font-size: 0.95rem;
}

.category-list {
  display: grid;
  gap: 6px;
}

.category-list button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  color: #d8d6f7;
  padding: 0 10px;
  text-align: left;
}

.category-list button:hover,
.category-list button.active {
  border-color: rgba(255, 184, 222, 0.2);
  background: rgba(255, 184, 222, 0.16);
  color: #ffffff;
  font-weight: 800;
}

.price-range {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 6px;
  align-items: center;
}

.price-range input {
  min-width: 0;
  min-height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(8, 12, 35, 0.46);
  color: #ffffff;
  padding: 0 8px;
}

.reset-button {
  width: 100%;
}

.market-main {
  display: grid;
  gap: 14px;
  padding: 14px;
}

.market-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  background: rgba(8, 12, 35, 0.42);
}

.toolbar-status {
  flex: 0 0 auto;
}

.market-toolbar p {
  color: #d8d6f7;
  font-size: 0.9rem;
}

.sort-tabs {
  display: grid;
  gap: 6px;
}

.sort-tabs button {
  width: 100%;
  min-height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #ffd8ee;
  padding: 0 12px;
  font-weight: 700;
}

.sort-tabs button.active {
  border-color: transparent;
  background: linear-gradient(135deg, #ff7fd8, #7f6cff);
  color: #ffffff;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}

.empty-state {
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 48px 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  background: rgba(8, 12, 35, 0.58);
  color: #d8d6f7;
  text-align: center;
}

.empty-state h2 {
  color: #ffffff;
}

@media (max-width: 900px) {
  .shop-header,
  .market-layout {
    grid-template-columns: 1fr;
  }

  .shop-intro {
    width: min(100%, 620px);
  }

  .market-sidebar {
    position: static;
  }

  .filter-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 46px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    background: rgba(8, 12, 35, 0.42);
    color: #ffffff;
    padding: 0 14px;
    font-weight: 900;
  }

  .filter-toggle.active {
    border-color: rgba(255, 184, 222, 0.3);
    background: rgba(255, 184, 222, 0.14);
  }

  .filter-toggle-icon {
    width: 10px;
    height: 10px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg) translateY(-2px);
    transition: transform 0.18s ease;
  }

  .filter-toggle[aria-expanded='true'] .filter-toggle-icon {
    transform: rotate(225deg) translateY(-2px);
  }

  .filter-panel {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    visibility: hidden;
    transition: grid-template-rows 0.22s ease, opacity 0.18s ease, visibility 0.22s ease;
  }

  .filter-panel.open {
    grid-template-rows: 1fr;
    margin-top: 14px;
    opacity: 1;
    visibility: visible;
  }

  .filter-panel-inner {
    min-height: 0;
    overflow: hidden;
  }
}

@media (max-width: 640px) {
  .shop-header,
  .market-sidebar,
  .market-main {
    padding: 18px;
  }

  .shop-identity {
    align-items: flex-start;
  }

  .shop-logo {
    flex-basis: 52px;
    width: 52px;
    height: 52px;
  }

  .market-search {
    grid-template-columns: 1fr;
    min-width: 0;
    max-width: none;
    border-radius: 18px;
  }

  .market-search button {
    width: 100%;
  }
}
</style>
