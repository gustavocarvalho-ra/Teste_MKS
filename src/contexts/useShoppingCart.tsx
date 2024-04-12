import { useToast } from "@hooks/useToast";
import { createContext, ReactNode, useContext, useState } from "react";

type UseShoppingCartProps = {
  children: ReactNode;
};

interface ProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
}

type UseShoppingCartData = {
  listShoppingCart: ProductProps[];
  handleAddProductShopping: (product: ProductProps) => void;
};

const UseShoppingCartContext = createContext({} as UseShoppingCartData);

export const UseShoppingCartProvider = ({ children }: UseShoppingCartProps) => {
  const [listShoppingCart, setListShoppingCart] = useState<ProductProps[]>([]);
  const { toastSuccess } = useToast();

  const handleAddProductShopping = (product: any) => {
    setListShoppingCart([...listShoppingCart, product]);
    toastSuccess({ title: "Produto adicionado no carrinho!" });
  };

  return (
    <UseShoppingCartContext.Provider
      value={{
        listShoppingCart,
        handleAddProductShopping,
      }}
    >
      {children}
    </UseShoppingCartContext.Provider>
  );
};
export const useShoppingCart = () => {
  const context = useContext(UseShoppingCartContext);

  if (!context) {
    throw new Error("useShoppingCart must be used within an UploadProvider");
  }

  return context;
};