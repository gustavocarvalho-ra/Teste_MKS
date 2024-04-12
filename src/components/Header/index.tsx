import { useDisclosure } from "@chakra-ui/react";
import { HeaderS, CartCheckout } from "./styles";
import Image from "next/image";
// import { DrawerShopping } from "@components/Drawer";
import { useShoppingCart } from "@contexts/useShoppingCart";
import { DrawerShopping } from "@components/Drawer";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { listShoppingCart } = useShoppingCart();

  return (
    <HeaderS>
      <h1>
        MKS <span>Sistemas</span>
      </h1>
      <CartCheckout onClick={onOpen}>
        <Image
          src="/iconCart.svg"
          alt="Imagem do carrinho de compra"
          width={15}
          height={15}
        />
        <h1>{listShoppingCart.length}</h1>
      </CartCheckout>

      <DrawerShopping isOpen={isOpen} onClose={onClose} />
    </HeaderS>
  );
}