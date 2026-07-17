import { publicAsset } from '../../composables/usePublicAssets';
import type { LocalizedText, Product } from './types';

type CharacterBookmarkItem = {
  id: string;
  imageCode: string;
  character: LocalizedText;
};

const characterBookmarkItems: CharacterBookmarkItem[] = [
  { id: '1', imageCode: 'ts', character: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' } },
  { id: '2', imageCode: 'rr', character: { 'zh-TW': '珍奇', en: 'Rarity' } },
  { id: '3', imageCode: 'rd', character: { 'zh-TW': '雲寶', en: 'Rainbow Dash' } },
  { id: '4', imageCode: 'pp', character: { 'zh-TW': '碧琪', en: 'Pinkie Pie' } },
  { id: '5', imageCode: 'aj', character: { 'zh-TW': '蘋果嘉兒', en: 'Applejack' } }
];

const createCharacterBookmarkProduct = (item: CharacterBookmarkItem): Product => ({
  id: item.id,
  category: 'bookmarks',
  price: 100,
  originalPrice: 120,
  stock: 1,
  stockText: {
    'zh-TW': '1 個',
    en: '1 bookmark'
  },
  images: [
    publicAsset(`products/Bookmarks/${item.imageCode}.avif`),
    publicAsset('products/Bookmarks/back.avif')
  ],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': `${item.character['zh-TW']}角色書籤`,
    en: `${item.character.en} Character Bookmark`
  },
  tag: item.character,
  description: {
    'zh-TW': `${item.character['zh-TW']}角色款書籤，正面為角色圖樣，背面採系列共用設計。`,
    en: `A ${item.character.en} bookmark with character artwork on the front and the shared series design on the back.`
  },
  details: {
    'zh-TW': `此款書籤正面以${item.character['zh-TW']}為主題，背面為五款角色共用圖樣。每款現貨 1 個，數量有限。`,
    en: `This bookmark features ${item.character.en} on the front and a shared back design used across all five character variants. One is available.`
  },
  shipping: {
    'zh-TW': '以現場販售與取貨為主，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantity is limited and available while supplies last.'
  },
  badges: [
    item.character,
    { 'zh-TW': '雙面圖樣', en: 'Two-Sided Design' },
    { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
  ],
  highlights: [
    {
      'zh-TW': `正面為${item.character['zh-TW']}角色圖樣。`,
      en: `Front artwork featuring ${item.character.en}.`
    },
    {
      'zh-TW': '背面採五款角色共用的系列設計。',
      en: 'Shared series artwork on the back across all five variants.'
    },
    {
      'zh-TW': '適合日常閱讀使用與角色周邊收藏。',
      en: 'Suitable for everyday reading and character merchandise collections.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: { 'zh-TW': '書籤', en: 'Bookmark' }
    },
    {
      label: { 'zh-TW': '形式', en: 'Format' },
      value: { 'zh-TW': '正反雙面圖樣', en: 'Front and Back Artwork' }
    },
    {
      label: { 'zh-TW': '角色', en: 'Character' },
      value: item.character
    }
  ]
});

const soulBeatLaserTicketCards: Product = {
  id: '6',
  category: 'bookmarks',
  price: 100,
  originalPrice: 120,
  stock: 4,
  stockText: {
    'zh-TW': '4 包',
    en: '4 packs'
  },
  images: [
    publicAsset('products/Bookmarks/1.avif'),
    publicAsset('products/Bookmarks/2.avif')
  ],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': '小馬寶莉 閃耀音符雷射票根卡',
    en: 'My Little Pony Soul Beat Laser Ticket Cards'
  },
  tag: {
    'zh-TW': '閃耀音符',
    en: 'Soul Beat'
  },
  description: {
    'zh-TW': '卡遊小馬寶莉閃耀音符系列雷射票根卡，每包隨機收錄 2 張卡片。',
    en: 'A Kayou My Little Pony Soul Beat laser ticket card pack containing two randomly selected cards.'
  },
  details: {
    'zh-TW': '以音樂舞台與角色演出為主題的雷射票根收藏卡，卡面採用雷射效果呈現。每包內含 2 張隨機卡片，款式無法指定。',
    en: 'Laser ticket-style collectible cards themed around music stages and character performances. Each pack contains two random cards, and designs cannot be selected.'
  },
  shipping: {
    'zh-TW': '以現場販售與取貨為主，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantity is limited and available while supplies last.'
  },
  badges: [
    { 'zh-TW': '每包 2 張', en: '2 Cards per Pack' },
    { 'zh-TW': '隨機款式', en: 'Random Designs' },
    { 'zh-TW': '雷射票根卡', en: 'Laser Ticket Cards' }
  ],
  highlights: [
    {
      'zh-TW': '音樂舞台主題的長版票根卡設計。',
      en: 'Long ticket-style cards with a music-stage theme.'
    },
    {
      'zh-TW': '卡面採雷射效果，轉動角度可呈現不同光澤。',
      en: 'Laser-finished surfaces create shifting shine from different angles.'
    },
    {
      'zh-TW': '每包隨機收錄 2 張，款式無法指定。',
      en: 'Each pack contains two random cards; designs cannot be selected.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: { 'zh-TW': '收藏卡', en: 'Collectible Cards' }
    },
    {
      label: { 'zh-TW': '系列', en: 'Series' },
      value: { 'zh-TW': '閃耀音符 Soul Beat', en: 'Soul Beat' }
    },
    {
      label: { 'zh-TW': '內容', en: 'Contents' },
      value: { 'zh-TW': '每包 2 張隨機卡片', en: '2 Random Cards per Pack' }
    }
  ]
};

export const bookmarkProducts: Product[] = [
  ...characterBookmarkItems.map(createCharacterBookmarkProduct),
  soulBeatLaserTicketCards
];
