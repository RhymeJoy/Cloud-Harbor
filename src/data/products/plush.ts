import { publicAsset } from '../../composables/usePublicAssets';
import type { LocalizedText, Product } from './types';

type LyingPlushItem = {
  id: string;
  imageCode: string;
  price: number;
  originalPrice: number;
  stock: number;
  character: LocalizedText;
};

const lyingPlushItems: LyingPlushItem[] = [
  {
    id: '01',
    imageCode: 'TS',
    price: 800,
    originalPrice: 900,
    stock: 1,
    character: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' }
  },
  {
    id: '02',
    imageCode: 'RD',
    price: 800,
    originalPrice: 900,
    stock: 1,
    character: { 'zh-TW': '雲寶', en: 'Rainbow Dash' }
  },
  {
    id: '03',
    imageCode: 'RR',
    price: 800,
    originalPrice: 900,
    stock: 1,
    character: { 'zh-TW': '珍奇', en: 'Rarity' }
  },
  {
    id: '04',
    imageCode: 'AJ',
    price: 800,
    originalPrice: 900,
    stock: 1,
    character: { 'zh-TW': '蘋果嘉兒', en: 'Applejack' }
  },
  {
    id: '05',
    imageCode: 'FS',
    price: 800,
    originalPrice: 900,
    stock: 1,
    character: { 'zh-TW': '柔柔', en: 'Fluttershy' }
  },
  {
    id: '06',
    imageCode: 'PP',
    price: 800,
    originalPrice: 900,
    stock: 2,
    character: { 'zh-TW': '碧琪', en: 'Pinkie Pie' }
  }
];

const localize = (text: LocalizedText, locale: keyof LocalizedText) => text[locale];

const createLyingPlushProduct = (item: LyingPlushItem): Product => {
  const characterZh = localize(item.character, 'zh-TW');
  const characterEn = localize(item.character, 'en');

  return {
    id: item.id,
    category: 'plush',
    price: item.price,
    originalPrice: item.originalPrice,
    stock: item.stock,
    images: [publicAsset(`products/Plush/${item.imageCode}-Lying-Plush-9in.svg`)],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': `${characterZh} 9吋趴姿布偶`,
      en: `${characterEn} 9-inch Lying Plush`
    },
    tag: item.character,
    description: {
      'zh-TW': `${characterZh} 9吋趴姿布偶，振光玩具出品，適合擺放、拍照與收藏。`,
      en: `${characterEn} 9-inch lying plush by Zhen Guang Toys for display, photos, and collecting.`
    },
    details: {
      'zh-TW': `9吋趴姿布偶，角色為${characterZh}，由振光玩具製作。柔軟趴姿造型適合放在桌面、床邊或收藏展示空間。`,
      en: `A 9-inch lying plush featuring ${characterEn}, made by Zhen Guang Toys. The soft pose works well on desks, bedsides, or collectible displays.`
    },
    shipping: {
      'zh-TW': '主要於活動現場販售與取貨。布偶類商品數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Plush quantities are limited and available while supplies last.'
    },
    badges: [
      item.character,
      { 'zh-TW': '9吋', en: '9-inch' },
      { 'zh-TW': '趴姿布偶', en: 'Lying Plush' },
      { 'zh-TW': '振光玩具', en: 'Zhen Guang Toys' }
    ],
    highlights: [
      {
        'zh-TW': `角色：${characterZh}。`,
        en: `Character: ${characterEn}.`
      },
      {
        'zh-TW': '振光玩具製作，9吋趴姿尺寸適合桌面與床邊擺放。',
        en: 'Made by Zhen Guang Toys in a 9-inch lying size for desk or bedside display.'
      },
      {
        'zh-TW': '每款角色庫存獨立計算，數量有限。',
        en: 'Each character has its own separate stock count and limited quantity.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '布偶', en: 'Plush' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '9吋趴姿布偶', en: '9-inch Lying Plush' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: item.character
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  };
};

export const plushProducts: Product[] = lyingPlushItems.map(createLyingPlushProduct);
