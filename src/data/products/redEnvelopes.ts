import { publicAsset } from '../../composables/usePublicAssets';
import type { LocalizedText, Product } from './types';

type RedEnvelopeItem = {
  id: string;
  fileBases: [string, ...string[]];
  price: number;
  originalPrice: number | string;
  stock: number;
  name: LocalizedText;
  characters: LocalizedText;
};

const redEnvelopeItems: RedEnvelopeItem[] = [
  {
    id: '1',
    fileBases: ['1'],
    price: 50,
    originalPrice: 60,
    stock: 3,
    name: { 'zh-TW': '暮光閃閃與珍奇紅包袋', en: 'Twilight Sparkle and Rarity Red Envelope' },
    characters: { 'zh-TW': 'TS、RR', en: 'TS, RR' }
  },
  {
    id: '2',
    fileBases: ['2'],
    price: 70,
    originalPrice: 90,
    stock: 3,
    name: { 'zh-TW': '雲寶與珍奇紅包袋  (6入)', en: 'Rainbow Dash and Rarity Red Envelope (6-Pack)' },
    characters: { 'zh-TW': 'RD、RR', en: 'RD, RR' }
  },
  {
    id: '3',
    fileBases: ['3'],
    price: 100,
    originalPrice: 120,
    stock: 3,
    name: { 'zh-TW': '蘋果嘉兒與柔柔紅包袋', en: 'Applejack and Fluttershy Red Envelope' },
    characters: { 'zh-TW': 'AJ、FS', en: 'AJ, FS' }
  },
  {
    id: '4',
    fileBases: ['4'],
    price: 120,
    originalPrice: 140,
    stock: 3,
    name: { 'zh-TW': '碧琪紅包袋 (6入)', en: 'Pinkie Pie Red Envelope (6-Pack)' },
    characters: { 'zh-TW': 'PP', en: 'PP' }
  },
  {
    id: '5',
    fileBases: ['5'],
    price: 100,
    originalPrice: 120,
    stock: 3,
    name: { 'zh-TW': '六主角新年快樂紅包袋', en: 'Mane 6 Happy New Year Red Envelope' },
    characters: { 'zh-TW': 'MANE6', en: 'MANE6' }
  },
  {
    id: '6',
    fileBases: ['6'],
    price: 100,
    originalPrice: 120,
    stock: 3,
    name: { 'zh-TW': '六主角聰明伶俐紅包袋', en: 'Mane 6 Clever and Bright Red Envelope' },
    characters: { 'zh-TW': 'MANE6', en: 'MANE6' }
  },
  {
    id: '7',
    fileBases: ['7'],
    price: 70,
    originalPrice: 80,
    stock: 3,
    name: { 'zh-TW': '碧琪發財紅包袋', en: 'Pinkie Pie Prosperity Red Envelope' },
    characters: { 'zh-TW': 'PP', en: 'PP' }
  },
  {
    id: '8',
    fileBases: ['8'],
    price: 80,
    originalPrice: 90,
    stock: 8,
    name: { 'zh-TW': '六主角輪盤紅包袋', en: 'Mane 6 Wheel Red Envelope' },
    characters: { 'zh-TW': 'MANE6', en: 'MANE6' }
  },
  {
    id: '9',
    fileBases: ['9', '10'],
    price: 120,
    originalPrice: 140,
    stock: 3,
    name: { 'zh-TW': '六主角與穗龍平安喜樂紅包袋組 (6入)', en: 'Mane 6 and Spike Peace and Joy Red Envelope (6-Pack)' },
    characters: { 'zh-TW': 'MANE6、SPIKE', en: 'MANE6, SPIKE' }
  },
  {
    id: '10',
    fileBases: ['11', '12', '16'],
    price: 60,
    originalPrice: 70,
    stock: 9,
    name: { 'zh-TW': '珍奇、碧琪與蘋果嘉兒紅包袋 (3入)', en: 'Rarity, Pinkie Pie and Applejack Red Envelope (3-Pack)' },
    characters: { 'zh-TW': 'RR、PP、AJ', en: 'RR, PP, AJ' }
  },
  {
    id: '11',
    fileBases: ['13'],
    price: 60,
    originalPrice: 70,
    stock: 3,
    name: { 'zh-TW': '碧琪平安紅包袋 (3入)', en: 'Pinkie Pie Peaceful Red Envelope (3-Pack)' },
    characters: { 'zh-TW': 'PP、RR', en: 'PP, RR' }
  },
  {
    id: '12',
    fileBases: ['14'],
    price: 60,
    originalPrice: 70,
    stock: 2,
    name: { 'zh-TW': '柔柔與蘋果嘉兒紅包袋 (3入)', en: 'Fluttershy and Applejack Red Envelope (3-Pack)' },
    characters: { 'zh-TW': 'FS、AJ', en: 'FS, AJ' }
  },
  {
    id: '13',
    fileBases: ['15'],
    price: 60,
    originalPrice: 70,
    stock: 3,
    name: { 'zh-TW': '雲寶與碧琪紅包袋 (3入)', en: 'Rainbow Dash and Pinkie Pie Red Envelope (3-Pack)' },
    characters: { 'zh-TW': 'RD、PP', en: 'RD, PP' }
  },
  {
    id: '14',
    fileBases: ['17'],
    price: 60,
    originalPrice: 70,
    stock: 2,
    name: { 'zh-TW': '紫悅學業進步紅包袋 (3入)', en: 'Twilight Sparkle Academic Progress Red Envelope (3-Pack)' },
    characters: { 'zh-TW': 'TS', en: 'TS' }
  },
  {
    id: '15',
    fileBases: ['18'],
    price: 60,
    originalPrice: 70,
    stock: 3,
    name: { 'zh-TW': '碧琪聰明伶俐紅包袋 (3入)', en: 'Pinkie Pie Clever and Bright Red Envelope (3-Pack)' },
    characters: { 'zh-TW': 'PP', en: 'PP' }
  },
  {
    id: '16',
    fileBases: ['19'],
    price: 60,
    originalPrice: 70,
    stock: 3,
    name: { 'zh-TW': '紫悅福氣滿滿紅包袋 (3入)', en: 'Twilight Sparkle Full of Blessings Red Envelope (3-Pack)' },
    characters: { 'zh-TW': 'TS', en: 'TS' }
  },
  {
    id: '17',
    fileBases: ['20'],
    price: 60,
    originalPrice: 70,
    stock: 3,
    name: { 'zh-TW': '蘋果嘉兒平安喜樂紅包袋 (6入)', en: 'Applejack Peace and Joy Red Envelope (6-Pack)' },
    characters: { 'zh-TW': 'AJ', en: 'AJ' }
  },
  {
    id: '18',
    fileBases: ['21'],
    price: 90,
    originalPrice: 100,
    stock: 3,
    name: { 'zh-TW': '碧琪與珍奇新年快樂造型紅包袋', en: 'Pinkie Pie and Rarity Happy New Year Shaped Red Envelope' },
    characters: { 'zh-TW': 'PP、RR', en: 'PP, RR' }
  },
  {
    id: '19',
    fileBases: ['22'],
    price: 90,
    originalPrice: 100,
    stock: 3,
    name: { 'zh-TW': '珍奇新年快樂造型紅包袋 (6卡)', en: 'Rarity Happy New Year Shaped Red Envelope (6-card)' },
    characters: { 'zh-TW': 'RR', en: 'RR' }
  },
  {
    id: '20',
    fileBases: ['23'],
    price: 90,
    originalPrice: 100,
    stock: 3,
    name: { 'zh-TW': '蘋果嘉兒、柔柔與雲寶新年快樂造型紅包袋', en: 'Applejack, Fluttershy and Rainbow Dash Happy New Year Shaped Red Envelope' },
    characters: { 'zh-TW': 'AJ、FS、RD', en: 'AJ, FS, RD' }
  },
  {
    id: '21',
    fileBases: ['24', '25'],
    price: 60,
    originalPrice: 70,
    stock: 2,
    name: { 'zh-TW': '六主角福氣平安喜樂紅包袋組', en: 'Mane 6 Fortune, Peace and Joy Red Envelope Set' },
    characters: { 'zh-TW': 'MANE6', en: 'MANE6' }
  }
];

