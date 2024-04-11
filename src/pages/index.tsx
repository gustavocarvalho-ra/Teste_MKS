import { motion } from "framer-motion";
import styled from "styled-components";
import Header from "@components/Header";

const Footer = styled.div `
position: absolute;
  width: 100%;
  height: 34px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
`

export default function Home() {
  return (
    <div>
      <Header/>


      <Footer>
        <h1>
          MKS sistemas © Todos os direitos reservados
        </h1>
      </Footer>
    </div>
  );
}
