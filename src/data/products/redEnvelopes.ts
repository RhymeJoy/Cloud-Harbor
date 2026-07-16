import { publicAsset } from '../../composables/usePublicAssets';
import type { LocalizedText, Product } from './types';

type RedEnvelopeItem = {
  id: string;
  fileBases: [string, ...string[]];
  price: number;
  originalPrice: number;
  stock: number;
  name: LocalizedText;
  characters: LocalizedText;
};

const redEnvelopeItems: RedEnvelopeItem[] = [
  {
    id: '01',
    fileBases: ['1'],
    price: 100,
    originalPrice: 120,
    stock: 3,
    name: { 'zh-TW': '暮光閃閃紅包袋', en: 'Twilight Sparkle Red Envelope' },
    characters: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' }
  },
  {
    id: '02',
    fileBases: ['2'],
    price: 110,
    originalPrice: 130,
    stock: 3,
    name: { 'zh-TW': '雲寶與珍奇紅包袋', en: 'Rainbow Dash and Rarity Red Envelope' },
    characters: { 'zh-TW': '雲寶、珍奇', en: 'Rainbow Dash, Rarity' }
  },
  {
    id: '03',
    fileBases: ['3'],
    price: 120,
    originalPrice: 140,
    stock: 3,
    name: { 'zh-TW': '蘋果嘉兒與柔柔紅包袋', en: 'Applejack and Fluttershy Red Envelope' },
    characters: { 'zh-TW': '蘋果嘉兒、柔柔', en: 'Applejack, Fluttershy' }
  },
  {
    id: '04',
    fileBases: ['4'],
    price: 130,
    originalPrice: 150,
    stock: 3,
    name: { 'zh-TW': '碧琪紅包袋', en: 'Pinkie Pie Red Envelope' },
    characters: { 'zh-TW': '碧琪', en: 'Pinkie Pie' }
  },
  {
    id: '05',
    fileBases: ['5'],
    price: 140,
    originalPrice: 160,
    stock: 3,
    name: { 'zh-TW': '六主角新年快樂紅包袋', en: 'Mane 6 Happy New Year Red Envelope' },
    characters: { 'zh-TW': '六主角', en: 'Mane 6' }
  },
  {
    id: '06',
    fileBases: ['6'],
    price: 150,
    originalPrice: 170,
    stock: 3,
    name: { 'zh-TW': '六主角聰明伶俐紅包袋', en: 'Mane 6 Clever and Bright Red Envelope' },
    characters: { 'zh-TW': '六主角', en: 'Mane 6' }
  },
  {
    id: '07',
    fileBases: ['7'],
    price: 160,
    originalPrice: 180,
    stock: 3,
    name: { 'zh-TW': '碧琪發財紅包袋', en: 'Pinkie Pie Prosperity Red Envelope' },
    characters: { 'zh-TW': '碧琪', en: 'Pinkie Pie' }
  },
  {
    id: '08',
    fileBases: ['8'],
    price: 170,
    originalPrice: 190,
    stock: 3,
    name: { 'zh-TW': '六主角輪盤紅包袋', en: 'Mane 6 Wheel Red Envelope' },
    characters: { 'zh-TW': '六主角', en: 'Mane 6' }
  },
  {
    id: '09',
    fileBases: ['9', '10'],
    price: 370,
    originalPrice: 410,
    stock: 3,
    name: { 'zh-TW': '六主角與穗龍平安喜樂紅包袋組', en: 'Mane 6 and Spike Peace and Joy Red Envelope Set' },
    characters: { 'zh-TW': '六主角、穗龍', en: 'Mane 6, Spike' }
  },
  {
    id: '10',
    fileBases: ['11'],
    price: 200,
    originalPrice: 220,
    stock: 3,
    name: { 'zh-TW': '碧琪歡笑紅包袋', en: 'Pinkie Pie Laughter Red Envelope' },
    characters: { 'zh-TW': '碧琪', en: 'Pinkie Pie' }
  },
  {
    id: '11',
    fileBases: ['12'],
    price: 210,
    originalPrice: 230,
    stock: 3,
    name: { 'zh-TW': '蘋果嘉兒誠實紅包袋', en: 'Applejack Honesty Red Envelope' },
    characters: { 'zh-TW': '蘋果嘉兒', en: 'Applejack' }
  },
  {
    id: '12',
    fileBases: ['13'],
    price: 220,
    originalPrice: 240,
    stock: 3,
    name: { 'zh-TW': '碧琪平安紅包袋', en: 'Pinkie Pie Peaceful Red Envelope' },
    characters: { 'zh-TW': '碧琪、珍奇', en: 'Pinkie Pie, Rarity' }
  },
  {
    id: '13',
    fileBases: ['14'],
    price: 230,
    originalPrice: 250,
    stock: 3,
    name: { 'zh-TW': '柔柔與蘋果嘉兒紅包袋', en: 'Fluttershy and Applejack Red Envelope' },
    characters: { 'zh-TW': '柔柔、蘋果嘉兒', en: 'Fluttershy, Applejack' }
  },
  {
    id: '14',
    fileBases: ['15'],
    price: 240,
    originalPrice: 260,
    stock: 3,
    name: { 'zh-TW': '雲寶與碧琪紅包袋', en: 'Rainbow Dash and Pinkie Pie Red Envelope' },
    characters: { 'zh-TW': '雲寶、碧琪', en: 'Rainbow Dash, Pinkie Pie' }
  },
  {
    id: '15',
    fileBases: ['16'],
    price: 250,
    originalPrice: 270,
    stock: 3,
    name: { 'zh-TW': '珍奇慷慨紅包袋', en: 'Rarity Generosity Red Envelope' },
    characters: { 'zh-TW': '珍奇', en: 'Rarity' }
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
