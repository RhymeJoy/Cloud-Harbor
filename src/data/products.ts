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
  thumbnail?: string;
  images?: string[];
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

const generatedThumbnailExtensions = /\.(avif|webp|png|jpe?g)(?:[?#].*)?$/i;

export const getProductImageThumbnail = (image: string) => {
  if (!generatedThumbnailExtensions.test(image) || !image.includes('/products/')) {
    return image;
  }

  return image.replace('/products/', '/products/_thumbnails/');
};

export const getProductThumbnail = (product: Pick<Product, 'image' | 'thumbnail'>) =>
  product.thumbnail ?? getProductImageThumbnail(product.image);

export const products: Product[] = [
  {//twilight pillow
    id: '01',
    category: 'merch',
    price: 2000,
    originalPrice: 2400,
    stock: 1,
    image: publicAsset('products/BodyPillows/TS-1.avif'),
    images: [
      publicAsset('products/BodyPillows/TS-2.avif'),
      publicAsset('products/BodyPillows/TS-3.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'booth sales'
    },
    name: {
      'zh-TW': 'Twilight 等身抱枕',
      en: 'Twilight Body Pillow'
    },
    tag: {
      'zh-TW': '周邊',
      en: 'Merch'
    },
    description: {
      'zh-TW': '柔軟好抱的等身周邊，適合放在房間、床上或收藏用。',
      en: 'A soft Twilight pillow for room decor, beds, and post-event collecting.'
    },
    details: {
      'zh-TW': '抱枕以柔軟觸感與日常擺放為主，適合放在房間、沙發或工作座位旁。設計方向保留雲港商行的視覺識別，讓它既能當作活動紀念，也能成為平常會自然用上的小物。因枕心體積較大，建議在現場購買枕套時，再另外訂購。',
      en: 'The Cloud Harbor throw pillow focuses on a soft hand feel and everyday placement. It works well on beds, sofas, or desk chairs while keeping the Cloud Harbor identity visible as both a keepsake and a practical item.'
    },
    shipping: {
      'zh-TW': '以現場販售與取貨為主，因體枕芯體積較大，所以將不會販售，只會有枕套的部分，枕芯可另外訂購。',
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
        value: { 'zh-TW': '現場販售', en: 'booth sales' }
      }
    ]
  },
  {//fluttershy pillow
    id: '02',
    category: 'merch',
    price: 2000,
    originalPrice: 2400,
    stock: 1,
    image: publicAsset('products/BodyPillows/FS-1.avif'),
    images: [
      publicAsset('products/BodyPillows/FS-2.avif'),
      publicAsset('products/BodyPillows/FS-3.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'booth sales'
    },
    name: {
      'zh-TW': 'Fluttershy 等身抱枕',
      en: 'Fluttershy Body Pillow'
    },
    tag: {
      'zh-TW': '周邊',
      en: 'Merch'
    },
    description: {
      'zh-TW': '柔軟好抱的等身周邊，適合放在房間、床上或收藏用。',
      en: 'A soft Fluttershy pillow for room decor, beds, and post-event collecting.'
    },
    details: {
      'zh-TW': '抱枕以柔軟觸感與日常擺放為主，適合放在房間、沙發或工作座位旁。設計方向保留雲港商行的視覺識別，讓它既能當作活動紀念，也能成為平常會自然用上的小物。因枕心體積較大，建議在現場購買枕套時，再另外訂購。',
      en: 'The Cloud Harbor throw pillow focuses on a soft hand feel and everyday placement. It works well on beds, sofas, or desk chairs while keeping the Cloud Harbor identity visible as both a keepsake and a practical item.'
    },
    shipping: {
      'zh-TW': '以現場販售與取貨為主，因體枕芯體積較大，所以將不會販售，只會有枕套的部分，枕芯可另外訂購。',
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
        value: { 'zh-TW': '現場販售', en: 'booth sales' }
      }
    ]
  },
  {//rainbow pillow
    id: '03',
    category: 'merch',
    price: 2000,
    originalPrice: 2400,
    stock: 1,
    image: publicAsset('products/BodyPillows/RD-1.avif'),
    images: [
      publicAsset('products/BodyPillows/RD-2.avif'),
      publicAsset('products/BodyPillows/RD-3.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'booth sales'
    },
    name: {
      'zh-TW': 'Rainbow Dash 等身抱枕',
      en: 'Rainbow Dash Body Pillow'
    },
    tag: {
      'zh-TW': '周邊',
      en: 'Merch'
    },
    description: {
      'zh-TW': '柔軟好抱的等身周邊，適合放在房間、床上或收藏用。',
      en: 'A soft Rainbow pillow for room decor, beds, and post-event collecting.'
    },
    details: {
      'zh-TW': '抱枕以柔軟觸感與日常擺放為主，適合放在房間、沙發或工作座位旁。設計方向保留雲港商行的視覺識別，讓它既能當作活動紀念，也能成為平常會自然用上的小物。因枕心體積較大，建議在現場購買枕套時，再另外訂購。',
      en: 'The Cloud Harbor throw pillow focuses on a soft hand feel and everyday placement. It works well on beds, sofas, or desk chairs while keeping the Cloud Harbor identity visible as both a keepsake and a practical item.'
    },
    shipping: {
      'zh-TW': '以現場販售與取貨為主，因體枕芯體積較大，所以將不會販售，只會有枕套的部分，枕芯可另外訂購。',
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
        value: { 'zh-TW': '現場販售', en: 'booth sales' }
      }
    ]
  },
  {//pinkie pillow
    id: '04',
    category: 'merch',
    price: 2000,
    originalPrice: 2400,
    stock: 1,
    image: publicAsset('products/BodyPillows/PP-1.avif'),
    // images: [
    //   publicAsset('products/BodyPillows/PP-2.avif'),
    //   publicAsset('products/BodyPillows/PP-3.avif')
    // ],
    location: {
      'zh-TW': '現場販售',
      en: 'booth sales'
    },
    name: {
      'zh-TW': 'Pinkie Pie 等身抱枕',
      en: 'Pinkie Pie Body Pillow'
    },
    tag: {
      'zh-TW': '周邊',
      en: 'Merch'
    },
    description: {
      'zh-TW': '柔軟好抱的等身周邊，適合放在房間、床上或收藏用。',
      en: 'A soft Pinkie Pie pillow for room decor, beds, and post-event collecting.'
    },
    details: {
      'zh-TW': '抱枕以柔軟觸感與日常擺放為主，適合放在房間、沙發或工作座位旁。設計方向保留雲港商行的視覺識別，讓它既能當作活動紀念，也能成為平常會自然用上的小物。因枕心體積較大，建議在現場購買枕套時，再另外訂購。',
      en: 'The Cloud Harbor throw pillow focuses on a soft hand feel and everyday placement. It works well on beds, sofas, or desk chairs while keeping the Cloud Harbor identity visible as both a keepsake and a practical item.'
    },
    shipping: {
      'zh-TW': '以現場販售與取貨為主，因體枕芯體積較大，所以將不會販售，只會有枕套的部分，枕芯可另外訂購。',
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
        value: { 'zh-TW': '現場販售', en: 'booth sales' }
      }
    ]
  },
  // {//applejack pillow
    // id: '05',
    // category: 'merch',
    // price: 2000,
    // originalPrice: 2400,
    // stock: 1,
    // image: publicAsset('products/BodyPillows/AJ-1.avif'),
    // images: [
    //   publicAsset('products/BodyPillows/AJ-2.avif'),
    //   publicAsset('products/BodyPillows/AJ-3.avif')
    // ],
  //   location: {
  //     'zh-TW': '現場販售',
  //     en: 'booth sales'
  //   },
  //   name: {
  //     'zh-TW': 'Applejack 等身抱枕',
  //     en: 'Applejack Body Pillow'
  //   },
  //   tag: {
  //     'zh-TW': '周邊',
  //     en: 'Merch'
  //   },
  //   description: {
  //     'zh-TW': '柔軟好抱的等身周邊，適合放在房間、床上或收藏用。',
  //     en: 'A soft Applejack pillow for room decor, beds, and post-event collecting.'
  //   },
  //   details: {
  //     'zh-TW': '抱枕以柔軟觸感與日常擺放為主，適合放在房間、沙發或工作座位旁。設計方向保留雲港商行的視覺識別，讓它既能當作活動紀念，也能成為平常會自然用上的小物。因枕心體積較大，建議在現場購買枕套時，再另外訂購。',
  //     en: 'The Cloud Harbor throw pillow focuses on a soft hand feel and everyday placement. It works well on beds, sofas, or desk chairs while keeping the Cloud Harbor identity visible as both a keepsake and a practical item.'
  //   },
  //   shipping: {
  //     'zh-TW': '以現場販售與取貨為主，因體枕芯體積較大，所以將不會販售，只會有枕套的部分，枕芯可另外訂購。',
  //     en: 'Sales and pickup will primarily be available at the event. Due to the large size of the body pillow insert, only the pillowcase will be sold. The pillow insert is not included and can be purchased separately.'
  //   },
  //   badges: [
  //     {
  //       'zh-TW': '柔軟周邊',
  //       en: 'Soft Merch'
  //     },
  //     {
  //       'zh-TW': '活動收藏',
  //       en: 'Event Collectible'
  //     }
  //   ],
  //   highlights: [
  //     {
  //       'zh-TW': '180 x 60 cm 等身尺寸，雙面不同姿勢設計，依角色個性打造，正反皆有不同魅力。',
  //       en: "180 x 60 cm life-size design with unique artwork on both sides, featuring different poses that capture the character's personality."
  //     },
  //     {
  //       'zh-TW': '採用 New 2WAY 高彈性布料，觸感柔滑細緻，色彩鮮豔，完整呈現插畫細節',
  //       en: 'Made with premium New 2WAY fabric, offering a soft, smooth feel with vibrant color reproduction and exceptional print detail.'
  //     },
  //     {
  //       'zh-TW': '側邊隱藏式拉鍊搭配高解析印刷，構圖預留安全邊與出血範圍，兼顧美觀、舒適與品質。',
  //       en: 'Hidden side zipper and high-quality printing, with artwork designed to account for bleed and safe margins for a clean, professional finish.'
  //     }
  //   ],
  //   specs: [
  //     {
  //       label: { 'zh-TW': '類別', en: 'Category' },
  //       value: { 'zh-TW': '周邊', en: 'Merch' }
  //     },
  //     {
  //       label: { 'zh-TW': '尺寸', en: 'Size' },
  //       value: { 'zh-TW': '長寬約 180 x 60 cm', en: 'Approx. 180 x 60 cm' }
  //     },
  //     {
  //       label: { 'zh-TW': '販售方式', en: 'Sales' },
  //       value: { 'zh-TW': '現場販售', en: 'booth sales' }
  //     }
  //   ]
  // },
   // {//rarity pillow
    // id: '06',
    // category: 'merch',
    // price: 2000,
    // originalPrice: 2400,
    // stock: 1,
    // image: publicAsset('products/BodyPillows/RR-1.avif'),
    // images: [
    //   publicAsset('products/BodyPillows/RR-2.avif'),
    //   publicAsset('products/BodyPillows/RR-3.avif')
    // ],
  //   location: {
  //     'zh-TW': '現場販售',
  //     en: 'booth sales'
  //   },
  //   name: {
  //     'zh-TW': 'Rarity 等身抱枕',
  //     en: 'Rarity Body Pillow'
  //   },
  //   tag: {
  //     'zh-TW': '周邊',
  //     en: 'Merch'
  //   },
  //   description: {
  //     'zh-TW': '柔軟好抱的雲港周邊，適合放在房間、座位或活動後收藏。',
  //     en: 'A soft Rarity pillow for room decor, desk chairs, and post-event collecting.'
  //   },
  //   details: {
  //     'zh-TW': '抱枕以柔軟觸感與日常擺放為主，適合放在房間、沙發或工作座位旁。設計方向保留雲港商行的視覺識別，讓它既能當作活動紀念，也能成為平常會自然用上的小物。因枕心體積較大，建議在現場購買枕套時，再另外訂購。',
  //     en: 'The Cloud Harbor throw pillow focuses on a soft hand feel and everyday placement. It works well on beds, sofas, or desk chairs while keeping the Cloud Harbor identity visible as both a keepsake and a practical item.'
  //   },
  //   shipping: {
  //     'zh-TW': '以現場販售與取貨為主，因體枕芯體積較大，所以將不會販售，只會有枕套的部分，枕芯可另外訂購。',
  //     en: 'Sales and pickup will primarily be available at the event. Due to the large size of the body pillow insert, only the pillowcase will be sold. The pillow insert is not included and can be purchased separately.'
  //   },
  //   badges: [
  //     {
  //       'zh-TW': '柔軟周邊',
  //       en: 'Soft Merch'
  //     },
  //     {
  //       'zh-TW': '活動收藏',
  //       en: 'Event Collectible'
  //     }
  //   ],
  //   highlights: [
  //     {
  //       'zh-TW': '180 x 60 cm 等身尺寸，雙面不同姿勢設計，依角色個性打造，正反皆有不同魅力。',
  //       en: "180 x 60 cm life-size design with unique artwork on both sides, featuring different poses that capture the character's personality."
  //     },
  //     {
  //       'zh-TW': '採用 New 2WAY 高彈性布料，觸感柔滑細緻，色彩鮮豔，完整呈現插畫細節',
  //       en: 'Made with premium New 2WAY fabric, offering a soft, smooth feel with vibrant color reproduction and exceptional print detail.'
  //     },
  //     {
  //       'zh-TW': '側邊隱藏式拉鍊搭配高解析印刷，構圖預留安全邊與出血範圍，兼顧美觀、舒適與品質。',
  //       en: 'Hidden side zipper and high-quality printing, with artwork designed to account for bleed and safe margins for a clean, professional finish.'
  //     }
  //   ],
  //   specs: [
  //     {
  //       label: { 'zh-TW': '類別', en: 'Category' },
  //       value: { 'zh-TW': '周邊', en: 'Merch' }
  //     },
  //     {
  //       label: { 'zh-TW': '尺寸', en: 'Size' },
  //       value: { 'zh-TW': '長寬約 180 x 60 cm', en: 'Approx. 180 x 60 cm' }
  //     },
  //     {
  //       label: { 'zh-TW': '販售方式', en: 'Sales' },
  //       value: { 'zh-TW': '現場販售', en: 'booth sales' }
  //     }
  //   ]
  // },
  {
  id: '07',
  category: 'merch',
  price: 180,
  originalPrice: 200,
  stock: 2,
  image: publicAsset('products/YearlyDecorations/1.avif'),
  location: {
    'zh-TW': 'TWBC 現場',
    en: 'booth'
  },
  name: {
    'zh-TW': '年節吊飾',
    en: 'Lunar New Year Hanging Decoration'
  },
  tag: {
    'zh-TW': '年飾',
    en: 'New Year Decoration'
  },
  description: {
    'zh-TW': '結合《彩虹小馬》角色與新春祝福元素，為年節空間增添喜氣。',
    en: 'Combines My Little Pony characters with festive Lunar New Year elements to bring extra cheer to your space.'
  },
  details: {
    'zh-TW': '以六位主角搭配新春圖案與吉祥祝福文字，採用直式吊掛設計，適合懸掛於門板、牆面或攤位空間。鮮明的紅金配色與立體裝飾效果，兼具節慶布置與角色收藏價值。',
    en: 'Features the Mane 6 alongside festive patterns and auspicious New Year greetings. Its vertical hanging design is suitable for doors, walls, or booth displays. The vivid red-and-gold palette and layered decorative details make it both a festive decoration and a collectible character item.'
  },
  shipping: {
    'zh-TW': '以現場販售與取貨為主，商品數量有限，售完為止。',
    en: 'Primarily available for purchase and pickup at the booth. Quantities are limited and available while supplies last.'
  },
  badges: [
    {
      'zh-TW': '六主角',
      en: 'Mane 6'
    },
    {
      'zh-TW': '馬年限定',
      en: 'Horse Year Edition'
    }
  ],
  highlights: [
    {
      'zh-TW': '六位主角結合新春吉祥元素。',
      en: 'Features the Mane 6 with auspicious New Year elements.'
    },
    {
      'zh-TW': '直式吊掛設計，適合門板與牆面布置。',
      en: 'Vertical hanging design for decorating doors and walls.'
    },
    {
      'zh-TW': '紅金配色與立體層次，增添喜氣氛圍。',
      en: 'Red-and-gold colors with layered details create a festive atmosphere.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: { 'zh-TW': '年節裝飾品', en: 'Lunar New Year Decoration' }
    },
    {
      label: { 'zh-TW': '形式', en: 'Format' },
      value: { 'zh-TW': '直式吊掛飾品', en: 'Vertical Hanging Decoration' }
    },
    {
      label: { 'zh-TW': '販售方式', en: 'Sales' },
      value: { 'zh-TW': '現場販售', en: 'Available at the booth' }
    }
  ]
},
  {
    id: '08',
    category: 'merch',
    price: 180,
    originalPrice: 200,//150
    stock: 3,
    image: publicAsset('products/YearlyDecorations/2.avif'),
    images: [
      publicAsset('products/YearlyDecorations/3.avif'),
      publicAsset('products/YearlyDecorations/4.avif'),
      publicAsset('products/YearlyDecorations/5.avif')
    ],
    location: {
      'zh-TW': 'TWBC 現場',
      en: 'booth'
    },
    name: {
      'zh-TW': '立體春聯掛飾',
      en: 'Vertical Hanging Banner'
    },
    tag: {
      'zh-TW': '年飾',
      en: 'Yearly Decoration'
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
      'zh-TW': '以現場販售與取貨為主，因體積較大，建議活動早段購買或預留。',
      en: 'Primarily sold and picked up at the booth. Because it is bulkier, early purchase or reservation is recommended.'
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
        value: { 'zh-TW': '現場販售', en: 'booth sales' }
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
