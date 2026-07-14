<script setup lang="ts">
import { computed, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import { routeHref } from '../composables/useAppRoute';
import { useI18n } from '../i18n';
import {
  formatProductCopy,
  localizeProductText,
  productPageCopy,
  products,
  type ProductCategory,
  type ProductSort
} from '../data/products';

const { locale } = useI18n();
const homeHref = routeHref();
const pageCopy = computed(() => productPageCopy[locale.value]);
const searchQuery = ref('');
const selectedCategory = ref<ProductCategory | 'all'>('all');
const sortMode = ref<ProductSort>('default');
const normalizedSearch = computed(() => searchQuery.value.trim().toLowerCase());
const categoryOptions = computed(() => {
  const categories = Array.from(new Set(products.map((product) => product.category)));

  return categories.map((category) => {
    const matchingProduct = products.find((product) => product.category === category);

    return {
      category,
      label: matchingProduct ? localizeProductText(matchingProduct.tag, locale.value) : category
    };
  });
});
const filteredProducts = computed(() => {
  const filtered = products.filter((product) => {
    const matchesCategory = selectedCategory.value === 'all' || product.category === selectedCategory.value;
    const searchableText = [
      product.id,
      localizeProductText(product.name, locale.value),
      localizeProductText(product.tag, locale.value),
      localizeProductText(product.description, locale.value),
      String(product.price)
    ]
      .join(' ')
      .toLowerCase();
    const matchesSearch = !normalizedSearch.value || searchableText.includes(normalizedSearch.value);

    return matchesCategory && matchesSearch;
  });

  return [...filtered].sort((current, next) => {
    if (sortMode.value === 'price-asc') {
      return current.price - next.price;
    }

    if (sortMode.value === 'price-desc') {
      return next.price - current.price;
    }

    if (sortMode.value === 'name-asc') {
      return localizeProductText(current.name, locale.value).localeCompare(localizeProductText(next.name, locale.value), locale.value);
    }

    return products.indexOf(current) - products.indexOf(next);
  });
});
const resultText = computed(() => formatProductCopy(pageCopy.value.resultCount, { count: filteredProducts.value.length }));
const hasActiveFilters = computed(() => normalizedSearch.value.length > 0 || selectedCategory.value !== 'all' || sortMode.value !== 'default');
const clearFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = 'all';
  sortMode.value = 'default';
};
</script>

<template>
  <main class="products-page">
    <a class="back-link" :href="homeHref">{{ pageCopy.backHome }}</a>

    <header class="products-header">
      <p class="eyebrow">{{ pageCopy.eyebrow }}</p>
      <h1>{{ pageCopy.title }}</h1>
      <p>{{ pageCopy.description }}</p>
    </header>

    <section class="product-tools" :aria-label="pageCopy.filterLabel">
      <label class="search-field" for="product-search">
        <span>{{ pageCopy.searchLabel }}</span>
        <input id="product-search" v-model="searchQuery" type="search" :placeholder="pageCopy.searchPlaceholder" />
      </label>

      <div class="category-filter" role="group" :aria-label="pageCopy.filterLabel">
        <button type="button" :class="{ active: selectedCategory === 'all' }" @click="selectedCategory = 'all'">
          {{ pageCopy.allCategories }}
        </button>
        <button
          v-for="option in categoryOptions"
          :key="option.category"
          type="button"
          :class="{ active: selectedCategory === option.category }"
          @click="selectedCategory = option.category"
        >
          {{ option.label }}
        </button>
      </div>

      <label class="sort-field" for="product-sort">
        <span>{{ pageCopy.sortLabel }}</span>
        <select id="product-sort" v-model="sortMode">
          <option value="default">{{ pageCopy.sortDefault }}</option>
          <option value="price-asc">{{ pageCopy.sortPriceAsc }}</option>
          <option value="price-desc">{{ pageCopy.sortPriceDesc }}</option>
          <option value="name-asc">{{ pageCopy.sortNameAsc }}</option>
        </select>
      </label>
    </section>

    <div class="product-results">
      <p>{{ resultText }}</p>
      <button v-if="hasActiveFilters" type="button" @click="clearFilters">{{ pageCopy.clearFilters }}</button>
    </div>

    <div v-if="filteredProducts.length" class="products-grid">
      <ProductCard v-for="item in filteredProducts" :key="item.id" :item="item" />
    </div>
    <div v-else class="empty-state">
      <h2>{{ pageCopy.emptyTitle }}</h2>
      <p>{{ pageCopy.emptyText }}</p>
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

.product-tools {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) auto minmax(180px, 220px);
  gap: 14px;
  align-items: end;
  margin-bottom: 16px;
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.search-field,
.sort-field {
  display: grid;
  gap: 6px;
}

.search-field span,
.sort-field span {
  color: #ffb8de;
  font-size: 0.78rem;
  font-weight: 700;
}

.search-field input,
.sort-field select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  background: rgba(8, 12, 35, 0.72);
  color: #fff;
  padding: 0 12px;
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.category-filter button,
.product-results button {
  min-height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #ffd8ee;
  padding: 0 14px;
  font-weight: 700;
  transition: transform 0.2s ease, background 0.2s ease;
}

.category-filter button:hover,
.product-results button:hover {
  transform: translateY(-1px);
  background: rgba(255, 184, 222, 0.16);
}

.category-filter button.active {
  background: rgba(255, 184, 222, 0.22);
  color: #fff;
}

.product-results {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  color: #d8d6f7;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.empty-state {
  padding: 32px 0;
  color: #d8d6f7;
}

.empty-state h2 {
  margin: 0 0 8px;
  color: #fff;
  font-size: 1.35rem;
}

@media (max-width: 900px) {
  .product-tools {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
