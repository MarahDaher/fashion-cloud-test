export interface IProductFilter {
  brandName?: string;
  category?: string;
}

export interface IProduct {
  _id: string;
  gtin: number;
  brandName: string;
  stock: number;
  category: string;
  color: string;
  name: string;
  image: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}
