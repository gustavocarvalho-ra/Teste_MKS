import { motion } from "framer-motion";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Products from "@components/Products";



export default function Home() {
  return (
    <div>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}
