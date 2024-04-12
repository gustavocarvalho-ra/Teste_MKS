// import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main style={{width: '100%', height: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#030813'}}>
      <Image
          src="/404.svg"
          alt="Imagem do carrinho de compra"
          width={750}
          height={750}
        />
        {/* <Link
          color="red"
          href=" /">
          Go back home
        </Link> */}
        <a href=" /" style={{color: '#fff', fontSize: '30px', fontFamily: 'Montserrat'}}>Clique aqui para voltar</a>
    </main>
  );
}
