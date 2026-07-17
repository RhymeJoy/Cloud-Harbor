import { publicAsset } from '../../composables/usePublicAssets';
import type { Product } from './types';

const bodyPillowDefaults = {
  category: 'body-pillows',
  stock: 1
} satisfies Pick<Product, 'category' | 'stock'>;

export const bodyPillows: Product[] = [
  //twilight
  // {
  //   id: '1',
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
    id: '2',
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
      'zh-TW': '柔柔',
      en: 'Fluttershy'
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
    id: '3',
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
      'zh-TW': '雲寶',
      en: 'Rainbow Dash'
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
    id: '4',
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
      'zh-TW': '碧琪',
      en: 'Pinkie Pie'
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
  {
    id: '7',
    ...bodyPillowDefaults,
    price: 1600,
    stock: 0,
    stockText: {
      'zh-TW': '現場或私訊訂購',
      en: 'Booth or DM order'
    },
    images: [
      publicAsset('products/BodyPillows/pillow.avif')
    ],
    location: {
      'zh-TW': '現場或私訊訂購',
      en: 'Booth or DM order'
    },
    name: {
      'zh-TW': '等身抱枕羽絨棉枕芯 180 x 60 cm',
      en: 'Down-Like Fiberfill Body Pillow Insert 180 x 60 cm'
    },
    tag: {
      'zh-TW': '羽絨棉枕芯',
      en: 'Down-Like Fiberfill'
    },
    description: {
      'zh-TW': '180 x 60 cm 等身抱枕羽絨棉枕芯，觸感較輕柔蓬鬆、包覆感較強，需現場或私訊訂購。',
      en: 'A 180 x 60 cm body pillow insert with down-like fiberfill, offering a lighter, softer, fluffier feel by booth or DM order.'
    },
    details: {
      'zh-TW': '此款為羽絨棉等身抱枕枕芯，價格 1600 元，目前不直接販售，需現場或私訊訂購。羽絨棉觸感較輕柔蓬鬆、包覆感較強。訂購時請提供電話、姓名與地址，付款完成後再安排郵寄。',
      en: 'This down-like fiberfill body pillow insert is NT$1600 and is currently available by booth or DM order only. The fill feels lighter, softer, and fluffier with a more enveloping feel. Please provide your phone number, name, and address when ordering; shipping is arranged after payment is completed.'
    },
    shipping: {
      'zh-TW': '訂購時請提供電話、姓名與收件地址；付款完成後再郵寄寄出。大型枕芯以實際可寄送方式與運費為準。',
      en: 'Please provide your phone number, name, and shipping address when ordering. The pillow insert will be shipped after payment is completed, with the final delivery method and shipping fee confirmed for the oversized item.'
    },
    badges: [
      { 'zh-TW': '180 x 60 cm', en: '180 x 60 cm' },
      { 'zh-TW': '羽絨棉', en: 'Down-Like Fiberfill' },
      { 'zh-TW': '訂購制', en: 'Order Only' }
    ],
    highlights: [
      {
        'zh-TW': '尺寸為 180 x 60 cm，可搭配等身抱枕套使用。',
        en: 'Measures 180 x 60 cm for use with body pillow cases.'
      },
      {
        'zh-TW': '羽絨棉 1600 元，主打輕柔、蓬鬆與柔軟包覆感。',
        en: 'Down-like fiberfill is NT$1600, focused on a light, soft, fluffy feel.'
      },
      {
        'zh-TW': '需現場或私訊訂購，付款完成後再安排郵寄。',
        en: 'Available by booth or DM order, shipped after payment is completed.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '等身抱枕枕芯', en: 'Body Pillow Insert' }
      },
      {
        label: { 'zh-TW': '尺寸', en: 'Size' },
        value: { 'zh-TW': '180 x 60 cm', en: '180 x 60 cm' }
      },
      {
        label: { 'zh-TW': '棉種', en: 'Fill' },
        value: { 'zh-TW': '羽絨棉', en: 'Down-like fiberfill' }
      },
      {
        label: { 'zh-TW': '價格', en: 'Price' },
        value: { 'zh-TW': '1600 元', en: 'NT$1600' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場或私訊訂購，付款後郵寄', en: 'Booth or DM order, shipped after payment' }
      }
    ]
  },
  {
    id: '8',
    ...bodyPillowDefaults,
    price: 1400,
    stock: 0,
    stockText: {
      'zh-TW': '現場或私訊訂購',
      en: 'Booth or DM order'
    },
    images: [
      publicAsset('products/BodyPillows/pillow.avif')
    ],
    location: {
      'zh-TW': '現場或私訊訂購',
      en: 'Booth or DM order'
    },
    name: {
      'zh-TW': '等身抱枕雲上七孔棉枕芯 180 x 60 cm',
      en: 'Cloud Seven-Hole Fiberfill Body Pillow Insert 180 x 60 cm'
    },
    tag: {
      'zh-TW': '雲上七孔棉枕芯',
      en: 'Cloud Seven-Hole Fiberfill'
    },
    description: {
      'zh-TW': '180 x 60 cm 等身抱枕雲上七孔棉枕芯，中空七孔纖維較透氣、回彈支撐較穩，需現場或私訊訂購。',
      en: 'A 180 x 60 cm body pillow insert with Cloud seven-hole fiberfill, using hollow fibers for breathability, rebound, and steadier support.'
    },
    details: {
      'zh-TW': '此款為雲上七孔棉等身抱枕枕芯，價格 1400 元，目前不直接販售，需現場或私訊訂購。中空七孔纖維較透氣，並提供較穩定的回彈與支撐。訂購時請提供電話、姓名與地址，付款完成後再安排郵寄。',
      en: 'This Cloud seven-hole fiberfill body pillow insert is NT$1400 and is currently available by booth or DM order only. The hollow seven-hole fiberfill is more breathable and provides steadier rebound and support. Please provide your phone number, name, and address when ordering; shipping is arranged after payment is completed.'
    },
    shipping: {
      'zh-TW': '訂購時請提供電話、姓名與收件地址；付款完成後再郵寄寄出。大型枕芯以實際可寄送方式與運費為準。',
      en: 'Please provide your phone number, name, and shipping address when ordering. The pillow insert will be shipped after payment is completed, with the final delivery method and shipping fee confirmed for the oversized item.'
    },
    badges: [
      { 'zh-TW': '180 x 60 cm', en: '180 x 60 cm' },
      { 'zh-TW': '雲上七孔棉', en: 'Cloud Seven-Hole Fiberfill' },
      { 'zh-TW': '訂購制', en: 'Order Only' }
    ],
    highlights: [
      {
        'zh-TW': '尺寸為 180 x 60 cm，可搭配等身抱枕套使用。',
        en: 'Measures 180 x 60 cm for use with body pillow cases.'
      },
      {
        'zh-TW': '雲上七孔棉 1400 元，主打中空纖維的透氣、回彈與支撐。',
        en: 'Cloud seven-hole fiberfill is NT$1400, focused on breathable hollow fibers with rebound and support.'
      },
      {
        'zh-TW': '需現場或私訊訂購，付款完成後再安排郵寄。',
        en: 'Available by booth or DM order, shipped after payment is completed.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '等身抱枕枕芯', en: 'Body Pillow Insert' }
      },
      {
        label: { 'zh-TW': '尺寸', en: 'Size' },
        value: { 'zh-TW': '180 x 60 cm', en: '180 x 60 cm' }
      },
      {
        label: { 'zh-TW': '棉種', en: 'Fill' },
        value: { 'zh-TW': '雲上七孔棉', en: 'Cloud seven-hole fiberfill' }
      },
      {
        label: { 'zh-TW': '價格', en: 'Price' },
        value: { 'zh-TW': '1400 元', en: 'NT$1400' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場或私訊訂購，付款後郵寄', en: 'Booth or DM order, shipped after payment' }
      }
    ]
  }
  // {//applejack pillow
    // id: '5',
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
    // id: '6',
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
