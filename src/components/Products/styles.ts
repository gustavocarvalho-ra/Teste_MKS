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
      }
      button:hover {
        cursor: pointer;
        background: #002;
      }
    }
  }
`