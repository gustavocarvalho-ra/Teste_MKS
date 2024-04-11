import styled from "styled-components";



export const Container = styled.div `
  width: 100%;
  height: 89vh;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 938px;
    height: 601px;
    display: flex;
    flex-wrap: wrap;
    background: black;
    gap: 10px;

    div {
      border-radius: 10px;
      width: 218px;
      height: 285px;
      background: #fff;
      display: flex;
      align-items: flex-end;
      overflow: hidden;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        width: 218px;
        height: 31.91px;
        position: relative;
        background: #0F52BA;
        border-radius: 0 0 8px 8px;
        transition: 2s;

        color: #fff;
        font-size: 14px;
        font-weight: 600;
        font-family: 'Montserrat';
        /* font-family: inherit; */
      }
      button:hover {
        cursor: pointer;
        background: #002;
      }
    }
  }
`

export const Bag = styled.div `
  position: absolute;
  width: 486px;
  height: 90vh;
  right: 0;
  background: #0F52BA;
  z-index: 1;
  box-shadow: -3px 1px 7px 1px #000;
  display: flex;


  div {
    width: 100%;
    height: 100vh;
    display: flex;
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    font-family: 'Montserrat';
    bottom: 0px;
  }

  button {
    width: 486px;
    height: 97px;
    background: #000;
    border: 0;
    position: absolute;
    bottom: 0px;
    z-index: 2;
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    font-family: 'Montserrat';
    transition: 1s;
  }
  button:hover {
    cursor: pointer;
    background: #002;
    box-shadow: -3px 1px 7px 1px #000;
  }
`