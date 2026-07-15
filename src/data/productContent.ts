import type { LocaleCode } from '../i18n';
import type { ProductRouteId } from './products';

export type ProductSectionCopy = {
  eyebrow: string;
  title: string;
  pricePrefix: string;
};

export type ProductPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  backHome: string;
  shopName: string;
  shopSubtitle: string;
  shopBadge: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchButton: string;
  filterLabel: string;
  sidebarTitle: string;
  allCategories: string;
  priceRangeLabel: string;
  minPricePlaceholder: string;
  maxPricePlaceholder: string;
  sortLabel: string;
  sortDefault: string;
  sortPriceAsc: string;
  sortPriceDesc: string;
  resultCount: string;
  clearFilters: string;
  detailButton: string;
  emptyTitle: string;
  emptyText: string;
};

export type ProductDetailCopy = {
  backToProducts: string;
  storeBadge: string;
  stockTitle: string;
  stockLabel: string;
  productDetailsTitle: string;
  specsTitle: string;
  shippingTitle: string;
  highlightsTitle: string;
  relatedTitle: string;
  notFoundTitle: string;
  notFoundText: string;
};

export const productSectionCopy: Record<LocaleCode, ProductSectionCopy> = {
  'zh-TW': {
    eyebrow: 'PRODUCTS',
    title: '先挑三款準備中的商品放在這裡，讓你快速掌握雲港商行的攤位風格。',
    pricePrefix: 'NT$'
  },
  en: {
    eyebrow: 'PRODUCTS',
    title: 'A quick preview of three planned items, giving you a feel for Cloud Harbor before the booth opens.',
    pricePrefix: 'NT$'
  }
};

export const productPageCopy: Record<LocaleCode, ProductPageCopy> = {
  'zh-TW': {
    eyebrow: 'PRODUCTS',
    title: '雲港商品館',
    description: '用商城式版面整理雲港商行準備販售的商品，快速搜尋、篩選與查看詳細資訊。',
    backHome: '回首頁',
    shopName: 'Cloud Harbor 雲港商行',
    shopSubtitle: 'TWBC 現場販售準備中｜商品資訊會持續更新',
    shopBadge: '官方攤位',
    searchLabel: '搜尋',
    searchPlaceholder: '搜尋商品名稱、分類或編號',
    searchButton: '搜尋',
    filterLabel: '分類',
    sidebarTitle: '篩選商品',
    allCategories: '全部',
    priceRangeLabel: '價格區間',
    minPricePlaceholder: '最低',
    maxPricePlaceholder: '最高',
    sortLabel: '排序',
    sortDefault: '綜合',
    sortPriceAsc: '價格低到高',
    sortPriceDesc: '價格高到低',
    resultCount: '顯示 {count} 件商品',
    clearFilters: '清除條件',
    detailButton: '查看詳情',
    emptyTitle: '沒有符合的商品',
    emptyText: '換個關鍵字或分類再試一次。'
  },
  en: {
    eyebrow: 'PRODUCTS',
    title: 'Cloud Harbor Shop',
    description: 'A marketplace-style product page for Cloud Harbor items, with search, filters, sorting, and detail pages.',
    backHome: 'Back Home',
    shopName: 'Cloud Harbor',
    shopSubtitle: 'Preparing for TWBC booth sales. Product details will keep updating.',
    shopBadge: 'Official Booth',
    searchLabel: 'Search',
    searchPlaceholder: 'Search by name, tag, or ID',
    searchButton: 'Search',
    filterLabel: 'Category',
    sidebarTitle: 'Filters',
    allCategories: 'All',
    priceRangeLabel: 'Price Range',
    minPricePlaceholder: 'Min',
    maxPricePlaceholder: 'Max',
    sortLabel: 'Sort',
    sortDefault: 'Relevant',
    sortPriceAsc: 'Price: low to high',
    sortPriceDesc: 'Price: high to low',
    resultCount: 'Showing {count} products',
    clearFilters: 'Clear',
    detailButton: 'View Details',
    emptyTitle: 'No matching products',
    emptyText: 'Try another keyword or category.'
  }
};

export const productDetailCopy: Record<LocaleCode, ProductDetailCopy> = {
  'zh-TW': {
    backToProducts: '回商品館',
    storeBadge: 'Cloud Harbor 官方攤位',
    stockTitle: '庫存',
    stockLabel: '庫存 {count} 件',
    productDetailsTitle: '商品詳情',
    specsTitle: '商品規格',
    shippingTitle: '取貨與販售方式',
    highlightsTitle: '商品特色',
    relatedTitle: '你可能也會喜歡',
    notFoundTitle: '找不到商品',
    notFoundText: '這個商品可能尚未上架，請回商品館查看目前品項。'
  },
  en: {
    backToProducts: 'Back to Shop',
    storeBadge: 'Cloud Harbor Official Booth',
    stockTitle: 'Stock',
    stockLabel: '{count} in stock',
    productDetailsTitle: 'Product Details',
    specsTitle: 'Specifications',
    shippingTitle: 'Pickup and Sales',
    highlightsTitle: 'Highlights',
    relatedTitle: 'You May Also Like',
    notFoundTitle: 'Product not found',
    notFoundText: 'This product may not be listed yet. Please return to the shop.'
  }
};

export const showinmain: ProductRouteId[] = ['bp/02', 'bp/03', 'bp/04'];
