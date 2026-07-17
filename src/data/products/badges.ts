import { publicAsset } from '../../composables/usePublicAssets';
import type { LocalizedText, Product } from './types';

type IndividualBadgeItem = {
  id: string;
  imageCode: string;
  price: number;
  originalPrice: number;
  character: LocalizedText;
  title: LocalizedText;
};

const individualBadgeItems: IndividualBadgeItem[] = [
  {
    id: '4',
    imageCode: '4',
    price: 50,
    originalPrice: 60,
    character: { 'zh-TW': '黑化碧琪', en: 'Dark Pinkie Pie' },
    title: { 'zh-TW': '黑化碧琪徽章', en: 'Dark Pinkie Pie Badge' }
  },
  {
    id: '5',
    imageCode: '5',
    price: 60,
    originalPrice: 70,
    character: { 'zh-TW': '碧琪', en: 'Pinkie Pie' },
    title: { 'zh-TW': '碧琪亮片徽章', en: 'Pinkie Pie Glitter Badge' }
  },
  {
    id: '6',
    imageCode: '6',
    price: 30,
    originalPrice: 40,
    character: { 'zh-TW': '柔柔', en: 'Fluttershy' },
    title: { 'zh-TW': '柔柔花束徽章', en: 'Fluttershy Flower Badge' }
  },
  {
    id: '7',
    imageCode: '7',
    price: 50,
    originalPrice: 60,
    character: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' },
    title: { 'zh-TW': '暮光閃閃文字徽章', en: 'Twilight Sparkle Text Badge' }
  },
  {
    id: '8',
    imageCode: '8',
    price: 50,
    originalPrice: 60,
    character: { 'zh-TW': 'Gummy', en: 'Gummy' },
    title: { 'zh-TW': 'Gummy 網路梗徽章', en: 'Gummy Internet Meme Badge' }
  },
  {
    id: '9',
    imageCode: '9',
    price: 70,
    originalPrice: 80,
    character: { 'zh-TW': '柔柔', en: 'Fluttershy' },
    title: { 'zh-TW': '柔柔毛絨徽章', en: 'Fluttershy Plush Badge' }
  },
  {
    id: '10',
    imageCode: '10',
    price: 40,
    originalPrice: 50,
    character: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' },
    title: { 'zh-TW': '暮光閃閃聖誕徽章', en: 'Twilight Sparkle Holiday Badge' }
  },
  {
    id: '11',
    imageCode: '11',
    price: 50,
    originalPrice: 60,
    character: { 'zh-TW': '穗龍', en: 'Spike' },
    title: { 'zh-TW': '穗龍紳士徽章', en: 'Spike Gentleman Badge' }
  },
  {
    id: '12',
    imageCode: '12',
    price: 70,
    originalPrice: 80,
    character: { 'zh-TW': 'Pinkamena', en: 'Pinkamena Diane Pie' },
    title: { 'zh-TW': 'Pinkamena 黑底徽章', en: 'Pinkamena Dark Badge' }
  },
  {
    id: '13',
    imageCode: '13',
    price: 30,
    originalPrice: 40,
    character: { 'zh-TW': '柔柔', en: 'Fluttershy' },
    title: { 'zh-TW': '柔柔造型徽章', en: 'Fluttershy Shaped Badge' }
  },
  {
    id: '14',
    imageCode: '14',
    price: 50,
    originalPrice: 60,
    character: { 'zh-TW': 'DJ Pon-3', en: 'DJ Pon-3' },
    title: { 'zh-TW': 'DJ Pon-3 徽章', en: 'DJ Pon-3 Badge' }
  },
  {
    id: '15',
    imageCode: '15',
    price: 90,
    originalPrice: 100,
    character: { 'zh-TW': '天星公主', en: 'Princess Skystar' },
    title: { 'zh-TW': '天星公主海洋亮粉徽章', en: 'Princess Skystar Ocean Glitter Badge' }
  },
  {
    id: '16',
    imageCode: '16',
    price: 90,
    originalPrice: 100,
    character: { 'zh-TW': '蘋果嘉兒', en: 'Applejack' },
    title: { 'zh-TW': '蘋果嘉兒亮粉徽章', en: 'Applejack Glitter Badge' }
  }
];

