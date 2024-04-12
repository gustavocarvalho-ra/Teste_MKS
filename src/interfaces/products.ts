export interface ProductsRequest {
  page: number;
  order: string;
}

export interface ProductsResponse {
  products: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    quantity: number
  }[];
}