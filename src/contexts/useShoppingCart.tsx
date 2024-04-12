import { useToast } from "@hooks/useToast";
import { parseCookies, setCookie } from "nookies";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
  quantity: number;
}

type UseShoppingCartData = {
  listShoppingCart: ProductProps[];
  handleAddProductShopping: (product: ProductProps) => void;
  handleDecreaseQuantity: (productId: number) => void;
  handleIncreaseQuantity: (productId: number) => void;
  handleRemoveProductShopping: (productId: number) => void;
};

const UseShoppingCartContext = createContext({} as UseShoppingCartData);

export const UseShoppingCartProvider = ({ children }: UseShoppingCartProps) => {
  const { toastSuccess } = useToast();

  const [listShoppingCart, setListShoppingCart] = useState<ProductProps[]>([]);

  useEffect(() => {
    const listShoppingCartStorage = localStorage.getItem(
      "listShoppingCartStorage",
    );
    if (listShoppingCartStorage) {
      setListShoppingCart(JSON.parse(listShoppingCartStorage));
    }
  }, []);

  const handleAddProductShopping = (product: ProductProps) => {
    const existingProductIndex = listShoppingCart.findIndex(
      (item) => item.id === product.id,
    );

    if (existingProductIndex !== -1) {
      const updatedListShoppingCart = [...listShoppingCart];
      updatedListShoppingCart[existingProductIndex].quantity += 1;

      setListShoppingCart(updatedListShoppingCart);
      localStorage.setItem(
        "listShoppingCartStorage",
        JSON.stringify(updatedListShoppingCart),
      );

      toastSuccess({
        title: `Adicionado outro ${product.name} no carrinho`,
      });
    } else {
      setListShoppingCart([...listShoppingCart, { ...product, quantity: 1 }]);
      toastSuccess({ title: "Produto adicionado no carrinho!" });

      localStorage.setItem(
        "listShoppingCartStorage",
        JSON.stringify([...listShoppingCart, { ...product, quantity: 1 }]),
      );
    }
  };

  const handleRemoveProductShopping = (productId: number) => {
    const updatedListShoppingCart = listShoppingCart.filter(
      (product) => product.id !== productId,
    );
    setListShoppingCart(updatedListShoppingCart);
    localStorage.setItem(
      "listShoppingCartStorage",
      JSON.stringify(updatedListShoppingCart),
    );
    toastSuccess({ title: "Produto removido do carrinho!" });
  };

  const handleDecreaseQuantity = (productId: number) => {
    const updatedListShoppingCart = listShoppingCart
      .map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);

    setListShoppingCart(updatedListShoppingCart);
    localStorage.setItem(
      "listShoppingCartStorage",
      JSON.stringify(updatedListShoppingCart),
    );
  };

  const handleIncreaseQuantity = (productId: number) => {
    const updatedListShoppingCart = listShoppingCart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setListShoppingCart(updatedListShoppingCart);
    localStorage.setItem(
      "listShoppingCartStorage",
      JSON.stringify(updatedListShoppingCart),
    );
  };

  return (
    <UseShoppingCartContext.Provider
      value={{
        listShoppingCart,
        handleAddProductShopping,
        handleRemoveProductShopping,
        handleDecreaseQuantity,
        handleIncreaseQuantity,
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

  return  context;
};