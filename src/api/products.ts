import { ProductsRequest, ProductsResponse } from "@interfaces/products";
import { axiosInstance } from "./axiosInstance";

export const productsList = async ({ page, order }: ProductsRequest) => {
  const { data } = await axiosInstance.get<ProductsResponse>(
    `/products?page=${page}&rows=5&sortBy=id&orderBy=${order}`,
  );

  return data;
};