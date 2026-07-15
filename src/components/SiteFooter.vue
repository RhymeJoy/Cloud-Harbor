<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '../i18n';
import { useQuotes } from '../composables/useQuotes';
import { publicAsset } from '../composables/usePublicAssets';
import { routeHref, useAppRoute } from '../composables/useAppRoute';

const logoSrc = publicAsset('favicon.ico');
const homeHref = publicAsset();
const currentYear = new Date().getFullYear();
const { locale, locales, setLocale, t, tm } = useI18n();
const { isProductsPage, isProductDetailPage } = useAppRoute();
const footerNavLinks = computed(() => {
  const links = isProductsPage.value
    ? [{ href: routeHref(), label: t('footer.home') }]
    : [{ href: routeHref('products/'), label: t('footer.products') }];

  if (isProductDetailPage.value) {
    links.push({ href: routeHref('products/'), label: t('footer.products') });
  }

  return links;
});
const quotes = computed(() => {
  const rawQuotes = tm('footer.quotes');
  const list = Array.isArray(rawQuotes) ? rawQuotes : [t('footer.quote')];

  return list.filter((quote) => typeof quote === 'string' && quote.trim());
});
const { currentQuote, isQuoteFadingOut } = useQuotes(quotes, 10000, t('footer.quotesLoading'));
</script>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="brand-link" :href="homeHref" :aria-label="t('footer.homeAria')">
            <img
              class="footer-logo"
              :src="logoSrc"
              alt=""
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
            <span>{{ t('site.title') }}</span>
          </a>
          <p class="footer-tagline">{{ t('footer.tagline') }}</p>
          <div class="footer-lang">
            <button
              v-for="option in locales"
              :key="option.code"
              type="button"
              class="lang-link"
              :class="{ active: locale === option.code }"
              :aria-pressed="locale === option.code"
              @click="setLocale(option.code)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <nav class="footer-links" :aria-label="t('footer.navAria')">
          <a href="https://twbronycon.org/" target="_blank" rel="noopener noreferrer">{{ t('footer.twbc') }}</a>
          <a v-for="link in footerNavLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
        </nav>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>© {{ currentYear }} {{ t('site.title') }}</p>
          <p>{{ t('footer.vendorLine') }}</p>
        </div>
        <div class="footer-quotes">
          <p :class="['quote-text', isQuoteFadingOut ? 'fade-out' : 'fade-in']">
            {{ currentQuote }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  z-index: 1;
  margin-top: 28px;
  padding: 48px 0 24px;
  color: #fff;
  background: linear-gradient(0deg, #100717 0%, rgba(40, 20, 60, 0.74) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.footer-container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.footer-top,
.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.footer-top {
  align-items: flex-end;
}

.footer-bottom {
  align-items: center;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 1.35rem;
  font-weight: 800;
}

.footer-logo {
  width: 48px;
  height: 48px;
  display: block;
}

.footer-tagline,
.footer-copyright p,
.quote-text {
  margin: 0;
}

.footer-tagline,
.footer-copyright,
.quote-text,
.lang-link {
  color: #ffb8de;
}

.footer-tagline,
.footer-copyright {
  opacity: 0.78;
}

.footer-lang {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.lang-link {
  padding: 0;
  border: 0;
  background: transparent;
  font-size: 0.85rem;
  font: inherit;
  opacity: 0.65;
  cursor: pointer;
}

.lang-link.active {
  opacity: 1;
  font-weight: 700;
  cursor: default;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;
}

.footer-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  color: #ffd8ee;
  font-weight: 700;
  transition: transform 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.footer-links a:hover {
  transform: translateY(-3px);
  color: #fff;
  background: rgba(255, 184, 222, 0.18);
}

.footer-divider {
  height: 1px;
  margin: 28px 0 20px;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.24) 50%, transparent 100%);
}

.footer-copyright {
  font-size: 0.86rem;
}

.footer-quotes {
  flex: 1;
  max-width: 60%;
  text-align: right;
}

.quote-text {
  font-size: 0.95rem;
  font-style: italic;
  transition: all 0.3s ease-in-out;
}

.fade-out {
  opacity: 0;
  transform: translateX(10px);
}

.fade-in {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 760px) {
  .site-footer {
    padding: 34px 0 20px;
  }

  .footer-container {
    width: min(100% - 28px, 1120px);
  }

  .footer-top,
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-links {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column-reverse;
  }

  .footer-quotes {
    max-width: 100%;
    text-align: center;
  }
}
</style>
