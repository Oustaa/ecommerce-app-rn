export interface SpecificationInterface {
  name: string;
  value: string;
}

export interface ProductMultipeOnes {
  _id: string;
  store_id: string;
  title: string;
  price: number;
  currency: string;
  images: string[];
  categories_id: string[];
  subcategories_id: string[];
  store: string;
}

export interface SingleProductInterface {
  _id: string;
  store_id: string;
  title: string;
  price: number;
  currency: string;
  images: string[];
  specifications: SpecificationInterface[];
  about: string[];
  reviewsOverview: {
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
  };
  description: string;
  reviews: number;
  extra_images: string[];
  categories_id: string[];
  subcategories_id: string[];
  inserted_at: string;
  available: boolean;
  stock_Quantity: number;
  views: number;
  visits: number;
  QandA: [];
  store: string;
}
