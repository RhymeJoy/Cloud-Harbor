import { computed } from 'vue';
import { useRoute } from '#app';
import { publicAsset } from './usePublicAssets';

const normalizeRoutePath = (path: string) => path.replace(/^\/+/, '').replace(/\/+$/, '');

export const routeHref = (path = '') => publicAsset(path);

export const useAppRoute = () => {
  const route = useRoute();
  const routePath = computed(() => normalizeRoutePath(route.path));

  return {
    routePath,
    isProductsPage: computed(() => routePath.value === 'products')
  };
};
