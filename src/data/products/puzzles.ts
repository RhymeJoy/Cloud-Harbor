import { publicAsset } from '../../composables/usePublicAssets';
import type { Product } from './types';

type MicroBlockCharacter = {
  id: string;
  imageCode: string;
  name: string;
  nameEn: string;
  pieceCount: number;
};

const characters: MicroBlockCharacter[] = [
  { id: '1', imageCode: 'aj', name: '蘋果嘉兒', nameEn: 'Applejack', pieceCount: 233 },
  { id: '2', imageCode: 'fs', name: '柔柔', nameEn: 'Fluttershy', pieceCount: 214 },
  { id: '3', imageCode: 'pp', name: '碧琪', nameEn: 'Pinkie Pie', pieceCount: 207 },
  { id: '4', imageCode: 'rd', name: '雲寶', nameEn: 'Rainbow Dash', pieceCount: 209 },
  { id: '5', imageCode: 'rr', name: '珍奇', nameEn: 'Rarity', pieceCount: 219 },
  { id: '6', imageCode: 'ts', name: '紫悅', nameEn: 'Twilight Sparkle', pieceCount: 200 }
];

const createMicroBlockProduct = ({
  id,
  imageCode,
  name,
  nameEn,
  pieceCount
}: MicroBlockCharacter): Product => ({
  id,
  category: 'puzzles',
  price: 250,
  originalPrice: 350,
  stock: 1,
  stockText: {
    'zh-TW': '剩餘 1 個',
    en: '1 available'
  },
  images: [
    publicAsset(`products/Puzzles/${imageCode}-1.avif`),
    publicAsset(`products/Puzzles/${imageCode}-2.avif`)
  ],
  location: {
    'zh-TW': '攤位現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': `MLP 微型積木－${name}`,
    en: `MLP Micro Blocks – ${nameEn}`
  },
  tag: {
    'zh-TW': '微型積木系列',
    en: 'Micro Blocks Series'
  },
  description: {
    'zh-TW': `My Little Pony 微型積木系列 ${name}款，使用迷你積木拼組出角色造型。`,
    en: `A My Little Pony micro block set featuring ${nameEn}. Build the character with miniature blocks.`
  },
  details: {
    'zh-TW': `本商品為 ${name} 單一角色款，每款現貨 1 個，數量有限，售完為止。`,
    en: `This listing is for the ${nameEn} character set. Only one is available while supplies last.`
  },
  shipping: {
    'zh-TW': '以攤位現場購買取貨為主，實際庫存依現場為準。',
    en: 'Primarily available for onsite purchase and pickup. Stock is subject to onsite availability.'
  },
  badges: [
    { 'zh-TW': '特價', en: 'Sale' },
    { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
  ],
  highlights: [
    {
      'zh-TW': `六位主角之一的 ${name} 角色造型。`,
      en: `${nameEn}, one of the six main pony characters.`
    },
    {
      'zh-TW': '迷你積木顆粒，享受細緻的拼組樂趣。',
      en: 'Miniature blocks offer a detailed building experience.'
    },
    {
      'zh-TW': `內含 ${pieceCount} 片迷你積木。`,
      en: `Includes ${pieceCount} miniature blocks.`
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '角色', en: 'Character' },
      value: { 'zh-TW': name, en: nameEn }
    },
    {
      label: { 'zh-TW': '系列', en: 'Series' },
      value: { 'zh-TW': 'MLP 微型積木系列', en: 'MLP Micro Blocks Series' }
    }
  ]
});

export const puzzleProducts: Product[] = characters.map(createMicroBlockProduct);
