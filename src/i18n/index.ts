import { computed, ref, watch, type ComputedRef, type Ref } from 'vue';
import zhTW from './zh_tw.json';
import en from './en.json';

export const fallbackLocale = 'zh-TW';

export type LocaleCode = 'zh-TW' | 'en';

type LocaleOption = {
  code: LocaleCode;
  label: string;
  htmlLang: string;
};

type MessageTree = {
  [key: string]: MessageValue;
};

type MessageValue = string | string[] | MessageTree;

export const locales: LocaleOption[] = [
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

const messages: Record<LocaleCode, MessageTree> = {
  'zh-TW': zhTW,
  en
};

const supportedLocaleCodes = locales.map((item) => item.code);

const normalizeLocale = (value?: string | null): LocaleCode => {
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

  return supportedLocaleCodes.includes(value as LocaleCode) ? (value as LocaleCode) : fallbackLocale;
};

const readInitialLocale = (): LocaleCode => {
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

const locale = ref<LocaleCode>(readInitialLocale());

const readNestedMessage = (source: MessageTree, path: string) =>
  path.split('.').reduce<MessageValue | undefined>(
    (result, segment) => (typeof result === 'object' && !Array.isArray(result) ? result[segment] : undefined),
    source
  );

const readMessage = (localeCode: LocaleCode, path: string): MessageValue => {
  const source = messages[localeCode] ?? messages[fallbackLocale];
  const fallback = messages[fallbackLocale];
  const value = readNestedMessage(source, path);
  const fallbackValue = readNestedMessage(fallback, path);

  return value ?? fallbackValue ?? path;
};

const formatMessage = (message: MessageValue, values: Record<string, string | number> = {}) =>
  String(message).replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));

export const setLocale = (nextLocale: string) => {
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

export const t = (path: string, values?: Record<string, string | number>) => formatMessage(readMessage(locale.value, path), values);
export const tm = (path: string) => readMessage(locale.value, path);

export const currentLocale = computed(() => locales.find((item) => item.code === locale.value) ?? locales[0]) as ComputedRef<LocaleOption>;

export const useI18n = (): {
  locale: Ref<LocaleCode>;
  locales: LocaleOption[];
  currentLocale: ComputedRef<LocaleOption>;
  setLocale: (nextLocale: string) => void;
  t: (path: string, values?: Record<string, string | number>) => string;
  tm: (path: string) => MessageValue;
} => ({
  locale,
  locales,
  currentLocale,
  setLocale,
  t,
  tm
});

const setMeta = (name: string, content: string) => {
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
