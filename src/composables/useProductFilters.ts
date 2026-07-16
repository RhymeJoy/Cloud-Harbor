import { useState } from '#imports';
import type { ProductCategory, ProductSort } from '../data/products';

export type ProductCategoryFilter = ProductCategory | 'all';

export const useProductFilters = () => {
  const searchQuery = useState('product-filters:search', () => '');
  const selectedCategory = useState<ProductCategoryFilter>('product-filters:category', () => 'all');
  const sortMode = useState<ProductSort>('product-filters:sort', () => 'default');
  const minPriceInput = useState('product-filters:min-price', () => '');
  const maxPriceInput = useState('product-filters:max-price', () => '');

  const clearProductFilters = () => {
    searchQuery.value = '';
    selectedCategory.value = 'all';
    sortMode.value = 'default';
    minPriceInput.value = '';
    maxPriceInput.value = '';
  };

  return {
    searchQuery,
    selectedCategory,
    sortMode,
    minPriceInput,
    maxPriceInput,
    clearProductFilters
  };
};
