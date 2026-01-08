type ProductItemDimensions = {
  width: number;
  height: number;
  depth: number;
};
type ProductItemReviews = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};
type ProductItemMeta = {
  createdAt: string;
  updatedAt: string;
  qrCode: string;
};

export type ProductItemResponse = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductItemDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductItemReviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductItemMeta;
  thumbnail: string;
  images: string[];
};

export type CategoryListResponse = string[];
