import styled from "styled-components"

export const HeaderS = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 101px;
  background: #0F52BA;

  h1 {
    color: #fff;
    font-size: 40px;
    font-family: 'Montserrat';
    font-weight: 600;
    margin-left: 65px;
  }
  
  span {
    font-weight: 100;
    font-size: 20px;
  }
`

export const CartCheckout = styled.div `
  width: 60px;
  height: 40px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 12px;
  margin-right: 65px;
  font-weight: 700;
  font-size: 20px;

  h1 {
    font-size: 15px;
    color: #000;
    margin: 0;
    font-weight: 700;
  }
`