import type { LocaleCode } from '../i18n';
import { bodyPillows } from './products/bodyPillows';
import { redEnvelopes } from './products/redEnvelopes';
import { yearlyDecorations } from './products/yearlyDecorations';
import type {
  LocalizedText,
  Product,
  ProductCategory,
  ProductCategoryCode,
  ProductId,
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
  'yearly-decorations': {
    'zh-TW': '年飾',
    en: 'Yearly Decorations'
  },
  'red-envelopes': {
    'zh-TW': '紅包',
    en: 'Red Envelopes'
  }
};

export const productCategoryCodes: Record<ProductCategory, ProductCategoryCode> = {
  'body-pillows': 'bp',
  'yearly-decorations': 'yd',
  'red-envelopes': 're'
};

export const getProductRouteId = (product: Pick<Product, 'category' | 'id'>): ProductRouteId =>
  `${productCategoryCodes[product.category]}/${product.id}`;

export const getProductPath = (product: Pick<Product, 'category' | 'id'>) =>
  `/products/${getProductRouteId(product)}`;

export const products: Product[] = [
  ...bodyPillows,
  ...yearlyDecorations,
  ...redEnvelopes
];

export const productDetailRoutes = products.map(getProductPath);

export const getProductById = (categoryCode: ProductCategoryCode, id: ProductId) =>
  products.find(
    (product) => productCategoryCodes[product.category] === categoryCode && product.id === id
  );

export const getProductsByIds = (ids: readonly ProductRouteId[]) => {
  const idSet = new Set(ids);

  return products.filter((product) => idSet.has(getProductRouteId(product)));
};
