import { publicAsset } from '../../composables/usePublicAssets';
import type { Product } from './types';

export const badgeProducts: Product[] = [
  {
    id: '1',
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
  },
  {
    id: '1',
    category: 'acrylic-stands',
    price: 90,
    originalPrice: 100,
    stock: 4,
    stockText: {
      'zh-TW': '4 個',
      en: '4 available'
    },
    images: [
      publicAsset('products/Badges/Acrylic-Stand.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '旋轉木馬小馬壓克力立牌',
      en: 'Carousel Pony Acrylic Stand'
    },
    tag: {
      'zh-TW': '壓克力立牌',
      en: 'Acrylic Stand'
    },
    description: {
      'zh-TW': '以旋轉木馬與角色主題設計的小馬壓克力立牌，適合桌面、櫃架展示與收藏。',
      en: 'A carousel-themed pony acrylic stand for desk display, shelf styling, and collecting.'
    },
    details: {
      'zh-TW': '共有碧琪、暮光閃閃、蘋果嘉兒與雲寶等角色款式，搭配透明底座，可立於桌面或展示櫃中。實際款式與數量以現場為準。',
      en: 'Features character designs including Pinkie Pie, Twilight Sparkle, Applejack, and Rainbow Dash with clear display bases. Actual designs and quantities depend on booth availability.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '壓克力立牌', en: 'Acrylic Stand' },
      { 'zh-TW': '角色款式', en: 'Character Designs' },
      { 'zh-TW': '桌面展示', en: 'Desk Display' }
    ],
    highlights: [
      {
        'zh-TW': '旋轉木馬風格角色立牌，適合擺放在桌面或展示櫃。',
        en: 'Carousel-style character stands suitable for desks and display shelves.'
      },
      {
        'zh-TW': '圖片款式包含碧琪、暮光閃閃、蘋果嘉兒與雲寶。',
        en: 'Shown designs include Pinkie Pie, Twilight Sparkle, Applejack, and Rainbow Dash.'
      },
      {
        'zh-TW': '附透明底座，可作為活動紀念或日常收藏小物。',
        en: 'Includes clear bases for event keepsakes or everyday collecting.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '壓克力立牌', en: 'Acrylic Stand' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '1',
    category: 'keychains',
    price: 100,
    originalPrice: 120,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/keychain-ts-large.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '暮光閃閃大尺寸壓克力鑰匙圈',
      en: 'Twilight Sparkle Large Acrylic Keychain'
    },
    tag: {
      'zh-TW': '壓克力鑰匙圈',
      en: 'Acrylic Keychain'
    },
    description: {
      'zh-TW': '暮光閃閃主題的大尺寸壓克力鑰匙圈，搭配星形扣環與吊飾細節，適合掛包、鑰匙或收藏展示。',
      en: 'A large Twilight Sparkle acrylic keychain with a star clasp and charm detail for bags, keys, or display.'
    },
    details: {
      'zh-TW': '以暮光閃閃角色插圖製作的大尺寸透明壓克力鑰匙圈，附星形金屬扣環與小吊飾。數量僅 1 個，實際狀態以現場為準。',
      en: 'A large clear acrylic keychain featuring Twilight Sparkle artwork, a star-shaped metal clasp, and a small charm. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '壓克力鑰匙圈', en: 'Acrylic Keychain' },
      { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' },
      { 'zh-TW': '大尺寸', en: 'Large Size' }
    ],
    highlights: [
      {
        'zh-TW': '暮光閃閃主題大尺寸壓克力鑰匙圈。',
        en: 'Large acrylic keychain featuring Twilight Sparkle.'
      },
      {
        'zh-TW': '附星形金屬扣環與小吊飾細節。',
        en: 'Includes a star-shaped metal clasp and small charm detail.'
      },
      {
        'zh-TW': '庫存僅 1 個，適合收藏或日常掛飾。',
        en: 'Only one available, suitable for collecting or everyday use.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '壓克力鑰匙圈', en: 'Acrylic Keychain' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '2',
    category: 'keychains',
    price: 70,
    originalPrice: 80,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/protection-charm-ts.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '暮光閃閃御守鑰匙圈',
      en: 'Twilight Sparkle Omamori Keychain'
    },
    tag: {
      'zh-TW': '御守鑰匙圈',
      en: 'Omamori Keychain'
    },
    description: {
      'zh-TW': '暮光閃閃主題的御守造型鑰匙圈，適合掛包、鑰匙或作為日常收藏小物。',
      en: 'A Twilight Sparkle omamori-style keychain for bags, keys, or everyday collecting.'
    },
    details: {
      'zh-TW': '以暮光閃閃角色主題製作的御守鑰匙圈，單款庫存 1 個，實際狀態以現場為準。',
      en: 'An omamori-style keychain featuring Twilight Sparkle. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '御守鑰匙圈', en: 'Omamori Keychain' },
      { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '暮光閃閃主題御守造型鑰匙圈。',
        en: 'Omamori-style keychain featuring Twilight Sparkle.'
      },
      {
        'zh-TW': '可掛在包包、鑰匙或作為收藏展示。',
        en: 'Works for bags, keys, or collectible display.'
      },
      {
        'zh-TW': '此款庫存僅 1 個。',
        en: 'Only one is available for this design.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '御守鑰匙圈', en: 'Omamori Keychain' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '3',
    category: 'keychains',
    price: 70,
    originalPrice: 80,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/protection-charm-aj.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '蘋果嘉兒御守鑰匙圈',
      en: 'Applejack Omamori Keychain'
    },
    tag: {
      'zh-TW': '御守鑰匙圈',
      en: 'Omamori Keychain'
    },
    description: {
      'zh-TW': '蘋果嘉兒主題的御守造型鑰匙圈，適合掛包、鑰匙或作為日常收藏小物。',
      en: 'An Applejack omamori-style keychain for bags, keys, or everyday collecting.'
    },
    details: {
      'zh-TW': '以蘋果嘉兒角色主題製作的御守鑰匙圈，單款庫存 1 個，實際狀態以現場為準。',
      en: 'An omamori-style keychain featuring Applejack. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '御守鑰匙圈', en: 'Omamori Keychain' },
      { 'zh-TW': '蘋果嘉兒', en: 'Applejack' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '蘋果嘉兒主題御守造型鑰匙圈。',
        en: 'Omamori-style keychain featuring Applejack.'
      },
      {
        'zh-TW': '可掛在包包、鑰匙或作為收藏展示。',
        en: 'Works for bags, keys, or collectible display.'
      },
      {
        'zh-TW': '此款庫存僅 1 個。',
        en: 'Only one is available for this design.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '御守鑰匙圈', en: 'Omamori Keychain' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '4',
    category: 'keychains',
    price: 70,
    originalPrice: 80,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/protection-charm-rr.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '珍奇御守鑰匙圈',
      en: 'Rarity Omamori Keychain'
    },
    tag: {
      'zh-TW': '御守鑰匙圈',
      en: 'Omamori Keychain'
    },
    description: {
      'zh-TW': '珍奇主題的御守造型鑰匙圈，適合掛包、鑰匙或作為日常收藏小物。',
      en: 'A Rarity omamori-style keychain for bags, keys, or everyday collecting.'
    },
    details: {
      'zh-TW': '以珍奇角色主題製作的御守鑰匙圈，單款庫存 1 個，實際狀態以現場為準。',
      en: 'An omamori-style keychain featuring Rarity. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '御守鑰匙圈', en: 'Omamori Keychain' },
      { 'zh-TW': '珍奇', en: 'Rarity' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '珍奇主題御守造型鑰匙圈。',
        en: 'Omamori-style keychain featuring Rarity.'
      },
      {
        'zh-TW': '可掛在包包、鑰匙或作為收藏展示。',
        en: 'Works for bags, keys, or collectible display.'
      },
      {
        'zh-TW': '此款庫存僅 1 個。',
        en: 'Only one is available for this design.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '御守鑰匙圈', en: 'Omamori Keychain' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '5',
    category: 'keychains',
    price: 60,
    originalPrice: 70,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/keychain-aj.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '蘋果嘉兒恐龍裝壓克力鑰匙圈',
      en: 'Applejack Dinosaur Outfit Acrylic Keychain'
    },
    tag: {
      'zh-TW': '壓克力鑰匙圈',
      en: 'Acrylic Keychain'
    },
    description: {
      'zh-TW': '蘋果嘉兒恐龍裝造型壓克力鑰匙圈，適合掛包、鑰匙或作為日常收藏小物。',
      en: 'An Applejack dinosaur outfit acrylic keychain for bags, keys, or everyday collecting.'
    },
    details: {
      'zh-TW': '以蘋果嘉兒恐龍裝造型製作的壓克力鑰匙圈，單款庫存 1 個，實際狀態以現場為準。',
      en: 'An acrylic keychain featuring Applejack in a dinosaur outfit. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '壓克力鑰匙圈', en: 'Acrylic Keychain' },
      { 'zh-TW': '蘋果嘉兒', en: 'Applejack' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '蘋果嘉兒恐龍裝造型壓克力鑰匙圈。',
        en: 'Acrylic keychain featuring Applejack in a dinosaur outfit.'
      },
      {
        'zh-TW': '可掛在包包、鑰匙或作為收藏展示。',
        en: 'Works for bags, keys, or collectible display.'
      },
      {
        'zh-TW': '此款庫存僅 1 個。',
        en: 'Only one is available for this design.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '壓克力鑰匙圈', en: 'Acrylic Keychain' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '6',
    category: 'keychains',
    price: 60,
    originalPrice: 70,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/keychain-rd.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '雲寶恐龍裝壓克力鑰匙圈',
      en: 'Rainbow Dash Dinosaur Outfit Acrylic Keychain'
    },
    tag: {
      'zh-TW': '壓克力鑰匙圈',
      en: 'Acrylic Keychain'
    },
    description: {
      'zh-TW': '雲寶恐龍裝造型壓克力鑰匙圈，適合掛包、鑰匙或作為日常收藏小物。',
      en: 'A Rainbow Dash dinosaur outfit acrylic keychain for bags, keys, or everyday collecting.'
    },
    details: {
      'zh-TW': '以雲寶恐龍裝造型製作的壓克力鑰匙圈，單款庫存 1 個，實際狀態以現場為準。',
      en: 'An acrylic keychain featuring Rainbow Dash in a dinosaur outfit. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '壓克力鑰匙圈', en: 'Acrylic Keychain' },
      { 'zh-TW': '雲寶', en: 'Rainbow Dash' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '雲寶恐龍裝造型壓克力鑰匙圈。',
        en: 'Acrylic keychain featuring Rainbow Dash in a dinosaur outfit.'
      },
      {
        'zh-TW': '可掛在包包、鑰匙或作為收藏展示。',
        en: 'Works for bags, keys, or collectible display.'
      },
      {
        'zh-TW': '此款庫存僅 1 個。',
        en: 'Only one is available for this design.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '壓克力鑰匙圈', en: 'Acrylic Keychain' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '7',
    category: 'keychains',
    price: 60,
    originalPrice: 70,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/keychain-ts-seapony.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '暮光閃閃海馬壓克力鑰匙圈',
      en: 'Twilight Sparkle Seapony Acrylic Keychain'
    },
    tag: {
      'zh-TW': '壓克力鑰匙圈',
      en: 'Acrylic Keychain'
    },
    description: {
      'zh-TW': '暮光閃閃海馬造型壓克力鑰匙圈，適合掛包、鑰匙或作為日常收藏小物。',
      en: 'A Twilight Sparkle seapony acrylic keychain for bags, keys, or everyday collecting.'
    },
    details: {
      'zh-TW': '以暮光閃閃海馬造型製作的壓克力鑰匙圈，單款庫存 1 個，實際狀態以現場為準。',
      en: 'An acrylic keychain featuring Twilight Sparkle in seapony form. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '壓克力鑰匙圈', en: 'Acrylic Keychain' },
      { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '暮光閃閃海馬造型壓克力鑰匙圈。',
        en: 'Acrylic keychain featuring Twilight Sparkle in seapony form.'
      },
      {
        'zh-TW': '可掛在包包、鑰匙或作為收藏展示。',
        en: 'Works for bags, keys, or collectible display.'
      },
      {
        'zh-TW': '此款庫存僅 1 個。',
        en: 'Only one is available for this design.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '壓克力鑰匙圈', en: 'Acrylic Keychain' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '8',
    category: 'keychains',
    price: 30,
    originalPrice: 50,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/keychain-pp-1.avif'),
      publicAsset('products/Badges/keychain-pp-2.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '碧琪抱枕樣式小鑰匙圈',
      en: 'Pinkie Pie Pillow-Style Mini Keychain'
    },
    tag: {
      'zh-TW': '小鑰匙圈',
      en: 'Mini Keychain'
    },
    description: {
      'zh-TW': '碧琪抱枕樣式的小鑰匙圈，尺寸小巧，適合掛包、鑰匙或作為日常收藏小物。',
      en: 'A small Pinkie Pie pillow-style keychain for bags, keys, or everyday collecting.'
    },
    details: {
      'zh-TW': '以碧琪抱枕風格製作的小鑰匙圈，附兩張商品圖。庫存僅 1 個，實際狀態以現場為準。',
      en: 'A mini keychain with Pinkie Pie pillow-style artwork, shown with two product images. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '小鑰匙圈', en: 'Mini Keychain' },
      { 'zh-TW': '碧琪', en: 'Pinkie Pie' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '碧琪抱枕樣式小鑰匙圈。',
        en: 'Mini keychain with Pinkie Pie pillow-style artwork.'
      },
      {
        'zh-TW': '附兩張商品圖，可查看不同角度或狀態。',
        en: 'Includes two product images for alternate views.'
      },
      {
        'zh-TW': '此款庫存僅 1 個。',
        en: 'Only one is available for this design.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '小鑰匙圈', en: 'Mini Keychain' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '1',
    category: 'ring-holders',
    price: 180,
    originalPrice: 200,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/ring-holder.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '暮光閃閃與柔柔手機指環支架',
      en: 'Twilight Sparkle and Fluttershy Ring Holder'
    },
    tag: {
      'zh-TW': '手機指環支架',
      en: 'Ring Holder'
    },
    description: {
      'zh-TW': '暮光閃閃與柔柔主題手機指環支架，可貼在手機或手機殼背面，方便握持與日常展示。',
      en: 'A Twilight Sparkle and Fluttershy phone ring holder for attaching to the back of a phone or case for grip and everyday display.'
    },
    details: {
      'zh-TW': '暮光閃閃與柔柔角色主題手機指環支架，庫存僅 1 個，實際狀態以現場為準。',
      en: 'A Twilight Sparkle and Fluttershy phone ring holder. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '手機指環支架', en: 'Ring Holder' },
      { 'zh-TW': '暮光閃閃 / 柔柔', en: 'Twilight Sparkle / Fluttershy' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '暮光閃閃與柔柔主題手機指環支架。',
        en: 'Twilight Sparkle and Fluttershy phone ring holder.'
      },
      {
        'zh-TW': '可貼在手機或手機殼背面，方便握持。',
        en: 'Attaches to the back of a phone or case for easier grip.'
      },
      {
        'zh-TW': '此款庫存僅 1 個。',
        en: 'Only one is available for this design.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '手機指環支架', en: 'Ring Holder' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': '暮光閃閃、柔柔', en: 'Twilight Sparkle, Fluttershy' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '1',
    category: 'figures',
    price: 100,
    originalPrice: 150,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/figure-rd-1.avif'),
      publicAsset('products/Badges/figure-rd-2.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '雲寶 2019麥當勞手辦',
      en: "Rainbow Dash 2019 McDonald's Figure"
    },
    tag: {
      'zh-TW': '麥當勞 2019 手辦',
      en: "McDonald's 2019 Figure"
    },
    description: {
      'zh-TW': '麥當勞推出的雲寶角色手辦，適合桌面展示或作為小馬收藏小物。',
      en: "A Rainbow Dash figure released by McDonald's, suitable for desk display or pony collecting."
    },
    details: {
      'zh-TW': '雲寶角色的麥當勞手辦，附兩張商品圖。庫存僅 1 個，實際狀態以現場為準。',
      en: "A McDonald's Rainbow Dash figure shown with two product images. Only one is available, with final condition confirmed at the booth."
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '麥當勞手辦', en: "McDonald's Figure" },
      { 'zh-TW': '雲寶', en: 'Rainbow Dash' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '麥當勞推出的雲寶角色手辦。',
        en: "Rainbow Dash figure released by McDonald's."
      },
      {
        'zh-TW': '附兩張商品圖，可查看不同角度或狀態。',
        en: 'Includes two product images for alternate views.'
      },
      {
        'zh-TW': '此款庫存僅 1 個。',
        en: 'Only one is available for this design.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '麥當勞手辦', en: "McDonald's Figure" }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': '雲寶', en: 'Rainbow Dash' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  }
];
