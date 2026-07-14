const normalizePublicPath = (path: string) => path.replace(/^\/+/, '');

export const publicAsset = (path = '') => `${import.meta.env.BASE_URL}${normalizePublicPath(path)}`;

export const usePublicAssets = () => ({
  baseUrl: import.meta.env.BASE_URL,
  publicAsset,
  productAsset: (fileName: string) => publicAsset(`products/${normalizePublicPath(fileName)}`)
});

export default usePublicAssets;
