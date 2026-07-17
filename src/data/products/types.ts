import type { LocaleCode } from '../../i18n';

export type LocalizedText = Record<LocaleCode, string>;

export type ProductId = string;
export type ProductCategory =
  | 'body-pillows'
  | 'food'
  | 'plush'
  | 'badges'
  | 'acrylic-stands'
  | 'keychains'
  | 'ring-holders'
  | 'figures'
  | 'bandages'
  | 'card-skins'
  | 'rulers'
  | 'medals'
  | 'postcards'
  | 'books'
  | 'hair-accessories'
  | 'puzzles'
  | 'bookmarks'
  | 'red-envelopes'
  | 'yearly-decorations';
export type ProductCategoryCode = 'bp' | 'fd' | 'pl' | 'bd' | 'ad' | 'kc' | 'rh' | 'fg' | 'ba' | 'cs' | 'rl' | 'md' | 'pc' | 'bk' | 'ha' | 'pz' | 'bm' | 're' | 'yd';
export type ProductRouteId = `${ProductCategoryCode}/${ProductId}`;
export type ProductSort = 'default' | 'price-asc' | 'price-desc' | 'stock-desc' | 'stock-asc';

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
