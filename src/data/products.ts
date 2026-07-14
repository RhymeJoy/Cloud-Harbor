import { publicAsset } from '../composables/usePublicAssets';
import type { LocaleCode } from '../i18n';

export type LocalizedText = Record<LocaleCode, string>;

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
  searchLabel: string;
  searchPlaceholder: string;
  filterLabel: string;
  allCategories: string;
  sortLabel: string;
  sortDefault: string;
  sortPriceAsc: string;
  sortPriceDesc: string;
  sortNameAsc: string;
  resultCount: string;
  clearFilters: string;
  emptyTitle: string;
  emptyText: string;
};

export type ProductId = string;
export type ProductCategory = 'apparel' | 'print' | 'merch';
export type ProductSort = 'default' | 'price-asc' | 'price-desc' | 'name-asc';

export type Product = {
  id: ProductId;
  category: ProductCategory;
  price: number;
  image: string;
  name: LocalizedText;
  tag: LocalizedText;
  description: LocalizedText;
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
    title: '商品頁',
    description: '這裡會集中整理雲港商行準備販售的商品。後續新增品項時，只要更新 products.ts 就能同步顯示在商品頁。',
    backHome: '回首頁',
    searchLabel: '搜尋',
    searchPlaceholder: '搜尋商品名稱、分類或編號',
    filterLabel: '分類',
    allCategories: '全部',
    sortLabel: '排序',
    sortDefault: '預設排序',
    sortPriceAsc: '價格低到高',
    sortPriceDesc: '價格高到低',
    sortNameAsc: '名稱 A-Z',
    resultCount: '顯示 {count} 件商品',
    clearFilters: '清除條件',
    emptyTitle: '沒有符合的商品',
    emptyText: '換個關鍵字或分類再試一次。'
  },
  en: {
    eyebrow: 'PRODUCTS',
    title: 'Products',
    description: 'This page gathers the products Cloud Harbor is preparing to sell. New items can be maintained from products.ts and shown here directly.',
    backHome: 'Back Home',
    searchLabel: 'Search',
    searchPlaceholder: 'Search by name, tag, or ID',
    filterLabel: 'Category',
    allCategories: 'All',
    sortLabel: 'Sort',
    sortDefault: 'Default',
    sortPriceAsc: 'Price: low to high',
    sortPriceDesc: 'Price: high to low',
    sortNameAsc: 'Name A-Z',
    resultCount: 'Showing {count} products',
    clearFilters: 'Clear',
    emptyTitle: 'No matching products',
    emptyText: 'Try another keyword or category.'
  }
};

export const localizeProductText = (text: LocalizedText, locale: LocaleCode) => text[locale] ?? text['zh-TW'];
export const formatProductCopy = (text: string, values: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));

export const showinmain: ProductId[] = ['01', '02', '03'];

export const products: Product[] = [
  {
    id: '01',
    category: 'apparel',
    price: 320,
    image: publicAsset('products/brand-polo.svg'),
    name: {
      'zh-TW': '品牌 Polo 衫',
      en: 'Brand Polo Shirt'
    },
    tag: {
      'zh-TW': '服飾',
      en: 'Apparel'
    },
    description: {
      'zh-TW': '適合日常識別、展場接待與團隊活動，版型俐落、穿著舒適。',
      en: 'A clean and comfortable team shirt for booth staff, events, and everyday brand use.'
    }
  },
  {
    id: '02',
    category: 'print',
    price: 180,
    image: publicAsset('products/event-brochure.svg'),
    name: {
      'zh-TW': '活動手冊',
      en: 'Event Brochure'
    },
    tag: {
      'zh-TW': '印刷',
      en: 'Print'
    },
    description: {
      'zh-TW': '整合品牌故事、流程與商品資訊，讓現場溝通更完整。',
      en: 'A compact printed guide for brand story, schedules, and product information.'
    }
  },
  {
    id: '03',
    category: 'merch',
    price: 450,
    image: publicAsset('products/canvas-bag.svg'),
    name: {
      'zh-TW': '訂製帆布袋',
      en: 'Custom Canvas Bag'
    },
    tag: {
      'zh-TW': '周邊',
      en: 'Merch'
    },
    description: {
      'zh-TW': '可承載文件、樣品與贈品，兼具實用性與品牌曝光。',
      en: 'A practical item for documents, samples, and gifts while keeping the brand visible.'
    }
  }
];

export const getProductsByIds = (ids: readonly ProductId[]) => {
  const idSet = new Set(ids);

  return products.filter((product) => idSet.has(product.id));
};
