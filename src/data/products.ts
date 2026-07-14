import { publicAsset } from '../composables/usePublicAssets';
import type { LocaleCode } from '../i18n';

export type LocalizedText = Record<LocaleCode, string>;

export type ProductSectionCopy = {
  eyebrow: string;
  title: string;
  pricePrefix: string;
};

export type Product = {
  id: string;
  price: number;
  image: string;
  name: LocalizedText;
  tag: LocalizedText;
  description: LocalizedText;
};

export const productSectionCopy: Record<LocaleCode, ProductSectionCopy> = {
  'zh-TW': {
    eyebrow: 'PRODUCTS',
    title: '預計販售商品會統一整理在這裡，圖片皆放在 public/products。',
    pricePrefix: 'NT$'
  },
  en: {
    eyebrow: 'PRODUCTS',
    title: 'Planned products will be organized here, with images stored in public/products.',
    pricePrefix: 'NT$'
  }
};

export const localizeProductText = (text: LocalizedText, locale: LocaleCode) => text[locale] ?? text['zh-TW'];

export const products: Product[] = [
  {
    id: 'brandPolo',
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
    id: 'eventBrochure',
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
    id: 'canvasBag',
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
