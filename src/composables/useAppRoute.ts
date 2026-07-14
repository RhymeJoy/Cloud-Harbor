import { computed, onMounted, onUnmounted, ref } from 'vue';
import { publicAsset } from './usePublicAssets';

const basePath = import.meta.env.BASE_URL;

const normalizeRoutePath = () => {
  const pathname = window.location.pathname;
  const withoutBase = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname.replace(/^\/+/, '');

  return withoutBase.replace(/\/+$/, '');
};

export const routeHref = (path = '') => publicAsset(path);

export const useAppRoute = () => {
  const routePath = ref(normalizeRoutePath());
  const syncRoute = () => {
    routePath.value = normalizeRoutePath();
  };

  onMounted(() => {
    window.addEventListener('popstate', syncRoute);
  });

  onUnmounted(() => {
    window.removeEventListener('popstate', syncRoute);
  });

  return {
    routePath,
    isProductsPage: computed(() => routePath.value === 'products')
  };
};
