import { productsList } from "@api/products";
import { PRODUCTS_LIST } from "@constants/entitiesKey";
import { ProductsRequest } from "@interfaces/products";
import { useQuery } from "@tanstack/react-query";

export const useProductsList = ({ page, order }: ProductsRequest) => {
  return useQuery({
    queryKey: [PRODUCTS_LIST, page, order],
    queryFn: () => productsList({ page, order }),
  });
};