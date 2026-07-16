import { publicAsset } from '../../composables/usePublicAssets';
import type { Product } from './types';

const bodyPillowDefaults = {
  category: 'body-pillows',
  stock: 1
} satisfies Pick<Product, 'category' | 'stock'>;

export const bodyPillows: Product[] = [
  //twilight
  // {
  //   id: '01',
  //   ...bodyPillowDefaults,
  //   price: 2000,
  //   originalPrice: 2400,
  //   images: [
  //     publicAsset('products/BodyPillows/TS-1.avif'),
  //     publicAsset('products/BodyPillows/TS-2.avif'),
  //     publicAsset('products/BodyPillows/TS-3.avif')
  //   ],
  //   location: {
  //     'zh-TW': '現場販售',
  //     en: 'booth sales'
  //   },
  //   name: {
  //     'zh-TW': '暮光閃閃等身抱枕套',
  //     en: 'Twilight Body Pillow Case'
  //   },
  //   tag: {
  //     'zh-TW': '周邊',
  //     en: 'Merch'
  //   },
  //   description: {
  //     'zh-TW': '柔軟好抱的等身周邊，適合放在房間、床上或收藏用。',
  //     en: 'A soft Twilight pillow for room decor, beds, and post-event collecting.'
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
  //fluttershy
  {
    id: '02',
    ...bodyPillowDefaults,
    price: 2000,
    originalPrice: 2400,
    images: [
      // publicAsset('products/BodyPillows/FS-1.avif'),
      // publicAsset('products/BodyPillows/FS-2.avif'),
      publicAsset('products/BodyPillows/FS-3.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'booth sales'
    },
    name: {
      'zh-TW': '柔柔等身抱枕套',
      en: 'Fluttershy Body Pillow Case'
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
  //rainbow
  {
    id: '03',
    ...bodyPillowDefaults,
    price: 2000,
    originalPrice: 2400,
    images: [
      // publicAsset('products/BodyPillows/RD-1.avif'),
      publicAsset('products/BodyPillows/RD-2.avif')
      // publicAsset('products/BodyPillows/RD-3.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'booth sales'
    },
    name: {
      'zh-TW': '雲寶等身抱枕套',
      en: 'Rainbow Dash Body Pillow Case'
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
  {//pinkie
    id: '04',
    ...bodyPillowDefaults,
    price: 2000,
    originalPrice: 2400,
    images: [
      publicAsset('products/BodyPillows/PP-1.avif')
    //   publicAsset('products/BodyPillows/PP-2.avif'),
    //   publicAsset('products/BodyPillows/PP-3.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'booth sales'
    },
    name: {
      'zh-TW': '碧琪等身抱枕套',
      en: 'Pinkie Pie Body Pillow Case'
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
  }
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
  //     'zh-TW': '蘋果嘉兒等身抱枕套',
  //     en: 'Applejack Body Pillow Case'
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
  //     'zh-TW': '珍奇等身抱枕套',
  //     en: 'Rarity Body Pillow Case'
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
];
