import { publicAsset } from '../../composables/usePublicAssets';
import type { Product } from './types';

export const redEnvelopes: Product[] = [
  {
    id: '01',
    category: 'red-envelopes',
    price: 100,
    originalPrice: 120,
    stock: 10,
    images: [publicAsset('avatar.avif')],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '紅包袋測試商品',
      en: 'Red Envelope Sample'
    },
    tag: {
      'zh-TW': '紅包',
      en: 'Red Envelope'
    },
    description: {
      'zh-TW': '這是一筆用於測試紅包分類、商品列表與詳細頁面的假資料。',
      en: 'Sample data for testing the red-envelope category, product list, and detail page.'
    },
    details: {
      'zh-TW': '此商品目前僅供版面與路由測試，名稱、價格、庫存、圖片及商品說明都可以在正式資料確認後替換。',
      en: 'This product is for layout and route testing. Replace its name, price, stock, image, and copy when the final product information is ready.'
    },
    shipping: {
      'zh-TW': '以現場販售與取貨為主，實際販售方式以正式公告為準。',
      en: 'Planned for onsite purchase and pickup. Final sales details are subject to confirmation.'
    },
    badges: [
      {
        'zh-TW': '測試資料',
        en: 'Sample Data'
      },
      {
        'zh-TW': '紅包',
        en: 'Red Envelope'
      }
    ],
    highlights: [
      {
        'zh-TW': '測試紅包分類篩選。',
        en: 'Tests the red-envelope category filter.'
      },
      {
        'zh-TW': '測試 re/01 雙層商品路由。',
        en: 'Tests the re/01 nested product route.'
      },
      {
        'zh-TW': '正式商品資料完成後可直接替換。',
        en: 'Can be replaced when the final product data is ready.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '紅包', en: 'Red Envelope' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '測試商品', en: 'Sample Product' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  }
];
