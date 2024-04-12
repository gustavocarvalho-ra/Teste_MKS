import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 600px;
  padding-top: 3rem;
  flex-direction: column;
`;

export const ListProducts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const FilterList = styled.div`
  margin-right: 10rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CardProduct = styled.button`
  width: 218px;
  height: 290px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 5px grey;
`;

export const SectionImage = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.7rem;
`;

export const NameAndPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

export const NameProduct = styled.h1`
  width: 150px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
`;

export const PriceProduct = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background: #373737;
  border-radius: 5px;
  padding: 0.5rem;

  font-size: 15px;
  line-height: 15px;
  font-weight: 700;
  color: #fff;
`;

export const SectionDescriptionProduct = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextDescription = styled.p`
  font-weight: 300;
  line-height: 12px;
  font-size: 10px;
  color: #2c2c2c;
  text-align: justify;
`;

export const ButtonBuy = styled.button`
  width: 218px;
  height: 31.91px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #0f52ba;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;

export const ContainerSkeleton = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const PageProductList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 12px;

  button {
    border-radius: 8px;
    width: 32px;
    background: #80808061;
    height: 32px;
  }
`;