import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  height: 13.125rem;
  min-width: 400px;
  max-width: 440px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
`;
export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
  display: flex;
  padding: 0.3125rem 0.5rem;
  align-items: flex-start;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
  margin-left: -1.44rem;
`;

export const Types = styled.div`
  display: flex;
  padding: 0.3125rem 0.5rem;
  align-items: flex-start;
  border-radius: 0.5rem;
  gap: 1.5rem;
`;

export const Pokeball = styled.img`
  position: absolute;
  top: -25px;
  right: -25px;
  width: 13.17081rem;
  height: 13.17081rem;

  flex-shrink: 0;
`;

export const DetailsButton = styled.button`
    cursor: pointer;
  color: #fff;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  background-color: inherit;
  border: none;
  position: relative; /* Add this line */
  top: -30px; /* Adjust the value as needed */
  
`;

export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;
