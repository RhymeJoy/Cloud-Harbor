import type { LocaleCode } from '../i18n';
import { publicAsset, publicBasePath } from './usePublicAssets';

export const siteOrigin = 'https://www.cloud-harbor.org';
export const defaultOgImage = 'avatar.avif';

const localeMap: Record<LocaleCode, string> = {
  'zh-TW': 'zh_TW',
  en: 'en_US'
};

const isAbsoluteUrl = (value: string) => /^https?:\/\//i.test(value);

export const absoluteSiteUrl = (path = '') => {
  if (isAbsoluteUrl(path)) {
    return path;
  }

  const sitePath = path.startsWith(publicBasePath) ? path : publicAsset(path);

  return new URL(sitePath, siteOrigin).toString();
};

type SiteOgMetaOptions = {
  title: string;
  description: string;
  locale: LocaleCode;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'product';
};

export const createSiteOgMeta = ({
  title,
  description,
  locale,
  path = '',
  image = defaultOgImage,
  imageAlt = title,
  type = 'website'
}: SiteOgMetaOptions) => {
  const url = absoluteSiteUrl(path);
  const imageUrl = absoluteSiteUrl(image);

  return [
    { key: 'og:type', property: 'og:type', content: type },
    { key: 'og:site_name', property: 'og:site_name', content: 'Cloud Harbor' },
    { key: 'og:locale', property: 'og:locale', content: localeMap[locale] },
    { key: 'og:title', property: 'og:title', content: title },
    { key: 'og:description', property: 'og:description', content: description },
    { key: 'og:url', property: 'og:url', content: url },
    { key: 'og:image', property: 'og:image', content: imageUrl },
    { key: 'og:image:alt', property: 'og:image:alt', content: imageAlt },
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { key: 'twitter:title', name: 'twitter:title', content: title },
    { key: 'twitter:description', name: 'twitter:description', content: description },
    { key: 'twitter:image', name: 'twitter:image', content: imageUrl },
    { key: 'twitter:image:alt', name: 'twitter:image:alt', content: imageAlt }
  ];
};
