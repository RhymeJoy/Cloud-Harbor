<script setup lang="ts">
import SiteFooter from './components/SiteFooter.vue';
import { createSiteOgMeta } from './composables/useSiteSeo';
import { useI18n } from './i18n';

const { currentLocale, locale, t } = useI18n();

useHead(() => {
  const title = t('site.title');
  const description = t('site.description');

  return {
    htmlAttrs: {
      lang: currentLocale.value.htmlLang,
      'data-locale': locale.value
    },
    title,
    meta: [
      { key: 'description', name: 'description', content: description },
      ...createSiteOgMeta({
        title,
        description,
        locale: locale.value,
        imageAlt: title
      })
    ]
  };
});
</script>

<template>
  <div class="app-shell">
    <div class="page-shell">
      <NuxtPage />
    </div>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-shell {
  flex: 1;
  width: min(1200px, 100%);
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}

@media (max-width: 640px) {
  .page-shell {
    padding: 16px 14px 40px;
  }
}
</style>
