import { publicAsset } from '../../composables/usePublicAssets';
import type { Product } from './types';

const yearlyDecorationDefaults = {
  category: 'yearly-decorations'
} satisfies Pick<Product, 'category'>;

export const yearlyDecorations: Product[] = [
  {
  id: '01',
  ...yearlyDecorationDefaults,
  price: 180,
  originalPrice: 200,//150
  stock: 2,
  images: [publicAsset('products/YearlyDecorations/1.avif')],
  location: {
    'zh-TW': '現場販售',
    en: 'booth sales'
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
  id: '02',
  ...yearlyDecorationDefaults,
  price: 180,
  originalPrice: 200,//150
  stock: 3,
  images: [
    publicAsset('products/YearlyDecorations/2.avif'),
    publicAsset('products/YearlyDecorations/3.avif'),
    publicAsset('products/YearlyDecorations/4.avif'),
    publicAsset('products/YearlyDecorations/5.avif')
  ],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': '雙面立體春聯掛飾',
    en: 'Double-Sided 3D Lunar New Year Hanging Banner'
  },
  tag: {
    'zh-TW': '年飾',
    en: 'New Year Decoration'
  },
  description: {
    'zh-TW': '結合《彩虹小馬》角色與吉祥賀詞，打造充滿喜氣的立體春聯掛飾。',
    en: 'A festive 3D hanging banner featuring My Little Pony characters and auspicious Lunar New Year greetings.'
  },
  details: {
    'zh-TW': '以《彩虹小馬》角色搭配「招財進寶」等新春賀詞，運用紅金配色與立體裝飾呈現熱鬧的節慶氛圍。直式設計適合懸掛於門板、牆面或展示空間，可作為年節布置，也適合角色周邊收藏。',
    en: 'Features My Little Pony characters alongside auspicious greetings such as “May Wealth and Prosperity Come Your Way.” Its red-and-gold palette and layered details create a lively festive look. The vertical design is suitable for doors, walls, and display spaces as both a Lunar New Year decoration and a collectible.'
  },
  shipping: {
    'zh-TW': '以現場販售與取貨為主，商品數量有限，售完為止。',
    en: 'Primarily available for purchase and pickup at the booth. Quantities are limited and available while supplies last.'
  },
  badges: [
    {
      'zh-TW': '立體設計',
      en: '3D Design'
    },
    {
      'zh-TW': '新春賀詞',
      en: 'Festive Greeting'
    }
  ],
  highlights: [
    {
      'zh-TW': '角色圖案結合傳統新春吉祥賀詞。',
      en: 'Combines character artwork with traditional New Year greetings.'
    },
    {
      'zh-TW': '紅金配色與立體層次增添節慶氛圍。',
      en: 'Red-and-gold colors and layered details create a festive appearance.'
    },
    {
      'zh-TW': '適合懸掛於門板、牆面或展示空間。',
      en: 'Suitable for hanging on doors, walls, or display spaces.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: {
        'zh-TW': '年節裝飾品',
        en: 'Lunar New Year Decoration'
      }
    },
    {
      label: { 'zh-TW': '形式', en: 'Format' },
      value: {
        'zh-TW': '直式立體掛飾',
        en: 'Vertical 3D Hanging Banner'
      }
    },
    {
      label: { 'zh-TW': '販售方式', en: 'Sales' },
      value: {
        'zh-TW': '現場販售',
        en: 'Available at the Booth'
      }
    }
  ]
  },
  {
  id: '03',
  ...yearlyDecorationDefaults,
  price: 100,
  originalPrice: 120,//80
  stock: 2,
  images: [
    publicAsset('products/YearlyDecorations/7.avif'),
    publicAsset('products/YearlyDecorations/6.avif')
  ],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': '雙面年節貼飾 (小)',
    en: 'Double-Sided Lunar New Year Decoration (Small)'
  },
  tag: {
    'zh-TW': '年飾',
    en: 'New Year Decoration'
  },
  description: {
    'zh-TW': '正反兩面分別呈現暮光閃閃與柔柔，搭配喜氣的新春造型與吉祥元素。',
    en: 'A double-sided decoration featuring Twilight Sparkle and Fluttershy in festive Lunar New Year designs.'
  },
  details: {
    'zh-TW': '採用雙面角色設計，正面為身穿新春服飾的暮光閃閃，背面則為柔柔，並搭配元寶、橘子、紅包與「福」字等吉祥元素。紅金配色與立體裝飾細節充滿年節氣氛，可依喜好切換展示面，適合懸掛於門板、牆面或收藏展示。',
    en: 'This double-sided decoration features Twilight Sparkle on the front and Fluttershy on the back, both dressed in festive Lunar New Year styles. Gold ingots, oranges, red envelopes, and lucky symbols complete the design. It can be displayed on either side and is suitable for doors, walls, or character collections.'
  },
  shipping: {
    'zh-TW': '以現場販售與取貨為主，商品數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    {
      'zh-TW': '暮光閃閃＆柔柔',
      en: 'Twilight & Fluttershy'
    },
    {
      'zh-TW': '雙面設計',
      en: 'Double-Sided'
    }
  ],
  highlights: [
    {
      'zh-TW': '正面為暮光閃閃，背面為柔柔。',
      en: 'Features Twilight Sparkle on the front and Fluttershy on the back.'
    },
    {
      'zh-TW': '雙面皆有完整的新春角色造型與吉祥圖案。',
      en: 'Both sides feature complete festive character artwork and lucky motifs.'
    },
    {
      'zh-TW': '可依展示空間與喜好自由切換正反面。',
      en: 'Either side can be displayed to match your space or preference.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: {
        'zh-TW': '年節裝飾品',
        en: 'Lunar New Year Decoration'
      }
    },
    {
      label: { 'zh-TW': '形式', en: 'Format' },
      value: {
        'zh-TW': '雙面立體掛飾',
        en: 'Double-Sided 3D Hanging Decoration'
      }
    },
    {
      label: { 'zh-TW': '販售方式', en: 'Sales' },
      value: {
        'zh-TW': '現場販售',
        en: 'Available at the Booth'
      }
    }
  ]
},
{
  id: '04',
  ...yearlyDecorationDefaults,
  price: 150,
  originalPrice: 180,//120
  stock: 3,
  images: [
    publicAsset('products/YearlyDecorations/9.avif'),
    publicAsset('products/YearlyDecorations/8.avif'),
    publicAsset('products/YearlyDecorations/10.avif'),
    publicAsset('products/YearlyDecorations/11.avif')
  ],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': '六主角橫式春聯',
    en: 'Mane 6 Lunar New Year Banner'
  },
  tag: {
    'zh-TW': '年飾',
    en: 'New Year Decoration'
  },
  description: {
    'zh-TW': '以六位主角搭配「馬年大吉」賀詞，打造充滿喜氣的新春橫式門飾。',
    en: 'A festive horizontal banner featuring the Mane 6 and a lucky Year of the Horse greeting.'
  },
  details: {
    'zh-TW': '以六位主角圍繞「馬年大吉」賀詞，搭配紅金配色、祥雲紋樣與立體裝飾細節，呈現熱鬧的新春氛圍。橫式設計適合布置於門框上方、牆面、櫃檯或展示空間，也可作為《彩虹小馬》年節周邊收藏。',
    en: 'Features the Mane 6 surrounding a “Good Fortune in the Year of the Horse” greeting, complemented by red-and-gold colors, traditional cloud patterns, and layered decorative details. Its horizontal format is suitable for displaying above doorways, on walls, counters, or collection displays.'
  },
  shipping: {
    'zh-TW': '以現場販售與取貨為主，商品數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    {
      'zh-TW': '六主角',
      en: 'Mane 6'
    },
    {
      'zh-TW': '馬年大吉',
      en: 'Year of the Horse'
    }
  ],
  highlights: [
    {
      'zh-TW': '六位主角共同呈現熱鬧的新春主題。',
      en: 'Features all six main characters in a festive New Year design.'
    },
    {
      'zh-TW': '紅金配色搭配「馬年大吉」吉祥賀詞。',
      en: 'Combines a red-and-gold palette with a lucky Year of the Horse greeting.'
    },
    {
      'zh-TW': '橫式設計適合門框上方、牆面與攤位布置。',
      en: 'Horizontal design suitable for doorways, walls, and booth displays.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: {
        'zh-TW': '年節裝飾品',
        en: 'Lunar New Year Decoration'
      }
    },
    {
      label: { 'zh-TW': '形式', en: 'Format' },
      value: {
        'zh-TW': '立體橫式春聯',
        en: '3D Horizontal New Year Banner'
      }
    },
    {
      label: { 'zh-TW': '販售方式', en: 'Sales' },
      value: {
        'zh-TW': '現場販售',
        en: 'Available at the Booth'
      }
    }
  ]
},
{
  id: '05',
  ...yearlyDecorationDefaults,
  price: 200,
  originalPrice: 240,//180
  stock: 1,
  images: [publicAsset('products/YearlyDecorations/12.avif')],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': '立體新春掛軸',
    en: '3D Lunar New Year Hanging Scroll'
  },
  tag: {
    'zh-TW': '年飾',
    en: 'New Year Decoration'
  },
  description: {
    'zh-TW': '以暮光閃閃與碧琪搭配吉祥賀詞，呈現喜氣十足的立體新春掛軸。',
    en: 'A festive 3D hanging scroll featuring Twilight Sparkle, Pinkie Pie, and auspicious Lunar New Year greetings.'
  },
  details: {
    'zh-TW': '以暮光閃閃與碧琪為主角，搭配「諸事順遂」與「馬上有福」等吉祥賀詞，並融入元寶、錢袋與傳統紋樣。上下橫桿構成卷軸式造型，結合紅金配色、亮粉與立體裝飾細節，適合懸掛於門板、牆面或展示空間。',
    en: 'Features Twilight Sparkle and Pinkie Pie alongside auspicious greetings wishing good fortune and success. Gold ingots, a lucky money bag, and traditional patterns complete the design. Its scroll-style structure, red-and-gold palette, glitter, and layered details make it suitable for doors, walls, and display spaces.'
  },
  shipping: {
    'zh-TW': '以現場販售與取貨為主，商品數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    {
      'zh-TW': '暮光閃閃＆碧琪',
      en: 'Twilight & Pinkie Pie'
    },
    {
      'zh-TW': '卷軸造型',
      en: 'Scroll Design'
    }
  ],
  highlights: [
    {
      'zh-TW': '暮光閃閃與碧琪搭配新春吉祥賀詞。',
      en: 'Features Twilight Sparkle and Pinkie Pie with auspicious New Year greetings.'
    },
    {
      'zh-TW': '上下橫桿構成傳統卷軸式外觀。',
      en: 'Top and bottom rods create a traditional hanging-scroll appearance.'
    },
    {
      'zh-TW': '紅金配色、亮粉與立體細節增添節慶氣氛。',
      en: 'Red-and-gold colors, glitter, and layered details create a festive look.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: {
        'zh-TW': '年節裝飾品',
        en: 'Lunar New Year Decoration'
      }
    },
    {
      label: { 'zh-TW': '形式', en: 'Format' },
      value: {
        'zh-TW': '立體卷軸式掛飾',
        en: '3D Hanging Scroll Decoration'
      }
    },
    {
      label: { 'zh-TW': '販售方式', en: 'Sales' },
      value: {
        'zh-TW': '現場販售',
        en: 'Available at the Booth'
      }
    }
  ]
}
,  {
  id: '06',
  ...yearlyDecorationDefaults,
  price: 200,
  originalPrice: 220,//180
  stock: 2,
  images: [
    publicAsset('products/YearlyDecorations/14.avif'),
    publicAsset('products/YearlyDecorations/15.avif')
  ],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': '雙面年節貼飾 (大)',
    en: 'Double-Sided Lunar New Year Decoration (Large)'
  },
  tag: {
    'zh-TW': '年飾',
    en: 'New Year Decoration'
  },
  description: {
    'zh-TW': '正反兩面分別呈現暮光閃閃與柔柔，搭配喜氣的新春造型與吉祥元素。',
    en: 'A double-sided decoration featuring Twilight Sparkle and Fluttershy in festive Lunar New Year designs.'
  },
  details: {
    'zh-TW': '採用雙面角色設計，正面為身穿新春服飾的暮光閃閃，背面則為柔柔，並搭配元寶、橘子、紅包與「福」字等吉祥元素。紅金配色與立體裝飾細節充滿年節氣氛，可依喜好切換展示面，適合懸掛於門板、牆面或收藏展示。',
    en: 'This double-sided decoration features Twilight Sparkle on the front and Fluttershy on the back, both dressed in festive Lunar New Year styles. Gold ingots, oranges, red envelopes, and lucky symbols complete the design. It can be displayed on either side and is suitable for doors, walls, or character collections.'
  },
  shipping: {
    'zh-TW': '以現場販售與取貨為主，商品數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    {
      'zh-TW': '暮光閃閃＆柔柔',
      en: 'Twilight & Fluttershy'
    },
    {
      'zh-TW': '雙面設計',
      en: 'Double-Sided'
    }
  ],
  highlights: [
    {
      'zh-TW': '正面為暮光閃閃，背面為柔柔。',
      en: 'Features Twilight Sparkle on the front and Fluttershy on the back.'
    },
    {
      'zh-TW': '雙面皆有完整的新春角色造型與吉祥圖案。',
      en: 'Both sides feature complete festive character artwork and lucky motifs.'
    },
    {
      'zh-TW': '可依展示空間與喜好自由切換正反面。',
      en: 'Either side can be displayed to match your space or preference.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: {
        'zh-TW': '年節裝飾品',
        en: 'Lunar New Year Decoration'
      }
    },
    {
      label: { 'zh-TW': '形式', en: 'Format' },
      value: {
        'zh-TW': '雙面立體掛飾',
        en: 'Double-Sided 3D Hanging Decoration'
      }
    },
    {
      label: { 'zh-TW': '販售方式', en: 'Sales' },
      value: {
        'zh-TW': '現場販售',
        en: 'Available at the Booth'
      }
    }
  ]
}
,
{
  id: '07',
  ...yearlyDecorationDefaults,
  price: 180,
  originalPrice: 200,//160
  stock: 1,
  images: [publicAsset('products/YearlyDecorations/13.avif')],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': '六主角福字斗方春聯',
    en: 'Mane 6 Fu Character Decoration'
  },
  tag: {
    'zh-TW': '年飾',
    en: 'New Year Decoration'
  },
  description: {
    'zh-TW': '以六位主角圍繞金色「福」字，呈現喜氣鮮明的方形新春裝飾。',
    en: 'A festive square decoration featuring the Mane 6 surrounding a glittering golden “Fu” character.'
  },
  details: {
    'zh-TW': '中央以大型金色「福」字為主視覺，周圍搭配身穿新春服飾的六位主角，以及紅包、燈籠和吉祥文字等年節元素。方形斗方設計結合紅金配色、亮粉與立體細節，適合布置於門板、牆面、窗戶或展示空間。',
    en: 'Features a large golden “Fu” character at the center, surrounded by the Mane 6 in festive outfits, along with red envelopes, lanterns, and other auspicious motifs. Its square format, red-and-gold palette, glitter, and layered details make it suitable for doors, walls, windows, or display spaces.'
  },
  shipping: {
    'zh-TW': '以現場販售與取貨為主，商品數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    {
      'zh-TW': '六主角',
      en: 'Mane 6'
    },
    {
      'zh-TW': '福字斗方',
      en: 'Fu Character'
    }
  ],
  highlights: [
    {
      'zh-TW': '六位主角共同圍繞大型金色「福」字。',
      en: 'Features the Mane 6 surrounding a large golden “Fu” character.'
    },
    {
      'zh-TW': '紅金配色與亮粉細節增添新春喜氣。',
      en: 'Red-and-gold colors and glitter details create a festive New Year look.'
    },
    {
      'zh-TW': '方形斗方設計，適合門板、牆面與窗戶布置。',
      en: 'Square design suitable for decorating doors, walls, and windows.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: {
        'zh-TW': '年節裝飾品',
        en: 'Lunar New Year Decoration'
      }
    },
    {
      label: { 'zh-TW': '形式', en: 'Format' },
      value: {
        'zh-TW': '立體福字斗方春聯',
        en: '3D Square Fu Character Decoration'
      }
    },
    {
      label: { 'zh-TW': '販售方式', en: 'Sales' },
      value: {
        'zh-TW': '現場販售',
        en: 'Available at the Booth'
      }
    }
  ]
}
];
