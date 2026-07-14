import { publicAsset } from '../composables/usePublicAssets';

export type Product = {
  id: string;
  nameKey: string;
  price: number;
  tagKey: string;
  image: string;
  descriptionKey: string;
};

export const products: Product[] = [
  {
    id: 'brandPolo',
    nameKey: 'products.items.brandPolo.name',
    price: 320,
    tagKey: 'products.tags.apparel',
    image: publicAsset('products/brand-polo.svg'),
    descriptionKey: 'products.items.brandPolo.description'
  },
  {
    id: 'eventBrochure',
    nameKey: 'products.items.eventBrochure.name',
    price: 180,
    tagKey: 'products.tags.print',
    image: publicAsset('products/event-brochure.svg'),
    descriptionKey: 'products.items.eventBrochure.description'
  },
  {
    id: 'canvasBag',
    nameKey: 'products.items.canvasBag.name',
    price: 450,
    tagKey: 'products.tags.merch',
    image: publicAsset('products/canvas-bag.svg'),
    descriptionKey: 'products.items.canvasBag.description'
  }
];
