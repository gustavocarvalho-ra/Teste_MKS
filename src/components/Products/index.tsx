import { Container } from "./styles";
import Image from "next/image";

export default function Products() {
  return (
    <Container>
      <section>
        <div>
          
          <button>
            <Image src='/iconBag.svg' alt="Imagem do carrinho de compra" width={15} height={15}/>
            <p style={{paddingLeft: '10px'}}>
              Comprar
            </p>
          </button>
        </div>




        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </section>
    </Container>
  )
}