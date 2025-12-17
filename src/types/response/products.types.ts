export type ProductsListResponse = {
  products: ProductsDetailResponse[];
  total: number;
  skip: number;
  limit: number;
};

type ProductsDetailReview = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductsDetailResponse = {
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
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductsDetailReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
};

// ======================

type ProductsCategoryProductsResponse = {
  id: number;
  title: string;
  category: string;
};

export type ProductsCategoryResponse = {
  products: ProductsCategoryProductsResponse[];
  total: number;
  skip: number;
  limit: number;
};

// ======================
export type ProductsCategoryListResponse = string[];

// ======================
export type ProductsCatagoriesItemResponse = {
  slug: string;
  name: string;
  url: string;
};

type ProductsCatagoriesResponse = ProductsCatagoriesItemResponse[];

// ======================

export type ProductSearchResponse = {
  products: ProductsCategoryProductsResponse[];
  total: number;
  skip: number;
  limit: number;
};
