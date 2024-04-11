import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 88.3vh;
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
      width: 218px;
      height: 285px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      overflow: hidden;
      flex-direction: column;
      justify-content: flex-end;
      font-family: 'Montserrat';

      q {
        width: 150px;
        height: 150px;
        background: black;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;

        p {
          width: 150px;
          height: 40px;
          padding: 5px 0 0 9px;

          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #2C2C2C;
        }

        g {
          width: 64px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          background: #373737;
          border-radius: 5px;

          font-size: 15px;
          line-height: 15px;
          font-weight: 700;
          color: #fff;
        }
      }

      desc {
        width: 100%;
        height: 35px;
        padding-left: 9px;
        p {
          font-weight: 300;
          line-height: 12px;
          font-size: 10px;
          color: #2c2c2c;
        }
      }

      button {
        width: 218px;
        height: 31.91px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: #0F52BA;
        transition: 2s;


        p {
          color: #fff;
          font-size: 14px;
          line-height: 18px;
          font-weight: 600;
          padding-left: 13px;

        }
      }
      button:hover {
        cursor: pointer;
        background: #002;
      }
    }
  }
`