import { publicAsset } from '../../composables/usePublicAssets';
import type { Product } from './types';

export const badgeProducts: Product[] = [
  {
    id: '01',
    category: 'badges',
    price: 120,
    stock: 6,
    stockText: {
      'zh-TW': '6 個',
      en: '6 available'
    },
    images: [
      publicAsset('products/Badges/3.avif'),
      publicAsset('products/Badges/2.avif'),
      publicAsset('products/Badges/1.avif')
    ],
    location: {
      'zh-TW': '攤位販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '永恆奇幻新世界 小馬隨機徽章',
      en: 'A New World of Eternal Fantasy Random Pony Badge'
    },
    tag: {
      'zh-TW': '隨機款徽章',
      en: 'Random Badge'
    },
    description: {
      'zh-TW': '「永恆奇幻新世界」主題小馬徽章，採隨機款方式販售，拆封前無法得知裡面的角色。',
      en: 'An A New World of Eternal Fantasy pony badge sold as a random design. The character inside is unknown until opened.'
    },
    details: {
      'zh-TW': '每份內含一個小馬角色徽章，款式隨機，帶有類似盲盒的收藏樂趣。角色無法事先指定，實際款式以拆封內容為準。',
      en: 'Each pack contains one randomly selected pony character badge for a blind-box-style collecting experience. Characters cannot be selected in advance, and the enclosed design may vary.'
    },
    shipping: {
      'zh-TW': '主要於攤位現場販售與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '隨機款', en: 'Random Design' },
      { 'zh-TW': '角色未知', en: 'Mystery Character' },
      { 'zh-TW': '限量 6 個', en: 'Only 6 Available' }
    ],
    highlights: [
      {
        'zh-TW': '每份內含一個「永恆奇幻新世界」小馬角色徽章。',
        en: 'Each pack includes one A New World of Eternal Fantasy pony character badge.'
      },
      {
        'zh-TW': '款式隨機，拆封前不知道會抽到哪個角色。',
        en: 'The design is random, so the character remains a surprise until opened.'
      },
      {
        'zh-TW': '無法指定角色，實際款式以包裝內容為準。',
        en: 'Characters cannot be selected; the enclosed design may vary.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '款式', en: 'Design' },
        value: { 'zh-TW': '隨機角色（不可指定）', en: 'Random character (cannot be selected)' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '攤位販售', en: 'Available at the Booth' }
      }
    ]
  }
];
