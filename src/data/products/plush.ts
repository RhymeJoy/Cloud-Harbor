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
    id: '1',
    imageCode: 'TS',
    price: 800,
    originalPrice: 900,
    stock: 2 ,
    character: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' }
  },
  {
    id: '2',
    imageCode: 'RD',
    price: 800,
    originalPrice: 900,
    stock: 1,
    character: { 'zh-TW': '雲寶', en: 'Rainbow Dash' }
  },
  {
    id: '3',
    imageCode: 'RR',
    price: 800,
    originalPrice: 900,
    stock: 2,
    character: { 'zh-TW': '珍奇', en: 'Rarity' }
  },
  {
    id: '4',
    imageCode: 'AJ',
    price: 800,
    originalPrice: 900,
    stock: 1,
    character: { 'zh-TW': '蘋果嘉兒', en: 'Applejack' }
  },
  {
    id: '5',
    imageCode: 'FS',
    price: 800,
    originalPrice: 900,
    stock: 1,
    character: { 'zh-TW': '柔柔', en: 'Fluttershy' }
  },
  {
    id: '6',
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
  const imageCode = item.imageCode.toLowerCase();

  return {
    id: item.id,
    category: 'plush',
    price: item.price,
    originalPrice: item.originalPrice,
    stock: item.stock,
    stockText: {
      'zh-TW': `${item.stock} 隻`,
      en: `${item.stock} ${item.stock === 1 ? 'plush toy' : 'plush toys'}`
    },
    images: [
      publicAsset(`products/Plush/prone-${imageCode}.avif`),
      publicAsset('products/Plush/prone-mane6-1.avif'),
      publicAsset('products/Plush/prone-mane6-2.avif')
    ],
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

const pinkiePieShoulderBag: Product = {
  id: '7',
  category: 'plush',
  price: 700,
  originalPrice: 850,
  stock: 1,
  stockText: {
    'zh-TW': '1 個',
    en: '1 shoulder bag'
  },
  images: [
    publicAsset('products/Plush/shoulder-bag-pp.avif'),
    publicAsset('products/Plush/shoulder-bag.avif'),
  ],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': '碧琪造型肩包',
    en: 'Pinkie Pie Character Shoulder Bag'
  },
  tag: {
    'zh-TW': '碧琪',
    en: 'Pinkie Pie'
  },
  description: {
    'zh-TW': '正版彩虹小馬碧琪造型肩包，振光玩具出品，採用柔軟聚酯纖維材質。',
    en: 'An official My Little Pony Pinkie Pie character shoulder bag by Zhen Guang Toys, made with soft polyester material.'
  },
  details: {
    'zh-TW': '以碧琪角色打造的柔軟造型肩背包，可收納日常小物。商品單入包裝約 32 × 10 × 35 cm，建議 8 歲以上使用。',
    en: 'A soft Pinkie Pie character shoulder bag for carrying everyday essentials. The single-item package measures approximately 32 × 10 × 35 cm and is recommended for ages 8 and up.'
  },
  shipping: {
    'zh-TW': '主要於活動現場販售與取貨，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantity is limited and available while supplies last.'
  },
  badges: [
    { 'zh-TW': '碧琪', en: 'Pinkie Pie' },
    { 'zh-TW': '造型肩包', en: 'Character Shoulder Bag' },
    { 'zh-TW': '振光玩具', en: 'Zhen Guang Toys' }
  ],
  highlights: [
    {
      'zh-TW': '正版彩虹小馬碧琪角色商品。',
      en: 'Official My Little Pony merchandise featuring Pinkie Pie.'
    },
    {
      'zh-TW': '超柔聚酯纖維材質，兼具造型與日常收納功能。',
      en: 'Soft polyester material combines character styling with everyday storage.'
    },
    {
      'zh-TW': '振光玩具出品，現貨僅 1 個。',
      en: 'Produced by Zhen Guang Toys, with only one available.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: { 'zh-TW': '造型肩包', en: 'Character Shoulder Bag' }
    },
    {
      label: { 'zh-TW': '形式', en: 'Format' },
      value: { 'zh-TW': '肩背包', en: 'Shoulder Bag' }
    },
    {
      label: { 'zh-TW': '角色', en: 'Character' },
      value: { 'zh-TW': '碧琪', en: 'Pinkie Pie' }
    }
  ]
};

const standingPlushItems: LyingPlushItem[] = [
  {
    id: '8',
    imageCode: 'TS',
    price: 800,
    originalPrice: 900,
    stock: 1,
    character: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' }
  },
  {
    id: '9',
    imageCode: 'FS',
    price: 800,
    originalPrice: 900,
    stock: 1,
    character: { 'zh-TW': '柔柔', en: 'Fluttershy' }
  }
];

const createStandingPlushProduct = (item: LyingPlushItem): Product => {
  const characterZh = localize(item.character, 'zh-TW');
  const characterEn = localize(item.character, 'en');

  return {
    id: item.id,
    category: 'plush',
    price: item.price,
    originalPrice: item.originalPrice,
    stock: item.stock,
    stockText: {
      'zh-TW': '1 隻',
      en: '1 plush toy'
    },
    images: [
      publicAsset(`products/Plush/stand-${item.imageCode.toLowerCase()}.avif`),
      publicAsset('products/Plush/stand-mane3.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': `${characterZh} 12吋站姿布偶`,
      en: `${characterEn} 12-inch Standing Plush`
    },
    tag: item.character,
    description: {
      'zh-TW': `${characterZh} 12吋站姿布偶，振光玩具出品，適合擺放、拍照與收藏。`,
      en: `${characterEn} 12-inch standing plush by Zhen Guang Toys for display, photos, and collecting.`
    },
    details: {
      'zh-TW': `12吋站姿布偶，角色為${characterZh}，由振光玩具製作。站立造型適合放在展示櫃、桌面或收藏空間。`,
      en: `A 12-inch standing plush featuring ${characterEn}, made by Zhen Guang Toys. Its upright design is suitable for shelves, desks, and collectible displays.`
    },
    shipping: {
      'zh-TW': '主要於活動現場販售與取貨，布偶數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Plush quantities are limited and available while supplies last.'
    },
    badges: [
      item.character,
      { 'zh-TW': '12吋', en: '12-inch' },
      { 'zh-TW': '站姿布偶', en: 'Standing Plush' },
      { 'zh-TW': '振光玩具', en: 'Zhen Guang Toys' }
    ],
    highlights: [
      {
        'zh-TW': `角色：${characterZh}。`,
        en: `Character: ${characterEn}.`
      },
      {
        'zh-TW': '振光玩具製作，12吋站姿造型適合收藏展示。',
        en: 'Made by Zhen Guang Toys in a 12-inch standing design for collectible display.'
      },
      {
        'zh-TW': '此角色現貨僅 1 隻，數量有限。',
        en: 'Only one of this character is available.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '布偶', en: 'Plush' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '12吋站姿布偶', en: '12-inch Standing Plush' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: item.character
      }
    ]
  };
};

export const plushProducts: Product[] = [
  ...lyingPlushItems.map(createLyingPlushProduct),
  pinkiePieShoulderBag,
  ...standingPlushItems.map(createStandingPlushProduct)
];
