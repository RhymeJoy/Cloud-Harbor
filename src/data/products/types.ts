import type { LocaleCode } from '../../i18n';

export type LocalizedText = Record<LocaleCode, string>;

export type ProductId = string;
export type ProductCategory =
  | 'body-pillows'
  | 'food'
  | 'plush'
  | 'badges'
  | 'books'
  | 'hair-accessories'
  | 'puzzles'
  | 'bookmarks'
  | 'red-envelopes'
  | 'yearly-decorations';
export type ProductCategoryCode = 'bp' | 'fd' | 'pl' | 'bd' | 'bk' | 'ha' | 'pz' | 'bm' | 're' | 'yd';
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
  stockText?: LocalizedText;
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
