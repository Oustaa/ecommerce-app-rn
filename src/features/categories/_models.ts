import { ProductType } from "../../core/productTypes";

export type ProductsByCategory = ProductsBySubCategoryInterface[];

export interface ProductsBySubCategoryInterface {
  _id: string;
  products: ProductType[];
}

export type CategoriesInterface = CategoryInterface[];

export interface CategoryInterface {
  _id: string;
  name: string;
  subCategories: SubCategory[];
  image: string;
}

export interface SubCategory {
  name: string;
  specifications: string[];
}
