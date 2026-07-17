import { publicAsset } from '../../composables/usePublicAssets';
import type { Product } from './types';

const yearlyDecorationDefaults = {
  category: 'yearly-decorations'
} satisfies Pick<Product, 'category'>;

export const getYearlyDecorationStockText = (stock: number) => ({
  'zh-TW': `${stock} 個`,
  en: `${stock} ${stock === 1 ? 'item' : 'items'}`
});

const yearlyDecorationProducts: Product[] = [
  {
  id: '1',
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
    en: 'Year Decoration'
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
  id: '2',
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
    en: 'Year Decoration'
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
  id: '3',
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
    en: 'Year Decoration'
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
  id: '4',
  ...yearlyDecorationDefaults,
  price: 150,
  originalPrice: 180,//120
  stock: 3,
  images: [
    publicAsset('products/YearlyDecorations/8.avif'),
    publicAsset('products/YearlyDecorations/9.avif'),
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
    en: 'Year Decoration'
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
  id: '5',
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
    en: 'Year Decoration'
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
  id: '6',
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
    en: 'Year Decoration'
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
  id: '7',
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
    'zh-TW': '六主角福字斗方春聯 (小)',
    en: 'Mane 6 Fu Character Decoration (Small)'
  },
  tag: {
    'zh-TW': '年飾',
    en: 'Year Decoration'
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
},
{
  id: '8',
  ...yearlyDecorationDefaults,
  price: 200,
  originalPrice: 240,
  stock: 3,
  images: [publicAsset('products/YearlyDecorations/16.avif')],
  location: { 'zh-TW': '現場販售', en: 'Available at the Booth' },
  name: { 'zh-TW': '六主角歡樂福字年飾', en: 'Mane 6 Celebration Fu Decoration' },
  tag: { 'zh-TW': '年飾', en: 'Year Decoration' },
  description: {
    'zh-TW': '六位小馬主角環繞立體金色福字，呈現熱鬧歡聚的新春氣氛。',
    en: 'The Mane 6 gather around a raised golden Fu character for a lively Lunar New Year celebration.'
  },
  details: {
    'zh-TW': '暮光閃閃、蘋果嘉兒、碧琪、柔柔、雲寶與珍奇分布於福字四周，搭配花朵、金元寶與紅包等吉祥元素。金色亮粉與立體層次讓主題更加醒目，適合布置門板、牆面或窗戶。',
    en: 'Twilight Sparkle, Applejack, Pinkie Pie, Fluttershy, Rainbow Dash, and Rarity surround the Fu character with flowers, gold ingots, and red envelopes. Glitter and layered details make it ideal for doors, walls, or windows.'
  },
  shipping: {
    'zh-TW': '主要於攤位現場販售與取貨，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    { 'zh-TW': '六主角歡聚', en: 'Mane 6 Celebration' },
    { 'zh-TW': '立體金色福字', en: 'Raised Golden Fu' }
  ],
  highlights: [
    { 'zh-TW': '六位主角由四周環繞大型金色福字。', en: 'All six characters surround a large golden Fu character.' },
    { 'zh-TW': '花朵、元寶與紅包增添喜氣細節。', en: 'Flowers, gold ingots, and red envelopes add festive detail.' },
    { 'zh-TW': '亮粉與立體剪裁讓畫面更有層次。', en: 'Glitter and layered cutouts add visual depth.' }
  ],
  specs: [
    { label: { 'zh-TW': '類別', en: 'Category' }, value: { 'zh-TW': '年節裝飾品', en: 'Lunar New Year Decoration' } },
    { label: { 'zh-TW': '形式', en: 'Format' }, value: { 'zh-TW': '立體福字斗方年飾', en: '3D Square Fu Decoration' } },
    { label: { 'zh-TW': '販售方式', en: 'Sales' }, value: { 'zh-TW': '現場販售', en: 'Available at the Booth' } }
  ]
},
{
  id: '9',
  ...yearlyDecorationDefaults,
  price: 200,
  originalPrice: 240,
  stock: 3,
  images: [publicAsset('products/YearlyDecorations/17.avif')],
  location: { 'zh-TW': '現場販售', en: 'Available at the Booth' },
  name: { 'zh-TW': '六主角新年大吉福字年飾', en: 'Mane 6 Lucky New Year Fu Decoration' },
  tag: { 'zh-TW': '年飾', en: 'Year Decoration' },
  description: {
    'zh-TW': '金色立體福字搭配六位小馬主角與「新年大吉」祝福，充滿喜氣。',
    en: 'A raised golden Fu character pairs with the Mane 6 and a lucky New Year greeting.'
  },
  details: {
    'zh-TW': '大型福字位於左側，六位小馬主角集中於右側與下方，搭配「新年大吉」、燈籠、鞭炮與金元寶圖案。鮮明紅金配色及亮粉效果適合用於門板、牆面或窗戶的新春布置。',
    en: 'A large Fu character anchors the left side while the Mane 6 appear across the right and bottom, joined by a lucky greeting, lanterns, firecrackers, and gold ingots. Its vivid red-and-gold palette suits doors, walls, or windows.'
  },
  shipping: {
    'zh-TW': '主要於攤位現場販售與取貨，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    { 'zh-TW': '六主角賀年', en: 'Mane 6 New Year' },
    { 'zh-TW': '新年大吉', en: 'Lucky New Year' }
  ],
  highlights: [
    { 'zh-TW': '大型金色福字與新年大吉祝福構成主視覺。', en: 'A large golden Fu character and lucky greeting form the centerpiece.' },
    { 'zh-TW': '六位主角搭配燈籠、鞭炮與元寶圖案。', en: 'The Mane 6 appear with lanterns, firecrackers, and gold ingots.' },
    { 'zh-TW': '紅金配色與亮粉效果呈現熱鬧年味。', en: 'Red-and-gold colors and glitter create a lively festive look.' }
  ],
  specs: [
    { label: { 'zh-TW': '類別', en: 'Category' }, value: { 'zh-TW': '年節裝飾品', en: 'Lunar New Year Decoration' } },
    { label: { 'zh-TW': '形式', en: 'Format' }, value: { 'zh-TW': '立體福字斗方年飾', en: '3D Square Fu Decoration' } },
    { label: { 'zh-TW': '販售方式', en: 'Sales' }, value: { 'zh-TW': '現場販售', en: 'Available at the Booth' } }
  ]
},
{
  id: '10',
  ...yearlyDecorationDefaults,
  price: 160,
  originalPrice: 180,
  stock: 3,
  images: [
    publicAsset('products/YearlyDecorations/18.avif'),
    publicAsset('products/YearlyDecorations/19.avif')
  ],
  location: { 'zh-TW': '現場販售', en: 'Available at the Booth' },
  name: {
    'zh-TW': '暮光閃閃＆碧琪雙面新春年飾',
    en: 'Twilight Sparkle & Pinkie Pie Double-Sided New Year Decoration'
  },
  tag: { 'zh-TW': '年飾', en: 'Year Decoration' },
  description: {
    'zh-TW': '雙面立體年飾，一面為暮光閃閃「大吉大利」，另一面為碧琪「馬上有福」。',
    en: 'A double-sided decoration featuring Twilight Sparkle with “Great Fortune” and Pinkie Pie with “Fortune Arrives.”'
  },
  details: {
    'zh-TW': '正面以穿著新春服飾的暮光閃閃為主角，搭配「大吉大利」、福字燈籠、花朵與鞭炮；背面則是碧琪搭配「馬上有福」、蝴蝶結、燈籠與鞭炮。紅金配色、亮粉描邊與立體剪裁讓兩面皆可獨立展示。',
    en: 'The front features Twilight Sparkle in festive clothing with a Great Fortune greeting, Fu lanterns, flowers, and firecrackers. The reverse features Pinkie Pie with a Fortune Arrives greeting, a bow, lanterns, and firecrackers. Red-and-gold colors, glitter outlines, and layered cutouts make either side display-ready.'
  },
  shipping: {
    'zh-TW': '主要於攤位現場販售與取貨，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    { 'zh-TW': '暮光閃閃＆碧琪', en: 'Twilight & Pinkie Pie' },
    { 'zh-TW': '雙面設計', en: 'Double-Sided' }
  ],
  highlights: [
    { 'zh-TW': '暮光閃閃面搭配「大吉大利」新春祝福。', en: 'Twilight Sparkle side features a Great Fortune greeting.' },
    { 'zh-TW': '碧琪面搭配「馬上有福」吉祥祝福。', en: 'Pinkie Pie side features a Fortune Arrives greeting.' },
    { 'zh-TW': '雙面皆有完整角色圖案與立體亮粉細節。', en: 'Both sides include complete character artwork and glittered layered details.' }
  ],
  specs: [
    { label: { 'zh-TW': '類別', en: 'Category' }, value: { 'zh-TW': '年節裝飾品', en: 'Lunar New Year Decoration' } },
    { label: { 'zh-TW': '形式', en: 'Format' }, value: { 'zh-TW': '雙面立體吊掛年飾', en: 'Double-Sided 3D Hanging Decoration' } },
    { label: { 'zh-TW': '販售方式', en: 'Sales' }, value: { 'zh-TW': '現場販售', en: 'Available at the Booth' } }
  ]
},
{
  id: '11',
  ...yearlyDecorationDefaults,
  price: 180,
  originalPrice: 200,
  stock: 3,
  images: [
    publicAsset('products/YearlyDecorations/20.avif'),
    publicAsset('products/YearlyDecorations/21.avif')
  ],
  location: { 'zh-TW': '現場販售', en: 'Available at the Booth' },
  name: {
    'zh-TW': '小馬好友雙面吉祥年飾',
    en: 'Pony Friends Double-Sided Lucky New Year Decoration'
  },
  tag: { 'zh-TW': '年飾', en: 'Year Decoration' },
  description: {
    'zh-TW': '雙面立體年飾，一面為柔柔、雲寶與暮光閃閃「馬上發財」，另一面為蘋果嘉兒、珍奇與碧琪「事事如意」。',
    en: 'A double-sided decoration featuring Fluttershy, Rainbow Dash, and Twilight Sparkle on one side, with Applejack, Rarity, and Pinkie Pie on the reverse.'
  },
  details: {
    'zh-TW': '正面由柔柔、雲寶與暮光閃閃搭配「馬上發財」祝福；背面則由蘋果嘉兒、珍奇與碧琪搭配「事事如意」。兩面皆以紅金配色呈現，並加入福字燈籠、花朵、元寶與錢袋等吉祥圖案，立體剪裁與亮粉描邊適合雙面展示。',
    en: 'The front pairs Fluttershy, Rainbow Dash, and Twilight Sparkle with a prosperity greeting. The reverse features Applejack, Rarity, and Pinkie Pie with a wish that everything goes well. Both sides use red-and-gold colors with Fu lanterns, flowers, ingots, money bags, layered cutouts, and glitter outlines.'
  },
  shipping: {
    'zh-TW': '主要於攤位現場販售與取貨，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    { 'zh-TW': '六主角組合', en: 'Mane 6 Groups' },
    { 'zh-TW': '雙面設計', en: 'Double-Sided' }
  ],
  highlights: [
    { 'zh-TW': '柔柔、雲寶與暮光閃閃面搭配「馬上發財」。', en: 'Fluttershy, Rainbow Dash, and Twilight Sparkle side features a prosperity greeting.' },
    { 'zh-TW': '蘋果嘉兒、珍奇與碧琪面搭配「事事如意」。', en: 'Applejack, Rarity, and Pinkie Pie side features an everything-goes-well greeting.' },
    { 'zh-TW': '兩面皆有立體角色剪裁與紅金亮粉細節。', en: 'Both sides feature layered character cutouts and red-and-gold glitter details.' }
  ],
  specs: [
    { label: { 'zh-TW': '類別', en: 'Category' }, value: { 'zh-TW': '年節裝飾品', en: 'Lunar New Year Decoration' } },
    { label: { 'zh-TW': '形式', en: 'Format' }, value: { 'zh-TW': '雙面立體吊掛年飾', en: 'Double-Sided 3D Hanging Decoration' } },
    { label: { 'zh-TW': '販售方式', en: 'Sales' }, value: { 'zh-TW': '現場販售', en: 'Available at the Booth' } }
  ]
},
{
  id: '12',
  ...yearlyDecorationDefaults,
  price: 380,
  originalPrice: 400,
  stock: 2,
  images: [
    publicAsset('products/YearlyDecorations/22.avif'),
    publicAsset('products/YearlyDecorations/23.avif')
  ],
  location: { 'zh-TW': '現場販售', en: 'Available at the Booth' },
  name: {
    'zh-TW': '雲寶＆碧琪雙面精品年飾 (大)',
    en: 'Rainbow Dash & Pinkie Pie Double-Sided Premium New Year Decoration (large)'
  },
  tag: { 'zh-TW': '年飾', en: 'Year Decoration' },
  description: {
    'zh-TW': '雙面精品年飾，一面為雲寶「平安喜樂」，另一面為碧琪「吉祥如意」。',
    en: 'A premium double-sided decoration featuring Rainbow Dash with “Peace and Joy” and Pinkie Pie with “Good Fortune.”'
  },
  details: {
    'zh-TW': '正面為身穿黃色新春服飾的雲寶，搭配紅色卷軸與「平安喜樂」金字；背面為身穿粉色花紋服飾的碧琪，搭配「吉祥如意」祝福。角色剪裁、紅金卷軸與燙金細節，讓兩面都能作為醒目的年節主視覺。',
    en: 'The front features Rainbow Dash in a yellow festive outfit beside a red scroll with a Peace and Joy greeting. The reverse features Pinkie Pie in a pink floral outfit with a Good Fortune greeting. Character cutouts, red-and-gold scrolls, and metallic details make either side a striking holiday centerpiece.'
  },
  shipping: {
    'zh-TW': '主要於攤位現場販售與取貨，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    { 'zh-TW': '雲寶＆碧琪', en: 'Rainbow Dash & Pinkie Pie' },
    { 'zh-TW': '雙面精品年飾', en: 'Premium Double-Sided' }
  ],
  highlights: [
    { 'zh-TW': '雲寶面搭配「平安喜樂」金字卷軸。', en: 'Rainbow Dash side features a gold Peace and Joy scroll.' },
    { 'zh-TW': '碧琪面搭配「吉祥如意」金字卷軸。', en: 'Pinkie Pie side features a gold Good Fortune scroll.' },
    { 'zh-TW': '雙面設計，兩面皆可作為年節展示主視覺。', en: 'The double-sided design makes either side suitable as a festive centerpiece.' }
  ],
  specs: [
    { label: { 'zh-TW': '類別', en: 'Category' }, value: { 'zh-TW': '年節裝飾品', en: 'Lunar New Year Decoration' } },
    { label: { 'zh-TW': '形式', en: 'Format' }, value: { 'zh-TW': '雙面吊掛年飾', en: 'Double-Sided Hanging Decoration' } },
    { label: { 'zh-TW': '販售方式', en: 'Sales' }, value: { 'zh-TW': '現場販售', en: 'Available at the Booth' } }
  ]
}
];

const premiumDecorationLarge = yearlyDecorationProducts.find((product) => product.id === '12')!;

const premiumDecorationSmall: Product = {
  ...premiumDecorationLarge,
  id: '13',
  price: 280,
  originalPrice: 300,
  name: {
    'zh-TW': '雲寶＆碧琪雙面精品年飾 (小)',
    en: 'Rainbow Dash & Pinkie Pie Double-Sided Premium New Year Decoration (Small)'
  }
};

export const yearlyDecorations: Product[] = [...yearlyDecorationProducts, premiumDecorationSmall].map((product) => ({
  ...product,
  stockText: getYearlyDecorationStockText(product.stock)
}));
