import type { LocaleCode } from '../i18n';
import { badgeProducts } from './products/badges';
import { bookmarkProducts } from './products/bookmarks';
import { bookProducts } from './products/books';
import { bodyPillows } from './products/bodyPillows';
import { foodProducts } from './products/food';
import { hairAccessoryProducts } from './products/hairAccessories';
import { plushProducts } from './products/plush';
import { puzzleProducts } from './products/puzzles';
import { redEnvelopes } from './products/redEnvelopes';
import { yearlyDecorations } from './products/yearlyDecorations';
import type {
  LocalizedText,
  Product,
  ProductCategory,
  ProductCategoryCode,
  ProductId,
  ProductSpec,
  ProductRouteId
} from './products/types';

export type {
  LocalizedText,
  Product,
  ProductCategory,
  ProductCategoryCode,
  ProductId,
  ProductRouteId,
  ProductSort,
  ProductSpec
} from './products/types';

export const localizeProductText = (text: LocalizedText, locale: LocaleCode) =>
  text[locale] ?? text['zh-TW'];

export const localizeProductTagText = (text: LocalizedText, locale: LocaleCode) =>
  localizeProductText(text, locale);

export const localizeProductSpecValue = (spec: ProductSpec, locale: LocaleCode) =>
  localizeProductText(spec.value, locale);

export const formatProductCopy = (text: string, values: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));

const generatedThumbnailExtensions = /\.(avif|webp|png|jpe?g)(?:[?#].*)?$/i;

export const getProductImageThumbnail = (image: string) => {
  if (!generatedThumbnailExtensions.test(image) || !image.includes('/products/')) {
    return image;
  }

  return image.replace('/products/', '/products/_thumbnails/');
};

export const getProductThumbnail = (product: Pick<Product, 'images' | 'thumbnail'>) =>
  product.thumbnail ?? getProductImageThumbnail(product.images[0]);

export const productCategoryLabels: Record<ProductCategory, LocalizedText> = {
  'body-pillows': {
    'zh-TW': '抱枕',
    en: 'Body Pillows'
  },
  food: {
    'zh-TW': '食物',
    en: 'Food'
  },
  plush: {
    'zh-TW': '布偶',
    en: 'Plush'
  },
  badges: {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  'acrylic-stands': {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  keychains: {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  'ring-holders': {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  figures: {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  bandages: {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  'card-skins': {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  stickers: {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  rulers: {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  medals: {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  postcards: {
    'zh-TW': '書籍',
    en: 'Books'
  },
  books: {
    'zh-TW': '書籍',
    en: 'Books'
  },
  'hair-accessories': {
    'zh-TW': '小物',
    en: 'Small Goods'
  },
  puzzles: {
    'zh-TW': '拼圖',
    en: 'Puzzles'
  },
  bookmarks: {
    'zh-TW': '書籤',
    en: 'Bookmarks'
  },
  'red-envelopes': {
    'zh-TW': '紅包',
    en: 'Red Envelopes'
  },
  'yearly-decorations': {
    'zh-TW': '年飾',
    en: 'Yearly Decorations'
  }
};

export const productCategoryCodes: Record<ProductCategory, ProductCategoryCode> = {
  'body-pillows': 'bp',
  food: 'fd',
  plush: 'pl',
  badges: 'bd',
  'acrylic-stands': 'ad',
  keychains: 'kc',
  'ring-holders': 'rh',
  figures: 'fg',
  bandages: 'ba',
  'card-skins': 'cs',
  stickers: 'st',
  rulers: 'rl',
  medals: 'md',
  postcards: 'pc',
  books: 'bk',
  'hair-accessories': 'ha',
  puzzles: 'pz',
  bookmarks: 'bm',
  'red-envelopes': 're',
  'yearly-decorations': 'yd'
};

export const getProductRouteId = (product: Pick<Product, 'category' | 'id'>): ProductRouteId =>
  `${productCategoryCodes[product.category]}/${product.id}`;

export const getProductPath = (product: Pick<Product, 'category' | 'id'>) =>
  `/products/${getProductRouteId(product)}`;

export const isProductSoldOut = (product: Pick<Product, 'originalPrice'>) =>
  typeof product.originalPrice === 'string';

export const products: Product[] = [
  ...bodyPillows,
  ...foodProducts,
  ...plushProducts,
  ...badgeProducts,
  ...bookProducts,
  ...hairAccessoryProducts,
  ...puzzleProducts,
  ...bookmarkProducts,
  ...redEnvelopes,
  ...yearlyDecorations
];

export const featuredProductIds: ProductRouteId[] = ['bp/02', 'bp/03', 'bp/04'];

export const productDetailRoutes = products.map(getProductPath);

export const getProductById = (categoryCode: ProductCategoryCode, id: ProductId) =>
  products.find(
    (product) => productCategoryCodes[product.category] === categoryCode && product.id === id
  );

export const getProductsByIds = (ids: readonly ProductRouteId[]) => {
  const idSet = new Set(ids);

  return products.filter((product) => idSet.has(getProductRouteId(product)));
};

const shuffleProducts = (sourceProducts: readonly Product[]) => {
  const shuffledProducts = [...sourceProducts];

  for (let index = shuffledProducts.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const currentProduct = shuffledProducts[index]!;
    const randomProduct = shuffledProducts[randomIndex]!;

    shuffledProducts[index] = randomProduct;
    shuffledProducts[randomIndex] = currentProduct;
  }

  return shuffledProducts;
};

export const getProductsByUniqueCategories = (
  count = featuredProductIds.length,
  sourceProducts: readonly Product[] = products
) => {
  const selectedCategories = new Set<ProductCategory>();
  const selectedProducts: Product[] = [];

  for (const product of sourceProducts) {
    if (selectedCategories.has(product.category)) {
      continue;
    }

    selectedProducts.push(product);
    selectedCategories.add(product.category);

    if (selectedProducts.length >= count) {
      break;
    }
  }

  return selectedProducts;
};

export const getRandomProductsByUniqueCategories = (
  count = featuredProductIds.length,
  sourceProducts: readonly Product[] = products
) => getProductsByUniqueCategories(count, shuffleProducts(sourceProducts));

export const getAvailableProducts = (sourceProducts: readonly Product[] = products) =>
  sourceProducts.filter((product) => !isProductSoldOut(product));

export const getRandomFeaturedProducts = (count = featuredProductIds.length) =>
  getRandomProductsByUniqueCategories(count, getAvailableProducts());