const localize = (text: LocalizedText, locale: keyof LocalizedText) => text[locale];

const characterDescription = (characters: LocalizedText): LocalizedText => ({
  'zh-TW': `${localize(characters, 'zh-TW')}角色款紅包袋，正反雙面皆可在商品圖庫查看。`,
  en: `${localize(characters, 'en')} character red envelope with front and back artwork in the product gallery.`
});

const characterDetails = (characters: LocalizedText): LocalizedText => ({
  'zh-TW': `此款紅包袋角色為${localize(characters, 'zh-TW')}。每款商品皆收錄正面與背面兩張商品圖，正面作為商品主圖，背面可在詳細頁圖庫切換查看。`,
  en: `This red envelope features ${localize(characters, 'en')}. Each listing includes front and back product images, with the front used as the main image and the back available in the detail gallery.`
});

const createRedEnvelopeProduct = (item: RedEnvelopeItem): Product => {
  const images = item.fileBases.flatMap((fileBase) => {
    const imagePath = `products/RedEnvelopes/${fileBase}`;

    return [
      publicAsset(`${imagePath}-1.avif`),
      publicAsset(`${imagePath}-2.avif`)
    ];
  }) as [string, ...string[]];

  return {
    id: item.id,
    category: 'red-envelopes',
    price: item.price,
    originalPrice: item.originalPrice,
    stock: item.stock,
    stockText: {
      'zh-TW': `${item.stock} 個`,
      en: `${item.stock} ${item.stock === 1 ? 'item' : 'items'}`
    },
    images,
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: item.name,
    tag: item.characters,
    description: characterDescription(item.characters),
    details: characterDetails(item.characters),
    shipping: {
      'zh-TW': '以現場販售與取貨為主，商品數量有限，售完為止。',
      en: 'Primarily available for purchase and pickup at the booth. Quantities are limited and available while supplies last.'
    },
    badges: [
      item.characters,
      {
        'zh-TW': '雙面圖樣',
        en: 'Two-Sided Artwork'
      },
      {
        'zh-TW': '新春紅包',
        en: 'Lunar New Year'
      }
    ],
    highlights: [
      {
        'zh-TW': `角色：${localize(item.characters, 'zh-TW')}。`,
        en: `Character: ${localize(item.characters, 'en')}.`
      },
      {
        'zh-TW': '正面圖樣作為商品主視覺。',
        en: 'Front artwork is used as the main product visual.'
      },
      {
        'zh-TW': '背面圖樣可在詳細頁圖庫查看。',
        en: 'Back artwork is available in the detail-page gallery.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: item.characters
      },
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '紅包', en: 'Red Envelope' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '正反雙面圖樣', en: 'Front and Back Artwork' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  };
};

export const redEnvelopes: Product[] = redEnvelopeItems.map(createRedEnvelopeProduct);
