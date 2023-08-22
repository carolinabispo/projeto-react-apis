import styled from "styled-components";

// .div_seila,
// .div_seila2 {
//   width: 100%;
//   height: 160px;
//   background-color: #fff;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   position: relative;
// }
export const ContainerHeader = styled.div`
  width: 100%;
  height: 160px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;
export const DivImg = styled.div`
  width: 307px;
  height: 113px;
  margin: 1.31rem auto;
  cursor: pointer;
`;

export const DivButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  /* flex-wrap: wrap; */
  margin-left: -80%;
`;

export const Button = styled.button`
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  /* text-decoration-line: underline; */
  background-color: inherit;
  border: none;
  bottom: 50px;
  cursor: pointer;
`;

