import type { LocaleCode } from '../i18n';
import { badgeProducts } from './products/badges';
import { bookProducts } from './products/books';
import { bodyPillows } from './products/bodyPillows';
import { foodProducts } from './products/food';
import { plushProducts } from './products/plush';
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

const characterNameReplacements: Array<[string, string]> = [
  ['暮光閃閃', 'Twilight Sparkle'],
  ['雲寶', 'Rainbow Dash'],
  ['珍奇', 'Rarity'],
  ['蘋果嘉兒', 'Applejack'],
  ['柔柔', 'Fluttershy'],
  ['碧琪', 'Pinkie Pie'],
  ['穗龍', 'Spike'],
  ['六位主角', 'Mane 6'],
  ['六主角', 'Mane 6']
];

const normalizeProductCharacterNames = (value: string, locale: LocaleCode) => {
  if (locale !== 'zh-TW') {
    return value;
  }

  return characterNameReplacements.reduce(
    (currentValue, [zhName, enName]) => currentValue.replaceAll(zhName, enName),
    value
  );
};

export const localizeProductText = (text: LocalizedText, locale: LocaleCode) =>
  normalizeProductCharacterNames(text[locale] ?? text['zh-TW'], locale);

const productCharacterNames = new Set([
  'Mane 6',
  'My Little Pony Characters',
  'Twilight Sparkle',
  'Rainbow Dash',
  'Rarity',
  'Applejack',
  'Fluttershy',
  'Pinkie Pie',
  'Spike'
]);

const splitCharacterNames = (value: string) =>
  value
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean);

export const isProductCharacterText = (text: LocalizedText) => {
  const names = splitCharacterNames(text.en);

  return names.length > 0 && names.every((name) => productCharacterNames.has(name));
};

export const localizeProductTagText = (text: LocalizedText, locale: LocaleCode) =>
  isProductCharacterText(text) ? text.en : localizeProductText(text, locale);

export const localizeProductSpecValue = (spec: ProductSpec, locale: LocaleCode) =>
  spec.label.en.toLowerCase() === 'character' ? spec.value.en : localizeProductText(spec.value, locale);

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
    'zh-TW': '徽章',
    en: 'Badges'
  },
  books: {
    'zh-TW': '書籍',
    en: 'Books'
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
  'yearly-decorations': 'yd',
  'red-envelopes': 're',
  food: 'fd',
  plush: 'pl',
  badges: 'bd',
  books: 'bk'
};

export const getProductRouteId = (product: Pick<Product, 'category' | 'id'>): ProductRouteId =>
  `${productCategoryCodes[product.category]}/${product.id}`;

export const getProductPath = (product: Pick<Product, 'category' | 'id'>) =>
  `/products/${getProductRouteId(product)}`;

export const products: Product[] = [
  ...bodyPillows,
  ...foodProducts,
  ...plushProducts,
  ...badgeProducts,
  ...bookProducts,
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

export const getRandomFeaturedProducts = (count = featuredProductIds.length) =>
  getRandomProductsByUniqueCategories(count);
