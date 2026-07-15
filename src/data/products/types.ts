import type { LocaleCode } from '../../i18n';

export type LocalizedText = Record<LocaleCode, string>;

export type ProductId = string;
export type ProductCategory = 'body-pillows' | 'yearly-decorations' | 'red-envelopes';
export type ProductCategoryCode = 'bp' | 'yd' | 're';
export type ProductRouteId = `${ProductCategoryCode}/${ProductId}`;
export type ProductSort = 'default' | 'price-asc' | 'price-desc';

export type ProductSpec = {
  label: LocalizedText;
  value: LocalizedText;
};

export type Product = {
  id: ProductId;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  stock: number;
  thumbnail?: string;
  images: [string, ...string[]];
  location: LocalizedText;
  name: LocalizedText;
  tag: LocalizedText;
  description: LocalizedText;
  details: LocalizedText;
  shipping: LocalizedText;
  badges: LocalizedText[];
  highlights: LocalizedText[];
  specs: ProductSpec[];
};
