export type CartInterface = CartItem[];

export interface CartItem {
  _id: string;
  store_id: string;
  title: string;
  price: number;
  currency: string;
  images: string[];
  categories_id: string[];
  subcategories_id: string[];
  stock_Quantity: number;
  store: string;
}
