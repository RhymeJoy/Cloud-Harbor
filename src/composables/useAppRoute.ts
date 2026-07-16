import { computed } from 'vue';
import { useRoute } from '#app';
import { publicAsset } from './usePublicAssets';

const normalizeRoutePath = (path: string) => path.replace(/^\/+/, '').replace(/\/+$/, '');

export const routeHref = (path = '') => publicAsset(normalizeRoutePath(path));

export const useAppRoute = () => {
  const route = useRoute();
  const routePath = computed(() => normalizeRoutePath(route.path));
  const isProductsIndexPage = computed(() => routePath.value === 'products');
  const isProductDetailPage = computed(() => routePath.value.startsWith('products/'));

  return {
    routePath,
    isProductsIndexPage,
    isProductDetailPage,
    isProductsPage: computed(() => isProductsIndexPage.value || isProductDetailPage.value)
  };
};
