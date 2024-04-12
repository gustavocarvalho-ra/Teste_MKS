import Header from "@components/Header";
import Footer from "@components/Footer";
import Products from "@components/Products";
import { Container } from "@styles/global";

export default function Home() {
  return (
    <Container>
      <Header />
      <Products />
      <Footer />
    </Container>
  );
}