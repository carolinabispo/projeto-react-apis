import styled from "styled-components";

export const DivHeader = styled.div``;

export const Container = styled.div`
  background-color: #5e5e5e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 50px;
  width: 1280px;
  height: 663px;
  border-radius: 2.36788rem;
`;

export const TitleDetails = styled.div`
  flex-wrap: wrap;
  padding-top: 1.5rem;
  padding-left: 2.5rem;
  color: #ffffff;
  font-family: Poppins;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  height: 5rem;
  background-color: #5e5e5e;
`;

export const FrontBackImageContainer = styled.div`
  height: 38.19rem;
  width: 17.625rem;
  margin-top: 20px;
  margin-left: 2.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 282px;
  height: 282px;
  border-radius: 0.5rem;
  border: 2px solid #fff;
  background-color: #ffffff;
`;

export const StatusContainer = styled.div`
  margin-top: 30px;
  width: 343px;
  height: 570px;
  top: 24px;
  left: 360px;
  border-radius: 12px;
  background-color: #ffff;
`;

export const TypeContainer = styled.div`
  width: 292px;
  height: 453px;
  top: 184px;
  left: 771px;
  border-radius: 8px;
`;

export const MovesContainer = styled.div`
  display: flex;

  position: absolute;
  margin-top: 25rem;
  
  width: 292px;
  height: 28rem;
  top: 184px;
  margin-right: 10rem;
  border-radius: 17px;
  background: #ffffff;
`;

export const Moves = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  margin-top: 3rem;
  margin-left: -4.5rem;
  border-radius: 5px;
`;

export const MovesFont = styled.div`

  display: flex;
  align-items: start;
  width: 74px;
  height: 17px;
  font-family: Montserrat, sans-serif;
  /* font-size: 25px; */
  
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 5rem;
  margin-top: 20px;
`;

export const ButtonMoves = styled.button`
  border-radius: 12px;
  border: none;
  width: 102px;
  height: 37px;
  border: 1px;
  text-transform: capitalize;
  border-radius: 0.75rem;
border: 1px dashed rgba(0, 0, 0, 0.14);
background: #ECECEC;
display: inline-flex;
padding: 0.625rem;
align-items: flex-start;
gap: 0.625rem;

`;

export const ImageDetail = styled.img`
  position: absolute;
  width: 270px;
  height: 270px;
  top: 216px;
  margin-left: 13rem;
`;

export const PokemonNameDetail = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 2px;
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  text-transform: capitalize;
  color: #ffff;
`;

export const PokemonNumberDetail = styled.div`
  font-family: Inter, sans-serif;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #ffff;
`;

export const StatBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-transform: capitalize;
  margin: 1rem;
  flex-direction: row;

  .label {
    width: 100px;
    color: grey;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .number {
    margin-left: 1rem;
    color: #000000;
  }

  .bar {
    flex: 1;
    background-color: #e0e0e0;
    height: 10px;
    border-radius: 10px;
    margin-left: 10px;
    position: relative;

    .progress {
      height: 100%;
      background-color: orange;
      border-radius: 10px;
      max-width: calc(100% - 10px); /* Adjust the max-width */
    }
  }
`;

export const BaseTitle = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
  margin-left: 20px;
  font-family: Montserrat, sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 17px;
`;

export const Amount = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: 1rem;

  .total {
    color: grey;
  }
  .soma {
    color: #000000;
  }
`;
