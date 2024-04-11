import { HeaderS, CartCheckout } from './styles';
import Image from "next/image";

export default function Header() {
  return (
    <HeaderS>
      <h1>
        MKS <span>Sistemas</span>
      </h1>
      <CartCheckout>
        <Image src='/iconCart.svg' alt="Imagem do carrinho de compra" width={15} height={15}/>
        <h1>
          0
        </h1>
      </CartCheckout>
    </HeaderS>
  )
}