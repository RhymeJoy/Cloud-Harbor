import { publicAsset } from '../../composables/usePublicAssets';
import type { Product } from './types';

const hairAccessoryDefaults = {
  category: 'hair-accessories',
  location: {
    'zh-TW': '攤位販售',
    en: 'Available at the Booth'
  },
  shipping: {
    'zh-TW': '主要於攤位現場販售與取貨，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  }
} satisfies Pick<Product, 'category' | 'location' | 'shipping'>;

export const hairAccessoryProducts: Product[] = [
  {
    id: '01',
    ...hairAccessoryDefaults,
    price: 30,
    stock: 10,
    stockText: {
      'zh-TW': '10 個',
      en: '10 available'
    },
    images: [
      publicAsset('products/HairAccessories/1.avif'),
      publicAsset('products/HairAccessories/3.avif')
    ],
    name: {
      'zh-TW': '彩虹小馬角色髮夾',
      en: 'My Little Pony Character Hair Clip'
    },
    tag: {
      'zh-TW': '角色髮夾',
      en: 'Character Hair Clip'
    },
    description: {
      'zh-TW': '繽紛配色的彩虹小馬角色髮夾，共有柔柔、珍奇、雲寶、碧琪與紫悅五款，可指定角色。',
      en: 'A colorful My Little Pony hair clip featuring Fluttershy, Rarity, Rainbow Dash, Pinkie Pie, or Twilight Sparkle. Characters can be selected.'
    },
    details: {
      'zh-TW': '髮夾帶有閃亮星星圖案，角色包含柔柔、珍奇、雲寶、碧琪與紫悅。每次購買為一個，可指定喜歡的角色。',
      en: 'Features sparkling star details with Fluttershy, Rarity, Rainbow Dash, Pinkie Pie, or Twilight Sparkle. Each purchase includes one hair clip, and the character can be selected.'
    },
    badges: [
      { 'zh-TW': '角色可選', en: 'Character Selectable' },
      { 'zh-TW': '角色造型', en: 'Character Design' }
    ],
    highlights: [
      {
        'zh-TW': '角色包含柔柔、珍奇、雲寶、碧琪與紫悅。',
        en: 'Characters include Fluttershy, Rarity, Rainbow Dash, Pinkie Pie, and Twilight Sparkle.'
      },
      {
        'zh-TW': '每次購買內含一個髮夾。',
        en: 'Each purchase includes one hair clip.'
      },
      {
        'zh-TW': '可從五款中指定喜歡的角色。',
        en: 'Choose your preferred character from five designs.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '髮飾', en: 'Hair Accessory' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '髮夾', en: 'Hair Clip' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '攤位販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '02',
    ...hairAccessoryDefaults,
    price: 40,
    stock: 10,
    stockText: {
      'zh-TW': '10 個',
      en: '10 available'
    },
    images: [
      publicAsset('products/HairAccessories/2.avif'),
      publicAsset('products/HairAccessories/3.avif')
    ],
    name: {
      'zh-TW': '彩虹小馬愛心角色髮圈',
      en: 'My Little Pony Heart Character Hair Tie'
    },
    tag: {
      'zh-TW': '角色髮圈',
      en: 'Character Hair Tie'
    },
    description: {
      'zh-TW': '附有透明愛心裝飾的彩虹小馬髮圈，共有柔柔、珍奇、雲寶、碧琪與紫悅五款，可指定角色。',
      en: 'A My Little Pony hair tie with a translucent heart charm featuring Fluttershy, Rarity, Rainbow Dash, Pinkie Pie, or Twilight Sparkle. Characters can be selected.'
    },
    details: {
      'zh-TW': '柔和配色髮圈搭配透明愛心造型裝飾，角色包含柔柔、珍奇、雲寶、碧琪與紫悅。每次購買為一個，可指定喜歡的角色。',
      en: 'A softly colored hair tie with a translucent heart-shaped charm featuring Fluttershy, Rarity, Rainbow Dash, Pinkie Pie, or Twilight Sparkle. Each purchase includes one hair tie, and the character can be selected.'
    },
    badges: [
      { 'zh-TW': '角色可選', en: 'Character Selectable' },
      { 'zh-TW': '愛心造型', en: 'Heart Design' }
    ],
    highlights: [
      {
        'zh-TW': '角色包含柔柔、珍奇、雲寶、碧琪與紫悅。',
        en: 'Characters include Fluttershy, Rarity, Rainbow Dash, Pinkie Pie, and Twilight Sparkle.'
      },
      {
        'zh-TW': '每次購買內含一個髮圈。',
        en: 'Each purchase includes one hair tie.'
      },
      {
        'zh-TW': '可從五款中指定喜歡的角色。',
        en: 'Choose your preferred character from five designs.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '髮飾', en: 'Hair Accessory' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '髮圈', en: 'Hair Tie' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '攤位販售', en: 'Available at the Booth' }
      }
    ]
  }
];
