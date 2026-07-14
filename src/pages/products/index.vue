<script setup lang="ts">
import { computed, ref } from 'vue';
import ProductCard from '../../components/ProductCard.vue';
import { routeHref } from '../../composables/useAppRoute';
import { createSiteOgMeta } from '../../composables/useSiteSeo';
import { useI18n } from '../../i18n';
import { productPageCopy } from '../../data/productContent';
import {
  formatProductCopy,
  localizeProductText,
  products,
  type ProductCategory,
  type ProductSort
} from '../../data/products';

const { locale, t } = useI18n();
const homeHref = routeHref();
const pageCopy = computed(() => productPageCopy[locale.value]);
const searchQuery = ref('');
const selectedCategory = ref<ProductCategory | 'all'>('all');
const sortMode = ref<ProductSort>('default');
const minPriceInput = ref('');
const maxPriceInput = ref('');
const normalizedSearch = computed(() => searchQuery.value.trim().toLowerCase());
const minPrice = computed(() => Number.parseInt(minPriceInput.value, 10));
const maxPrice = computed(() => Number.parseInt(maxPriceInput.value, 10));
const hasMinPrice = computed(() => Number.isFinite(minPrice.value));
const hasMaxPrice = computed(() => Number.isFinite(maxPrice.value));
const categoryOptions = computed(() => {
  const categories = Array.from(new Set(products.map((product) => product.category)));

  return categories.map((category) => {
    const matchingProduct = products.find((product) => product.category === category);

    return {
      category,
      count: products.filter((product) => product.category === category).length,
      label: matchingProduct ? localizeProductText(matchingProduct.tag, locale.value) : category
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
    const matchesCategory = selectedCategory.value === 'all' || product.category === selectedCategory.value;
    const matchesMinPrice = !hasMinPrice.value || product.price >= minPrice.value;
    const matchesMaxPrice = !hasMaxPrice.value || product.price <= maxPrice.value;
    const searchableText = [
      product.id,
      localizeProductText(product.name, locale.value),
      localizeProductText(product.tag, locale.value),
      localizeProductText(product.description, locale.value),
      localizeProductText(product.details, locale.value),
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
const resultText = computed(() => formatProductCopy(pageCopy.value.resultCount, { count: filteredProducts.value.length }));
const hasActiveFilters = computed(
  () =>
    normalizedSearch.value.length > 0 ||
    selectedCategory.value !== 'all' ||
    sortMode.value !== 'default' ||
    minPriceInput.value.trim().length > 0 ||
    maxPriceInput.value.trim().length > 0
);
const clearFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = 'all';
  sortMode.value = 'default';
  minPriceInput.value = '';
  maxPriceInput.value = '';
};

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
        <div class="shop-logo">CH</div>
        <div>
          <p class="shop-badge">{{ pageCopy.shopBadge }}</p>
          <h1>{{ pageCopy.shopName }}</h1>
          <p>{{ pageCopy.shopSubtitle }}</p>
        </div>
      </div>

      <label class="market-search" for="product-search">
        <span>{{ pageCopy.searchLabel }}</span>
        <input id="product-search" v-model="searchQuery" type="search" :placeholder="pageCopy.searchPlaceholder" />
        <button type="button">{{ pageCopy.searchButton }}</button>
      </label>
    </section>

    <section class="shop-intro">
      <p class="eyebrow">{{ pageCopy.eyebrow }}</p>
      <h2>{{ pageCopy.title }}</h2>
      <p>{{ pageCopy.description }}</p>
    </section>

    <div class="market-layout">
      <aside class="market-sidebar" :aria-label="pageCopy.sidebarTitle">
        <div class="sidebar-section">
          <h3>{{ pageCopy.sidebarTitle }}</h3>
          <div class="category-list" role="group" :aria-label="pageCopy.filterLabel">
            <button type="button" :class="{ active: selectedCategory === 'all' }" @click="selectedCategory = 'all'">
              <span>{{ pageCopy.allCategories }}</span>
              <span>{{ products.length }}</span>
            </button>
            <button
              v-for="option in categoryOptions"
              :key="option.category"
              type="button"
              :class="{ active: selectedCategory === option.category }"
              @click="selectedCategory = option.category"
            >
              <span>{{ option.label }}</span>
              <span>{{ option.count }}</span>
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
      </aside>

      <section class="market-main" :aria-label="pageCopy.title">
        <div class="market-toolbar">
          <div>
            <p>{{ resultText }}</p>
          </div>
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

        <div v-if="filteredProducts.length" class="products-grid">
          <ProductCard v-for="item in filteredProducts" :key="item.id" :item="item" />
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
  color: #ffffff;
  font-weight: 900;
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
  gap: 8px;
  align-items: center;
  padding: 8px;
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
  min-height: 42px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff7fd8, #7f6cff);
  color: #ffffff;
  padding: 0 18px;
  font-weight: 800;
}

.shop-intro {
  padding: 4px 2px;
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
  display: grid;
  gap: 18px;
  padding: 16px;
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
  justify-content: space-between;
  gap: 12px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  background: rgba(8, 12, 35, 0.42);
}

.market-toolbar p {
  color: #d8d6f7;
  font-size: 0.9rem;
}

.sort-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.sort-tabs button {
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

  .market-sidebar {
    position: static;
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
    border-radius: 18px;
  }

  .market-search button {
    width: 100%;
  }
}
</style>
