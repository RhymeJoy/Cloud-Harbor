import { computed, ref, watch } from 'vue';
import zhTW from './zh_tw.json';
import en from './en.json';

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
  'zh-TW': zhTW,
  en
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
export const tm = (path) => readMessage(locale.value, path);

export const currentLocale = computed(() => locales.find((item) => item.code === locale.value) ?? locales[0]);

export const useI18n = () => ({
  locale,
  locales,
  currentLocale,
  setLocale,
  t,
  tm
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
