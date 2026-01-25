/**
 * 만든 이유
 * - API 응압을 타입으로 고정하면:
 *   1) UI에서 안전하게 렌더링 가능(오타/누락 방지)
 *   2) 추후 리펙터링 시 영향 범위가 명확
 * - dummyJson의 /products 응답 구조를 최소 필요 필드 기준으로 정의한다.
 */

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

export type ProductsListResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type Product = {
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

export type GetMonkCategoryPromoItemsResponse = {
  id: number;
  img: string;
  alt: string;
  hover: string;
  background: string;
  color: string;
  text: string;
  button: string;
};
