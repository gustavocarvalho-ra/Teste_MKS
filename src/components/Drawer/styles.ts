import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const NameProduct = styled.h1`
  font-weight: 400;
  font-size: 13px;
  color: #2c2c2c;
  line-height: 17px;
  width: 113px;
`;

export const BoxQtyProduct = styled.div`
  border-radius: 10px;
  border: 1px solid #bfbfbf;
  display: flex;
  align-items: center;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  justify-content: space-around;
`;

export const AddOrRemoveProduct = styled.button`
  font-size: 16px;
  font-weight: 400;
  padding: 0 0.6rem 0 0.6rem;
`;

export const QtdProduct = styled.p`
  border-right: 1px solid #bfbfbf;
  border-left: 1px solid #bfbfbf;
  padding: 0rem 0.7rem;
`;

export const ContainerShoppingCartEmpty = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  color: white;
`;

export const ButtonRemoveProduct = styled.button`
  width: 24px;
  height: 25px;
  background: #000;
  border-radius: 50%;
  color: #fff;
  position: relative;
  top: 12px;
  z-index: 1;
  left: 10px;
`;