const createIndividualBadgeProduct = (item: IndividualBadgeItem): Product => ({
  id: item.id,
  category: 'badges',
  price: item.price,
  originalPrice: item.originalPrice,
  stock: 1,
  stockText: {
    'zh-TW': '1 個',
    en: '1 available'
  },
  images: [
    publicAsset(`products/Badges/${item.imageCode}.avif`)
  ],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: item.title,
  tag: item.character,
  description: {
    'zh-TW': `${item.title['zh-TW']}，背面有別針，單款庫存僅 1 個，適合角色收藏或別在包包、布面配件、展示板使用。`,
    en: `${item.title.en} with a pin back. Only one is available, suitable for character collecting, bags, fabric accessories, or display boards.`
  },
  details: {
    'zh-TW': `${item.title['zh-TW']}，角色為 ${item.character['zh-TW']}，背面搭配別針。單款庫存僅 1 個，實際狀態以現場為準。`,
    en: `${item.title.en} featuring ${item.character.en}, with a pin back. Only one is available, with final condition confirmed at the booth.`
  },
  shipping: {
    'zh-TW': '主要提供現場購買與取貨，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
  },
  badges: [
    item.character,
    { 'zh-TW': '背面別針', en: 'Pin Back' },
    { 'zh-TW': '僅 1 個', en: 'Only 1 Available' }
  ],
  highlights: [
    {
      'zh-TW': `${item.character['zh-TW']}角色徽章。`,
      en: `Character badge featuring ${item.character.en}.`
    },
    {
      'zh-TW': '單款庫存僅 1 個。',
      en: 'Only one is available for this design.'
    },
    {
      'zh-TW': '背面有別針，可別在包包、布面配件或展示板上。',
      en: 'Pin back can attach to bags, fabric accessories, or display boards.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: { 'zh-TW': '小物', en: 'Small Goods' }
    },
    {
      label: { 'zh-TW': '形式', en: 'Format' },
      value: { 'zh-TW': '徽章（背面別針）', en: 'Pin-Back Badge' }
    },
    {
      label: { 'zh-TW': '角色', en: 'Character' },
      value: item.character
    },
    {
      label: { 'zh-TW': '販售方式', en: 'Sales' },
      value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
    }
  ]
});

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
    id: '2',
    category: 'badges',
    price: 50,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/pp-toy.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '碧琪夾娃娃機造型壓克力',
      en: 'Pinkie Pie Claw Machine Acrylic'
    },
    tag: {
      'zh-TW': '造型壓克力',
      en: 'Acrylic'
    },
    description: {
      'zh-TW': '碧琪主題的夾娃娃機造型壓克力，內有小配件圖案，適合桌面展示或收藏。',
      en: 'A Pinkie Pie claw machine themed acrylic item with small charm artwork inside, suitable for desk display or collecting.'
    },
    details: {
      'zh-TW': '外觀為夾娃娃機造型的碧琪壓克力。庫存僅 1 個，實際狀態以現場為準。',
      en: 'A Pinkie Pie acrylic item shaped like a claw machine. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要提供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '夾娃娃機造型', en: 'Claw Machine Design' },
      { 'zh-TW': '碧琪', en: 'Pinkie Pie' },
      { 'zh-TW': '僅 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '碧琪主題夾娃娃機造型。',
        en: 'Pinkie Pie themed claw machine design.'
      },
      {
        'zh-TW': '造型壓克力，適合桌面展示或收藏。',
        en: 'Acrylic item for desk display or collecting.'
      },
      {
        'zh-TW': '庫存僅 1 個。',
        en: 'Only one is available for this item.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '造型壓克力', en: 'Acrylic' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': '碧琪', en: 'Pinkie Pie' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '3',
    category: 'badges',
    price: 80,
    originalPrice: 100,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/graffiti-badge.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '彩虹小馬塗鴉風格徽章',
      en: 'My Little Pony Graffiti Style Badge'
    },
    tag: {
      'zh-TW': '塗鴉風格徽章',
      en: 'Graffiti Style Badge'
    },
    description: {
      'zh-TW': '彩虹小馬塗鴉風格隨機徽章，內含角色隨機出貨、不可指定；包裝以活潑的碧琪與鮮明塗鴉配色呈現。',
      en: 'A My Little Pony graffiti-style mystery badge with a random character that cannot be selected, presented in vivid Pinkie Pie themed packaging.'
    },
    details: {
      'zh-TW': '正版彩虹小馬塗鴉風格徽章商品，內含角色採隨機方式，無法指定款式。外盒為碧琪主題插畫與粉紫、橘色塗鴉設計，包裝圖案不代表實際抽中角色。庫存僅 1 個。',
      en: 'An officially licensed My Little Pony graffiti-style mystery badge. The included character is random and cannot be selected. Pinkie Pie appears on the pink, purple, and orange packaging but does not indicate the character inside. Only one is available.'
    },
    shipping: {
      'zh-TW': '主要提供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '塗鴉風格', en: 'Graffiti Style' },
      { 'zh-TW': '隨機角色', en: 'Random Character' },
      { 'zh-TW': '僅 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '鮮明粉紫與橘色塗鴉風格包裝。',
        en: 'Vivid pink, purple, and orange graffiti-style packaging.'
      },
      {
        'zh-TW': '內含角色隨機，無法指定款式。',
        en: 'The included character is random and cannot be selected.'
      },
      {
        'zh-TW': '庫存僅 1 個。',
        en: 'Only one is available for this item.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '徽章', en: 'Badge' }
      },
      {
        label: { 'zh-TW': '系列', en: 'Series' },
        value: { 'zh-TW': '塗鴉風格', en: 'Graffiti Style' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': '隨機角色（不可指定）', en: 'Random character (cannot be selected)' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '1',
    category: 'stickers',
    price: 100,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/sticker-1.avif'),
      publicAsset('products/Badges/sticker-2.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '彩虹小馬卷卷貼',
      en: 'My Little Pony Sticker Roll'
    },
    tag: {
      'zh-TW': '角色貼紙',
      en: 'Character Stickers'
    },
    description: {
      'zh-TW': '彩虹小馬角色卷卷貼，收錄多款角色與動畫場景圖案，適合手帳、卡片與日常裝飾。',
      en: 'A My Little Pony sticker roll featuring assorted characters and animated scenes for journals, cards, and everyday decorating.'
    },
    details: {
      'zh-TW': '紫色蝴蝶結造型盒裝卷卷貼，包裝主視覺包含暮光閃閃、柔柔與碧琪，側面可看到多款小馬角色及場景貼紙樣式。庫存僅 1 個，商品內容與狀態以現場實品為準。',
      en: 'A sticker roll in a purple bow-shaped package featuring Twilight Sparkle, Fluttershy, and Pinkie Pie on the front, with assorted pony character and scene designs shown on the side. Only one is available; contents and condition are as shown at the booth.'
    },
    shipping: {
      'zh-TW': '主要提供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '卷卷貼', en: 'Sticker Roll' },
      { 'zh-TW': '多角色圖案', en: 'Assorted Characters' },
      { 'zh-TW': '僅 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '收錄多款彩虹小馬角色與動畫場景圖案。',
        en: 'Includes assorted My Little Pony character and animated scene designs.'
      },
      {
        'zh-TW': '蝴蝶結造型盒裝，適合收藏或送禮。',
        en: 'Presented in a bow-shaped package suitable for collecting or gifting.'
      },
      {
        'zh-TW': '庫存僅 1 個。',
        en: 'Only one is available for this item.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '卷裝貼紙', en: 'Sticker Roll' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': '六主角', en: 'Mane 6' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  ...individualBadgeItems.map(createIndividualBadgeProduct),
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
  },
  {
    id: '1',
    category: 'bandages',
    price: 30,
    originalPrice: 40,
    stock: 6,
    stockText: {
      'zh-TW': '6 個',
      en: '6 available'
    },
    images: [
      publicAsset('products/Badges/Band-Aid.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '六主角 OK 繃（單個販售）',
      en: 'Mane 6 Bandage (Single Item)'
    },
    tag: {
      'zh-TW': 'OK 繃',
      en: 'Bandage'
    },
    description: {
      'zh-TW': '六主角主題 OK 繃，單個售價 30 元，適合日常備用或作為小馬收藏小物。',
      en: 'A Mane 6 themed bandage sold individually for NT$30, suitable for everyday use or pony collecting.'
    },
    details: {
      'zh-TW': '六主角主題 OK 繃為單個販售，30 元是單一個的價格，不是全部 6 個的價格。庫存 6 個，實際狀態以現場為準。',
      en: 'Mane 6 themed bandages are sold individually. NT$30 is the price for one item, not the full set of six. Six are available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': 'OK 繃', en: 'Bandage' },
      { 'zh-TW': '六主角', en: 'Mane 6' },
      { 'zh-TW': '單個 30 元', en: 'NT$30 Each' }
    ],
    highlights: [
      {
        'zh-TW': '六主角主題 OK 繃，單個販售。',
        en: 'Mane 6 themed bandages, sold individually.'
      },
      {
        'zh-TW': '適合日常備用，也能作為小馬收藏小物。',
        en: 'Useful for everyday carry and pony collecting.'
      },
      {
        'zh-TW': '30 元為單一個價格，此款庫存 6 個。',
        en: 'NT$30 is the price for one item; six are available.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '分類', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': 'OK 繃', en: 'Bandage' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': '六主角', en: 'Mane 6' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '1',
    category: 'card-skins',
    price: 50,
    originalPrice: 60,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/card-skin-aj.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '蘋果嘉兒造型卡貼',
      en: 'Applejack Card Sticker'
    },
    tag: {
      'zh-TW': '造型卡貼',
      en: 'Card Sticker'
    },
    description: {
      'zh-TW': '蘋果嘉兒主題造型卡貼，可黏在悠遊卡、一卡通等卡片上，適合日常使用或收藏。',
      en: 'An Applejack themed card sticker for EasyCard, iPASS, and similar transit cards.'
    },
    details: {
      'zh-TW': '蘋果嘉兒主題造型卡貼，可黏悠遊卡、一卡通等卡片。庫存僅 1 個，實際狀態以現場為準。',
      en: 'An Applejack themed card sticker for EasyCard, iPASS, and similar cards. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '造型卡貼', en: 'Card Sticker' },
      { 'zh-TW': '蘋果嘉兒', en: 'Applejack' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '蘋果嘉兒主題造型卡貼。',
        en: 'Applejack themed card sticker.'
      },
      {
        'zh-TW': '可黏悠遊卡、一卡通等卡片。',
        en: 'Fits EasyCard, iPASS, and similar cards.'
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
        value: { 'zh-TW': '造型卡貼', en: 'Card Sticker' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': '蘋果嘉兒', en: 'Applejack' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '2',
    category: 'card-skins',
    price: 50,
    originalPrice: 60,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/card-skin-pp.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '碧琪造型卡貼',
      en: 'Pinkie Pie Card Sticker'
    },
    tag: {
      'zh-TW': '造型卡貼',
      en: 'Card Sticker'
    },
    description: {
      'zh-TW': '碧琪主題造型卡貼，可黏在悠遊卡、一卡通等卡片上，適合日常使用或收藏。',
      en: 'A Pinkie Pie themed card sticker for EasyCard, iPASS, and similar transit cards.'
    },
    details: {
      'zh-TW': '碧琪主題造型卡貼，可黏悠遊卡、一卡通等卡片。庫存僅 1 個，實際狀態以現場為準。',
      en: 'A Pinkie Pie themed card sticker for EasyCard, iPASS, and similar cards. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '造型卡貼', en: 'Card Sticker' },
      { 'zh-TW': '碧琪', en: 'Pinkie Pie' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '碧琪主題造型卡貼。',
        en: 'Pinkie Pie themed card sticker.'
      },
      {
        'zh-TW': '可黏悠遊卡、一卡通等卡片。',
        en: 'Fits EasyCard, iPASS, and similar cards.'
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
        value: { 'zh-TW': '造型卡貼', en: 'Card Sticker' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': '碧琪', en: 'Pinkie Pie' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '3',
    category: 'card-skins',
    price: 50,
    originalPrice: 60,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/card-skin-rr.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '珍奇造型卡貼',
      en: 'Rarity Card Sticker'
    },
    tag: {
      'zh-TW': '造型卡貼',
      en: 'Card Sticker'
    },
    description: {
      'zh-TW': '珍奇主題造型卡貼，可黏在悠遊卡、一卡通等卡片上，適合日常使用或收藏。',
      en: 'A Rarity themed card sticker for EasyCard, iPASS, and similar transit cards.'
    },
    details: {
      'zh-TW': '珍奇主題造型卡貼，可黏悠遊卡、一卡通等卡片。庫存僅 1 個，實際狀態以現場為準。',
      en: 'A Rarity themed card sticker for EasyCard, iPASS, and similar cards. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '造型卡貼', en: 'Card Sticker' },
      { 'zh-TW': '珍奇', en: 'Rarity' },
      { 'zh-TW': '限量 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '珍奇主題造型卡貼。',
        en: 'Rarity themed card sticker.'
      },
      {
        'zh-TW': '可黏悠遊卡、一卡通等卡片。',
        en: 'Fits EasyCard, iPASS, and similar cards.'
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
        value: { 'zh-TW': '造型卡貼', en: 'Card Sticker' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': '珍奇', en: 'Rarity' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '1',
    category: 'rulers',
    price: 50,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/ruler-ts.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '暮光閃閃造型尺',
      en: 'Twilight Sparkle Shaped Ruler'
    },
    tag: {
      'zh-TW': '造型尺',
      en: 'Shaped Ruler'
    },
    description: {
      'zh-TW': '暮光閃閃主題造型尺，適合日常書寫、桌面使用或收藏展示。',
      en: 'A Twilight Sparkle themed shaped ruler for writing, desk use, or collecting.'
    },
    details: {
      'zh-TW': '暮光閃閃造型尺，庫存僅 1 個，實際狀態以現場為準。',
      en: 'A Twilight Sparkle shaped ruler. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要提供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '造型尺', en: 'Shaped Ruler' },
      { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' },
      { 'zh-TW': '僅 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '暮光閃閃主題造型尺。',
        en: 'Twilight Sparkle themed shaped ruler.'
      },
      {
        'zh-TW': '適合日常書寫、桌面使用或收藏展示。',
        en: 'Works for writing, desk use, or collectible display.'
      },
      {
        'zh-TW': '庫存僅 1 個。',
        en: 'Only one is available for this design.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '造型尺', en: 'Shaped Ruler' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  },
  {
    id: '1',
    category: 'medals',
    price: 300,
    stock: 1,
    stockText: {
      'zh-TW': '1 個',
      en: '1 available'
    },
    images: [
      publicAsset('products/Badges/medal.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '2017 小馬路跑獎牌',
      en: '2017 Pony Run Medal'
    },
    tag: {
      'zh-TW': '路跑獎牌',
      en: 'Run Medal'
    },
    description: {
      'zh-TW': '2017 小馬路跑活動獎牌，保存良好且未配戴過，適合活動紀念收藏。',
      en: 'A 2017 pony run event medal in good condition and never worn, suitable for event memorabilia collecting.'
    },
    details: {
      'zh-TW': '2017 小馬路跑獎牌，保存良好，未配戴過。庫存僅 1 個，實際狀態以現場為準。',
      en: 'A 2017 pony run medal in good condition and never worn. Only one is available, with final condition confirmed at the booth.'
    },
    shipping: {
      'zh-TW': '主要提供現場購買與取貨，數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '路跑獎牌', en: 'Run Medal' },
      { 'zh-TW': '保存良好', en: 'Good Condition' },
      { 'zh-TW': '僅 1 個', en: 'Only 1 Available' }
    ],
    highlights: [
      {
        'zh-TW': '2017 小馬路跑活動獎牌。',
        en: '2017 pony run event medal.'
      },
      {
        'zh-TW': '保存良好，未配戴過。',
        en: 'Good condition and never worn.'
      },
      {
        'zh-TW': '庫存僅 1 個。',
        en: 'Only one is available for this item.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '小物', en: 'Small Goods' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '路跑獎牌', en: 'Run Medal' }
      },
      {
        label: { 'zh-TW': '保存狀態', en: 'Condition' },
        value: { 'zh-TW': '保存良好，未配戴過', en: 'Good condition, never worn' }
      },
      {
        label: { 'zh-TW': '販售方式', en: 'Sales' },
        value: { 'zh-TW': '現場販售', en: 'Available at the Booth' }
      }
    ]
  }
];
