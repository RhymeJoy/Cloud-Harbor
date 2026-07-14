import { computed, ref, watch } from 'vue';

export const fallbackLocale = 'zh-TW';

export const locales = [
  {
    code: 'zh-TW',
    label: '繁體中文',
    htmlLang: 'zh-Hant'
  },
  {
    code: 'en',
    label: 'English',
    htmlLang: 'en'
  }
];

const storageKey = 'yun-gang-locale';

const messages = {
  'zh-TW': {
    site: {
      title: '雲港商行',
      description: '雲港商行是準備在 TWBC 上販售商品的攤販，這裡整理攤位介紹、商品資訊與後續上架內容。'
    },
    hero: {
      eyebrow: 'YUN GANG SHOP',
      title: '雲港商行，準備在 TWBC 上販售的攤販',
      intro: '我們正在整理攤位介紹、預計販售商品與上架資訊，讓訪客能快速了解雲港商行的商品方向與後續動態。',
      productsCta: '查看商品',
      aboutCta: '認識雲港',
      profileLabel: 'ABOUT VENDOR',
      avatarAlt: '雲港商行攤主頭像',
      profileTitle: '你好，我們是雲港商行',
      profileRole: 'TWBC 攤販 / 商品準備 / 現場販售',
      profileText: '雲港商行將在 TWBC 上販售商品，目前正逐步整理商品資訊、攤位介紹與上架內容。這裡會作為訪客認識我們與查看商品的入口。'
    },
    about: {
      eyebrow: 'ABOUT',
      title: '雲港商行正在準備 TWBC 販售內容，讓商品資訊能更清楚被看見。',
      body: '我們會把預計販售的商品、攤位定位與更新資訊整理在這個網站中。後續只要新增商品資料與圖片，就能沿用目前的 Vue 架構快速更新，讓 TWBC 訪客能直接掌握雲港商行的最新內容。'
    },
    products: {
      eyebrow: 'PRODUCTS',
      title: '預計販售商品會統一整理在這裡，圖片皆放在 public/products。',
      pricePrefix: 'NT$',
      tags: {
        apparel: '服飾',
        print: '印刷',
        merch: '周邊'
      },
      items: {
        brandPolo: {
          name: '品牌 Polo 衫',
          description: '適合日常識別、展場接待與團隊活動，版型俐落、穿著舒適。'
        },
        eventBrochure: {
          name: '活動手冊',
          description: '整合品牌故事、流程與商品資訊，讓現場溝通更完整。'
        },
        canvasBag: {
          name: '訂製帆布袋',
          description: '可承載文件、樣品與贈品，兼具實用性與品牌曝光。'
        }
      }
    },
    footer: {
      homeAria: '回到雲港商行首頁',
      tagline: 'TWBC 販售攤位準備中',
      navAria: '頁尾連結',
      twbc: 'TWBC',
      products: '商品',
      about: '關於雲港',
      vendorLine: 'TWBC 攤販準備中',
      quote: '「把喜歡的東西，好好帶到攤位上。」'
    }
  },
  en: {
    site: {
      title: 'Yun Gang Shop',
      description: 'Yun Gang Shop is a vendor preparing to sell at TWBC. This site collects booth details, product information, and upcoming updates.'
    },
    hero: {
      eyebrow: 'YUN GANG SHOP',
      title: 'Yun Gang Shop, a vendor preparing for TWBC',
      intro: 'We are organizing booth details, planned products, and launch updates so visitors can quickly understand what Yun Gang Shop is preparing.',
      productsCta: 'View Products',
      aboutCta: 'About Yun Gang',
      profileLabel: 'ABOUT VENDOR',
      avatarAlt: 'Yun Gang Shop vendor avatar',
      profileTitle: 'Hello, we are Yun Gang Shop',
      profileRole: 'TWBC Vendor / Product Prep / Booth Sales',
      profileText: 'Yun Gang Shop is preparing to sell at TWBC. Product details, booth information, and updates will be collected here as the event gets closer.'
    },
    about: {
      eyebrow: 'ABOUT',
      title: 'Yun Gang Shop is preparing its TWBC vendor content so product information is easy to find.',
      body: 'This site will collect planned products, booth positioning, and future updates. When new items and images are ready, the Vue structure can be updated quickly for TWBC visitors.'
    },
    products: {
      eyebrow: 'PRODUCTS',
      title: 'Planned products will be organized here, with images stored in public/products.',
      pricePrefix: 'NT$',
      tags: {
        apparel: 'Apparel',
        print: 'Print',
        merch: 'Merch'
      },
      items: {
        brandPolo: {
          name: 'Brand Polo Shirt',
          description: 'A clean and comfortable team shirt for booth staff, events, and everyday brand use.'
        },
        eventBrochure: {
          name: 'Event Brochure',
          description: 'A compact printed guide for brand story, schedules, and product information.'
        },
        canvasBag: {
          name: 'Custom Canvas Bag',
          description: 'A practical item for documents, samples, and gifts while keeping the brand visible.'
        }
      }
    },
    footer: {
      homeAria: 'Back to Yun Gang Shop home',
      tagline: 'Preparing a vendor booth for TWBC',
      navAria: 'Footer links',
      twbc: 'TWBC',
      products: 'Products',
      about: 'About Yun Gang',
      vendorLine: 'Vendor preparing for TWBC',
      quote: '"Bring what we love to the booth, carefully."'
    }
  }
};

