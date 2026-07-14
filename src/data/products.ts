import { publicAsset } from '../composables/usePublicAssets';
import type { LocaleCode } from '../i18n';

export type LocalizedText = Record<LocaleCode, string>;

export type ProductId = string;
export type ProductCategory = 'apparel' | 'print' | 'merch';
export type ProductSort = 'default' | 'price-asc' | 'price-desc';

export type ProductSpec = {
  label: LocalizedText;
  value: LocalizedText;
};

export type Product = {
  id: ProductId;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  stock: number;
  image: string;
  location: LocalizedText;
  name: LocalizedText;
  tag: LocalizedText;
  description: LocalizedText;
  details: LocalizedText;
  shipping: LocalizedText;
  badges: LocalizedText[];
  highlights: LocalizedText[];
  specs: ProductSpec[];
};

export const localizeProductText = (text: LocalizedText, locale: LocaleCode) => text[locale] ?? text['zh-TW'];
export const formatProductCopy = (text: string, values: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));

export const products: Product[] = [
  {
    id: '01',
    category: 'merch',
    price: 2000,
    originalPrice: 2400,
    stock: 1,
    image: publicAsset('products/throw-pillow.svg'),
    location: {
      'zh-TW': 'TWBC 現場販售',
      en: 'TWBC booth sales'
    },
    name: {
      'zh-TW': 'Twilight 等身抱枕',
      en: 'Cloud Harbor Throw Pillow'
    },
    tag: {
      'zh-TW': '周邊',
      en: 'Merch'
    },
    description: {
      'zh-TW': '柔軟好抱的雲港周邊，適合放在房間、座位或活動後收藏。',
      en: 'A soft Cloud Harbor pillow for room decor, desk chairs, and post-event collecting.'
    },
    details: {
      'zh-TW': '抱枕以柔軟觸感與日常擺放為主，適合放在房間、沙發或工作座位旁。設計方向保留雲港商行的視覺識別，讓它既能當作活動紀念，也能成為平常會自然用上的小物。因枕心體積較大，建議在現場購買枕套時，再另外訂購。',
      en: 'The Cloud Harbor throw pillow focuses on a soft hand feel and everyday placement. It works well on beds, sofas, or desk chairs while keeping the Cloud Harbor identity visible as both a keepsake and a practical item.'
    },
    shipping: {
      'zh-TW': '以 TWBC 現場販售與取貨為主，因體枕芯體積較大，所以將不會販售，只會有枕套的部分，枕芯可另外訂購。',
      en: 'Sales and pickup will primarily be available at the event. Due to the large size of the body pillow insert, only the pillowcase will be sold. The pillow insert is not included and can be purchased separately.'
    },
    badges: [
      {
        'zh-TW': '柔軟周邊',
        en: 'Soft Merch'
      },
      {
        'zh-TW': '活動收藏',
        en: 'Event Collectible'
      }
    ],
    highlights: [
      {
        'zh-TW': '180 x 60 cm 等身尺寸，雙面不同姿勢設計，依角色個性打造，正反皆有不同魅力。',
        en: "180 x 60 cm life-size design with unique artwork on both sides, featuring different poses that capture the character's personality."
      },
      {
        'zh-TW': '採用 New 2WAY 高彈性布料，觸感柔滑細緻，色彩鮮豔，完整呈現插畫細節',
        en: 'Made with premium New 2WAY fabric, offering a soft, smooth feel with vibrant color reproduction and exceptional print detail.'
      },
      {
        'zh-TW': '側邊隱藏式拉鍊搭配高解析印刷，構圖預留安全邊與出血範圍，兼顧美觀、舒適與品質。',
        en: 'Hidden side zipper and high-quality printing, with artwork designed to account for bleed and safe margins for a clean, professional finish.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '周邊', en: 'Merch' }
      },
      {
        label: { 'zh-TW': '尺寸', en: 'Size' },
        value: { 'zh-TW': '長寬約 180 x 60 cm', en: 'Approx. 180 x 60 cm' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': 'TWBC 現場販售', en: 'TWBC booth sales' }
      }
    ]
  },
  {
    id: '04',
    category: 'print',
    price: 180,
    // originalPrice: 220,
    stock: 60,
    image: publicAsset('products/event-brochure.svg'),
    location: {
      'zh-TW': 'TWBC 現場',
      en: 'TWBC Booth'
    },
    name: {
      'zh-TW': '活動手冊',
      en: 'Event Brochure'
    },
    tag: {
      'zh-TW': '印刷',
      en: 'Print'
    },
    description: {
      'zh-TW': '整合品牌故事、流程與商品資訊，讓現場溝通更完整。',
      en: 'A compact printed guide for brand story, schedules, and product information.'
    },
    details: {
      'zh-TW': '活動手冊收錄雲港商行的攤位介紹、商品資訊與活動當天可快速查閱的內容。適合想收藏紙本資訊、或希望在現場更快了解商品與攤位安排的訪客。',
      en: 'The event brochure collects Cloud Harbor booth information, product notes, and quick references for event day. It is made for visitors who want a printed keepsake or a faster way to understand the booth.'
    },
    shipping: {
      'zh-TW': '以現場販售為主，紙本數量有限，售完依後續公告決定是否再版。',
      en: 'Primarily sold onsite. Printed quantities are limited, with reprints subject to later announcements.'
    },
    badges: [
      {
        'zh-TW': '紙本收藏',
        en: 'Print Collectible'
      },
      {
        'zh-TW': '快速導覽',
        en: 'Quick Guide'
      }
    ],
    highlights: [
      {
        'zh-TW': '整理攤位故事、商品資訊與現場重點。',
        en: 'Collects booth story, product information, and event highlights.'
      },
      {
        'zh-TW': '適合現場翻閱，也適合作為活動紀念。',
        en: 'Useful at the booth and suitable as an event keepsake.'
      },
      {
        'zh-TW': '版面以清楚閱讀與快速查找為主。',
        en: 'Layout focuses on readability and quick lookup.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '印刷品', en: 'Print' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '騎馬釘或摺頁規劃中', en: 'Stapled booklet or folded guide in planning' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': 'TWBC 現場販售', en: 'TWBC booth sales' }
      }
    ]
  },
  {
    id: '03',
    category: 'merch',
    price: 450,
    // originalPrice: 520,
    stock: 16,
    image: publicAsset('products/canvas-bag.svg'),
    location: {
      'zh-TW': 'TWBC 現場',
      en: 'TWBC Booth'
    },
    name: {
      'zh-TW': '訂製帆布袋',
      en: 'Custom Canvas Bag'
    },
    tag: {
      'zh-TW': '周邊',
      en: 'Merch'
    },
    description: {
      'zh-TW': '可承載文件、樣品與贈品，兼具實用性與品牌曝光。',
      en: 'A practical item for documents, samples, and gifts while keeping the brand visible.'
    },
    details: {
      'zh-TW': '訂製帆布袋以實用收納為核心，適合活動當天放入手冊、購入品與小物。設計方向保留雲港商行的識別感，同時讓袋身維持好搭配、好使用的日常風格。',
      en: 'The custom canvas bag focuses on practical storage for brochures, purchases, and small items during the event. Its design keeps Cloud Harbor visible while staying easy to use in daily life.'
    },
    shipping: {
      'zh-TW': '以 TWBC 現場販售與取貨為主，因體積較大，建議活動早段購買或預留。',
      en: 'Primarily sold and picked up at the TWBC booth. Because it is bulkier, early purchase or reservation is recommended.'
    },
    badges: [
      {
        'zh-TW': '人氣預定',
        en: 'Featured Pick'
      },
      {
        'zh-TW': '實用周邊',
        en: 'Practical Merch'
      }
    ],
    highlights: [
      {
        'zh-TW': '容量適合放手冊、文件與活動購入品。',
        en: 'Sized for brochures, documents, and event purchases.'
      },
      {
        'zh-TW': '帆布袋型耐看，活動後也能日常使用。',
        en: 'Classic canvas-bag style for daily use after the event.'
      },
      {
        'zh-TW': '兼顧品牌識別與低調好搭配的外觀。',
        en: 'Balances brand identity with an easy-to-match look.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '周邊', en: 'Merch' }
      },
      {
        label: { 'zh-TW': '材質', en: 'Material' },
        value: { 'zh-TW': '帆布規劃中', en: 'Canvas in planning' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': 'TWBC 現場販售', en: 'TWBC booth sales' }
      }
    ]
  }
];

export const productDetailRoutes = products.map((product) => `/products/${product.id}`);

export const getProductById = (id: ProductId) => products.find((product) => product.id === id);

export const getProductsByIds = (ids: readonly ProductId[]) => {
  const idSet = new Set(ids);

  return products.filter((product) => idSet.has(product.id));
};
