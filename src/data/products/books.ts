import { publicAsset } from '../../composables/usePublicAssets';
import type { Product } from './types';

const existingBookProducts: Product[] = [
  {
    id: '1',
    category: 'books',
    price: 500,
    originalPrice: 700,//485
    stock: 1,
    stockText: {
      'zh-TW': '各 1 本，共 1 套',
      en: 'One copy each, one set total'
    },
    images: [
      publicAsset('products/Books/secret-diary.avif'),
      publicAsset('products/Books/secret-file.avif'),
      publicAsset('products/Books/secret-series.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '彩虹小馬典藏書籍',
      en: 'My Little Pony Collectible Books'
    },
    tag: {
      'zh-TW': '書籍',
      en: 'Books'
    },
    description: {
      'zh-TW': '收錄《秘密日記》與《絕密檔案》兩本典藏書籍資訊，各一本、共一套。單獨一本 NT$500，兩本一起購買 NT$900。',
      en: 'A listing for Secret Diary and Classified Files collectible books, with one copy of each book available as one set. NT$500 for one book, or NT$900 when buying both together.'
    },
    details: {
      'zh-TW': '此商品頁合併收錄《彩虹小馬：秘密日記》與《彩虹小馬：絕密檔案》兩本典藏書籍，目前庫存為各一本、共一套。《秘密日記》偏向角色日記、角色故事與世界觀補充；《絕密檔案》整理角色設定、經典動畫畫面、幕後訪談、拉頁插圖、地圖及多項特別內容。單獨一本售價 NT$500；兩本一起購買套購價 NT$900。',
      en: 'This listing combines My Little Pony: Secret Diary and My Little Pony: Classified Files, with one copy of each book available as one set. Secret Diary focuses on character diary entries, story material, and world-building details, while Classified Files collects character profiles, classic animated scenes, creator interviews, fold-out artwork, maps, and other special features. The single-book price is NT$500; buying both together is NT$900.'
    },
    shipping: {
      'zh-TW': '以現場販售與取貨為主，書籍數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '單本 NT$500', en: 'NT$500 Each' },
      { 'zh-TW': '兩本 NT$900', en: 'NT$900 for Both' },
      { 'zh-TW': '各一本共一套', en: 'One Set Total' },
      { 'zh-TW': '典藏內容', en: 'Collectible Edition' }
    ],
    highlights: [
      {
        'zh-TW': '同一商品頁收錄《秘密日記》與《絕密檔案》，各一本、共一套。',
        en: 'Combines Secret Diary and Classified Files in one product listing, with one copy of each book available as one set.'
      },
      {
        'zh-TW': '單獨一本 NT$500，兩本一起購買 NT$900。',
        en: 'NT$500 for one book, or NT$900 when buying both books together.'
      },
      {
        'zh-TW': '內容包含角色故事、設定資料、動畫畫面、幕後訪談、拉頁插圖與地圖。',
        en: 'Includes character stories, profiles, animated scenes, interviews, fold-out artwork, and maps.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '典藏書籍', en: 'Collectible Books' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '單本販售／兩本套購', en: 'Single Book / Two-Book Bundle' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': 'My Little Pony Characters', en: 'My Little Pony Characters' }
      }
    ]
  },
  {
    id: '2',
    category: 'books',
    price: 1000,
    originalPrice: 1200,//758
    stock: 1,
    stockText: {
      'zh-TW': '1 本',
      en: '1 copy'
    },
    images: [
      publicAsset('products/Books/art-book.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '彩虹小馬官方藝術設定集：從 G1 到 G5',
      en: 'My Little Pony Official Art Collection: From G1 to G5'
    },
    tag: {
      'zh-TW': '藝術設定集',
      en: 'Art Book'
    },
    description: {
      'zh-TW': '橫跨 G1 至 G5 世代，收藏《彩虹小馬》角色、世界觀與視覺設計資料。',
      en: 'An official art collection exploring My Little Pony characters, worlds, and visual designs across G1 through G5.'
    },
    details: {
      'zh-TW': '本書以《彩虹小馬》G1 至 G5 的發展歷程為主題，彙整不同世代的角色造型、場景美術與世界觀設計。大開本精裝形式適合欣賞完整圖像細節，也適合喜愛動畫美術、角色設定與系列歷史的粉絲收藏。',
      en: 'This official collection traces the visual development of My Little Pony from G1 through G5, bringing together character designs, environmental artwork, and world-building material from across the franchise. Its large-format hardcover presentation is ideal for fans of animation art, character design, and the history of the series.'
    },
    shipping: {
      'zh-TW': '以現場販售與取貨為主，書籍數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '售價 NT$1000', en: 'NT$1000' },
      { 'zh-TW': 'G1 至 G5', en: 'G1 to G5' },
      { 'zh-TW': '官方設定集', en: 'Official Art Book' }
    ],
    highlights: [
      {
        'zh-TW': '收錄橫跨 G1 至 G5 的系列藝術設計。',
        en: 'Covers artwork and designs spanning G1 through G5.'
      },
      {
        'zh-TW': '彙整角色造型、場景美術與世界觀資料。',
        en: 'Features character designs, environmental art, and world-building material.'
      },
      {
        'zh-TW': '大開本精裝設計，適合閱讀與典藏展示。',
        en: 'Large-format hardcover edition suitable for reading and display.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '藝術設定集', en: 'Art and Design Book' }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '大開本精裝', en: 'Large-Format Hardcover' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: { 'zh-TW': 'My Little Pony G1-G5 Characters', en: 'My Little Pony G1-G5 Characters' }
      }
    ]
  },
  {
    id: '3',
    category: 'books',
    price: 750,
    originalPrice: 900,//435
    stock: 1,
    stockText: {
      'zh-TW': '1 本',
      en: '1 copy'
    },
    images: [
      publicAsset('products/Books/secret-Illustrated.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '彩虹小馬絕密圖鑑：珍藏故事集',
      en: "My Little Pony Secret Guide: Collector's Storybook"
    },
    tag: {
      'zh-TW': '故事集',
      en: 'Storybook'
    },
    description: {
      'zh-TW': '以角色故事與精美插圖呈現小馬谷的冒險與友誼，適合閱讀與收藏。',
      en: 'A collectible storybook featuring illustrated adventures and stories of friendship from the world of My Little Pony.'
    },
    details: {
      'zh-TW': '《彩虹小馬絕密圖鑑：珍藏故事集》以 Twilight Sparkle、Rainbow Dash、Pinkie Pie 與 Fluttershy 等角色為主題，收錄小馬谷中的冒險故事與全彩插圖。華麗的封面設計與豐富的故事內容，適合喜愛角色故事、插畫與紙本收藏的粉絲。',
      en: "My Little Pony Secret Guide: Collector's Storybook features characters including Twilight Sparkle, Rainbow Dash, Pinkie Pie, and Fluttershy. It brings together illustrated adventures from Equestria in a decorative collectible edition for fans of character stories, artwork, and printed books."
    },
    shipping: {
      'zh-TW': '以現場販售與取貨為主，書籍數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      { 'zh-TW': '珍藏故事', en: "Collector's Stories" },
      { 'zh-TW': '全彩插圖', en: 'Full-Color Art' },
      { 'zh-TW': '原價 NT$900', en: 'Original NT$900' }
    ],
    highlights: [
      {
        'zh-TW': '收錄多位主要角色的友誼與冒險故事。',
        en: 'Features friendship and adventure stories starring familiar characters.'
      },
      {
        'zh-TW': '搭配色彩鮮明的角色插圖與裝飾版面。',
        en: 'Includes colorful character artwork and decorative page designs.'
      },
      {
        'zh-TW': '適合日常閱讀，也適合作為系列書籍收藏。',
        en: 'Suitable for casual reading and My Little Pony book collections.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: { 'zh-TW': '珍藏故事集', en: "Collector's Storybook" }
      },
      {
        label: { 'zh-TW': '形式', en: 'Format' },
        value: { 'zh-TW': '全彩精裝故事集', en: 'Full-Color Hardcover Storybook' }
      },
      {
        label: { 'zh-TW': '角色', en: 'Character' },
        value: {
          'zh-TW': 'Twilight Sparkle, Rainbow Dash, Pinkie Pie, Fluttershy',
          en: 'Twilight Sparkle, Rainbow Dash, Pinkie Pie, Fluttershy'
        }
      }
    ]
  },
  {
    id: '4',
    category: 'books',
    price: 500,
    originalPrice: 600,//358
    stock: 1,
    stockText: {
      'zh-TW': '1 本',
      en: '1 copy'
    },
    images: [
      publicAsset('products/Books/Collectible-art-book.avif')
    ],
    location: {
      'zh-TW': '現場販售',
      en: 'Available at the Booth'
    },
    name: {
      'zh-TW': '彩虹小馬珍藏畫冊',
      en: "My Little Pony Collector's Art Book"
    },
    tag: {
      'zh-TW': '官方畫冊',
      en: 'Official Art Book'
    },
    description: {
      'zh-TW': '以《友情就是魔法》的經典角色與動畫畫面為主題，收錄豐富圖像與紀念內容。',
      en: "An official collector's art book featuring classic characters and memorable scenes from Friendship Is Magic."
    },
    details: {
      'zh-TW': '《彩虹小馬珍藏畫冊》以《友情就是魔法》系列為主題，集結六位主角、穗龍與動畫中的經典畫面。內容以角色插圖與動畫美術為主，適合喜愛系列視覺設計、經典場景與紙本收藏的粉絲。',
      en: "This collector's art book celebrates My Little Pony: Friendship Is Magic with the Mane 6, Spike, and memorable scenes from the animated series. Its character illustrations and animation artwork make it suitable for fans of the show's visual design, classic moments, and printed collectibles."
    },
    shipping: {
      'zh-TW': '以現場販售與取貨為主，書籍數量有限，售完為止。',
      en: 'Primarily available for onsite purchase and pickup. Quantities are limited and available while supplies last.'
    },
    badges: [
      {
        'zh-TW': '官方畫冊',
        en: 'Official Art Book'
      },
      {
        'zh-TW': '十五週年',
        en: '15th Anniversary'
      }
    ],
    highlights: [
      {
        'zh-TW': '收錄《友情就是魔法》的角色插圖與經典動畫畫面。',
        en: 'Features character artwork and memorable scenes from Friendship Is Magic.'
      },
      {
        'zh-TW': '以六位主角與穗龍等經典角色為主要內容。',
        en: 'Highlights the Mane 6, Spike, and other familiar characters.'
      },
      {
        'zh-TW': '適合欣賞動畫美術與作為十五週年紀念收藏。',
        en: 'Suitable for enjoying animation artwork and as a 15th-anniversary collectible.'
      }
    ],
    specs: [
      {
        label: { 'zh-TW': '類別', en: 'Category' },
        value: {
          'zh-TW': '官方珍藏畫冊',
          en: "Official Collector's Art Book"
        }
      },
      {
        label: { 'zh-TW': '內容', en: 'Contents' },
        value: {
          'zh-TW': '全彩角色與動畫畫冊',
          en: 'Full-Color Character and Animation Art Book'
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

type CharacterNoteItem = {
  id: string;
  imageCode: string;
  character: {
    'zh-TW': string;
    en: string;
  };
};

const characterNoteItems: CharacterNoteItem[] = [
  { id: '5', imageCode: 'derpy', character: { 'zh-TW': '小呆', en: 'Derpy' } },
  { id: '6', imageCode: 'ts', character: { 'zh-TW': '暮光閃閃', en: 'Twilight Sparkle' } },
  { id: '7', imageCode: 'luna', character: { 'zh-TW': '月亮公主', en: 'Princess Luna' } },
  { id: '8', imageCode: 'pp', character: { 'zh-TW': '碧琪', en: 'Pinkie Pie' } },
  { id: '9', imageCode: 'ss', character: { 'zh-TW': '晴晴', en: 'Sunny Starscout' } }
];

const createCharacterNoteProduct = (item: CharacterNoteItem): Product => ({
  id: item.id,
  category: 'books',
  price: 80,
  originalPrice: 90,
  stock: 1,
  stockText: {
    'zh-TW': '1 本',
    en: '1 notepad'
  },
  images: [publicAsset(`products/Books/${item.imageCode}-note.avif`)],
  location: {
    'zh-TW': '現場販售',
    en: 'Available at the Booth'
  },
  name: {
    'zh-TW': `${item.character['zh-TW']}橫線便條本`,
    en: `${item.character.en} Lined Notepad`
  },
  tag: item.character,
  description: {
    'zh-TW': `${item.character['zh-TW']}角色款橫線便條本，尺寸約 16 × 11 cm，適合書寫待辦事項與日常筆記。`,
    en: `A ${item.character.en} lined notepad measuring approximately 16 × 11 cm, suitable for to-do lists and everyday notes.`
  },
  details: {
    'zh-TW': `以${item.character['zh-TW']}與角色主題小圖案設計的橫線便條本，版面方便書寫短箋、清單及備忘內容。每款現貨 1 本。`,
    en: `A lined notepad featuring ${item.character.en} and themed decorative artwork. The layout is suitable for short messages, lists, and reminders. One is available.`
  },
  shipping: {
    'zh-TW': '以現場販售與取貨為主，數量有限，售完為止。',
    en: 'Primarily available for onsite purchase and pickup. Quantity is limited and available while supplies last.'
  },
  badges: [
    item.character,
    { 'zh-TW': '橫線便條本', en: 'Lined Notepad' },
    { 'zh-TW': '限量 1 本', en: 'Only 1 Available' }
  ],
  highlights: [
    {
      'zh-TW': `${item.character['zh-TW']}角色主題設計。`,
      en: `Character design featuring ${item.character.en}.`
    },
    {
      'zh-TW': '橫線書寫版面，適合短箋、待辦清單與備忘。',
      en: 'Lined writing area for messages, to-do lists, and reminders.'
    },
    {
      'zh-TW': '尺寸約 16 × 11 cm，方便攜帶與使用。',
      en: 'Measures approximately 16 × 11 cm for convenient everyday use.'
    }
  ],
  specs: [
    {
      label: { 'zh-TW': '類別', en: 'Category' },
      value: { 'zh-TW': '便條本', en: 'Notepad' }
    },
    {
      label: { 'zh-TW': '尺寸', en: 'Size' },
      value: { 'zh-TW': '16 × 11 cm', en: '16 × 11 cm' }
    },
    {
      label: { 'zh-TW': '角色', en: 'Character' },
      value: item.character
    }
  ]
});

export const bookProducts: Product[] = [
  ...existingBookProducts,
  ...characterNoteItems.map(createCharacterNoteProduct)
];