const supportedLocaleCodes = locales.map((item) => item.code);

const normalizeLocale = (value) => {
  if (!value) {
    return fallbackLocale;
  }

  const normalized = String(value).toLowerCase();

  if (normalized.startsWith('en')) {
    return 'en';
  }

  if (normalized.startsWith('zh')) {
    return 'zh-TW';
  }

  return supportedLocaleCodes.includes(value) ? value : fallbackLocale;
};

const readInitialLocale = () => {
  if (typeof window === 'undefined') {
    return fallbackLocale;
  }

  const params = new URLSearchParams(window.location.search);
  const queryLocale = params.get('lang');

  if (queryLocale) {
    return normalizeLocale(queryLocale);
  }

  try {
    const storedLocale = window.localStorage.getItem(storageKey);

    if (storedLocale) {
      return normalizeLocale(storedLocale);
    }
  } catch {
    // Ignore storage failures, such as private browsing restrictions.
  }

  return normalizeLocale(window.navigator?.language);
};

const locale = ref(readInitialLocale());

const readMessage = (localeCode, path) => {
  const source = messages[localeCode] ?? messages[fallbackLocale];
  const fallback = messages[fallbackLocale];
  const segments = path.split('.');
  const value = segments.reduce((result, segment) => result?.[segment], source);
  const fallbackValue = segments.reduce((result, segment) => result?.[segment], fallback);

  return value ?? fallbackValue ?? path;
};

const formatMessage = (message, values = {}) => String(message).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');

export const setLocale = (nextLocale) => {
  locale.value = normalizeLocale(nextLocale);

  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(storageKey, locale.value);
  } catch {
    // Locale switching should keep working even when storage is unavailable.
  }
};

export const t = (path, values) => formatMessage(readMessage(locale.value, path), values);

export const currentLocale = computed(() => locales.find((item) => item.code === locale.value) ?? locales[0]);

export const useI18n = () => ({
  locale,
  locales,
  currentLocale,
  setLocale,
  t
});

const setMeta = (name, content) => {
  const selector = `meta[name="${name}"]`;
  const element = document.head.querySelector(selector) ?? document.createElement('meta');

  element.setAttribute('name', name);
  element.setAttribute('content', content);
  document.head.appendChild(element);
};

export const installI18nHead = () => {
  watch(
    locale,
    () => {
      document.documentElement.lang = currentLocale.value.htmlLang;
      document.documentElement.dataset.locale = locale.value;
      document.title = t('site.title');
      setMeta('description', t('site.description'));
    },
    { immediate: true }
  );
};
