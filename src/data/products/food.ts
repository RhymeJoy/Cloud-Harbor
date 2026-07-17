import { publicAsset } from '../../composables/usePublicAssets';
import type { LocalizedText, Product } from './types';

type ColaCanItem = {
  id: string;
  imageCode: string;
  stock: number;
  character: LocalizedText;
};

type GummySurpriseEggItem = {
  id: string;
  imageCode: string;
  stock: number;
  character: LocalizedText;
};

const colaCanItems: ColaCanItem[] = [
  {
    id: '1',
    imageCode: 'TS',
    stock: 6,
    character: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' }
  },
  {
    id: '2',
    imageCode: 'RD',
    stock: 6,
    character: { 'zh-TW': '雲寶', en: 'Rainbow Dash' }
  },
  {
    id: '3',
    imageCode: 'RR',
    stock: 6,
    character: { 'zh-TW': '珍奇', en: 'Rarity' }
  },
  {
    id: '4',
    imageCode: 'AJ',
    stock: 6,
    character: { 'zh-TW': '蘋果嘉兒', en: 'Applejack' }
  },
  {
    id: '5',
    imageCode: 'FS',
    stock: 6,
    character: { 'zh-TW': '柔柔', en: 'Fluttershy' }
  },
  {
    id: '6',
    imageCode: 'PP',
    stock: 6,
    character: { 'zh-TW': '碧琪', en: 'Pinkie Pie' }
  }
];

const gummySurpriseEggItems: GummySurpriseEggItem[] = [
  {
    id: '7',
    imageCode: 'fs',
    stock: 6,
    character: { 'zh-TW': '柔柔', en: 'Fluttershy' }
  },
  {
    id: '8',
    imageCode: 'rd',
    stock: 6,
    character: { 'zh-TW': '雲寶', en: 'Rainbow Dash' }
  },
  {
    id: '9',
    imageCode: 'rr',
    stock: 6,
    character: { 'zh-TW': '珍奇', en: 'Rarity' }
  }
];

const localize = (text: LocalizedText, locale: keyof LocalizedText) => text[locale];

const createColaCanProduct = (item: ColaCanItem): Product => {
  const characterZh = localize(item.character, 'zh-TW');
  const characterEn = localize(item.character, 'en');

  return {
    id: item.id,
    category: 'food',
    price: 50,
    stock: item.stock,
    stockText: {
      'zh-TW': `${item.stock} 罐`,
      en: `${item.stock} cans`
    },
    images: [publicAsset(`products/Food/cola-${item.imageCode.toLowerCase()}-2.avif`)],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': `${characterZh}  330ml 可口可樂`,
      en: `${characterEn} 330ml Coca Cola`
    },
    tag: item.character,
    description: {
      'zh-TW': `${characterZh} 角色刻痕款 330ml 可口可樂罐，適合現場收藏或飲用。`,
      en: `${characterEn} character etched 330ml Coca Cola can for booth collecting or drinking.`
    },
    details: {
      'zh-TW': `330ml 可口可樂罐，罐身以 ${characterZh} 角色刻痕風格設計。實際成分、保存期限與飲用資訊以罐身標示為準。`,
      en: `A 330ml Coca Cola can with ${characterEn} character etched-style artwork. Ingredients, expiry date, and drinking information follow the label on the can.`
    },
    shipping: {
      'zh-TW': '主要於活動現場販售與取貨。飲品類商品數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Beverage quantities are limited and available while supplies last.'
    },
    badges: [
      item.character,
      { 'zh-TW': '330ml', en: '330ml' },
      { 'zh-TW': '角色刻痕', en: 'Character Etched' }
    ],
    highlights: [
      {
        'zh-TW': `角色：${characterZh}。`,
        en: `Character: ${characterEn}.`
      },
      {
        'zh-TW': '330ml 可口可樂罐，適合活動現場購入。',
        en: '330ml Coca Cola can suitable for booth purchase.'
      },
      {
        'zh-TW': '角色刻痕風格罐身設計，可作為飲品與收藏品。',
        en: 'Etched-style character can artwork works as both a drink and a collectible.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '食物', en: 'Food' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '330ml 可口可樂罐', en: '330ml Coca Cola Can' }
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

const createGummySurpriseEggProduct = (item: GummySurpriseEggItem): Product => {
  const characterZh = localize(item.character, 'zh-TW');
  const characterEn = localize(item.character, 'en');

  return {
    id: item.id,
    category: 'food',
    price: 90,
    originalPrice: 100,
    stock: item.stock,
    stockText: {
      'zh-TW': `${item.stock} 顆`,
      en: `${item.stock} eggs`
    },
    images: [
      publicAsset(`products/Food/${item.imageCode}-egg-1.avif`),
      publicAsset(`products/Food/${item.imageCode}-egg-2.avif`)
    ],
    location: {
      'zh-TW': '攤位販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': `${characterZh} 果汁軟糖奇趣蛋`,
      en: `${characterEn} Juice Gummy Surprise Egg`
    },
    tag: item.character,
    description: {
      'zh-TW': `${characterZh}主題果汁軟糖奇趣蛋，內含果汁軟糖與一款小馬小公仔。`,
      en: `${characterEn}-themed juice gummy surprise egg with fruit gummies and a mini pony figure inside.`
    },
    details: {
      'zh-TW': `奇趣蛋內含果汁軟糖及一款小馬小公仔，兼具零食與收藏樂趣。實際公仔款式以包裝內容為準。`,
      en: `Includes juice gummies and one mini pony figure for a sweet snack and collectible surprise. The enclosed figure may vary.`
    },
    shipping: {
      'zh-TW': '主要於攤位現場販售與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      item.character,
      { 'zh-TW': '內附小公仔', en: 'Mini Figure Included' },
      { 'zh-TW': '果汁軟糖', en: 'Juice Gummies' }
    ],
    highlights: [
      {
        'zh-TW': `包裝主題角色：${characterZh}。`,
        en: `Featured character: ${characterEn}.`
      },
      {
        'zh-TW': '內含果汁軟糖與一款小馬小公仔。',
        en: 'Includes juice gummies and one mini pony figure.'
      },
      {
        'zh-TW': '可以享用軟糖，也能收藏驚喜公仔。',
        en: 'Enjoy the gummies and collect the surprise pony figure.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '食品', en: 'Food' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '果汁軟糖奇趣蛋', en: 'Juice Gummy Surprise Egg' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '攤位販售', en: 'Available at the Booth' }
      }
    ]
  };
};

export const foodProducts: Product[] = [
  ...colaCanItems.map(createColaCanProduct),
  ...gummySurpriseEggItems.map(createGummySurpriseEggProduct)
];
