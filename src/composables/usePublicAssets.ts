const normalizePublicPath = (path: string) => path.replace(/^\/+/, '');
export const publicBasePath = '/';

export const publicAsset = (path = '') => `${publicBasePath}${normalizePublicPath(path)}`;

export const usePublicAssets = () => ({
  baseUrl: publicBasePath,
  publicAsset,
  productAsset: (fileName: string) => publicAsset(`products/${normalizePublicPath(fileName)}`)
});

export default usePublicAssets;
