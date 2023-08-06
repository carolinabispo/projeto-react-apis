import React, { useContext, useEffect, useState } from "react";
import pokeball from "../../utils/pokebola.png";
import { goToDetails } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {
  CatchButton,
  Container,
  DetailsButton,
  Pokeball,
  Pokemon,
  PokemonName,
  PokemonNumber,
  Types,
  TypesContainer,
} from "./styled";

const PokemonCard = ({ name, image,id,types }) => {
  const navigate = useNavigate();

  const handleType = ()=>{
    if(types[1]){
      return types[0].type.name +" "+ types[1].type.name
    }else { return types[0].type.name}
  }

console.log(types);
  return (
    <Container>
      <div>
        <PokemonNumber>{id}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
        <TypesContainer>
          <Types>
          {handleType()}
          </Types>
        </TypesContainer>
        <DetailsButton onClick={() => goToDetails(navigate)}>
          Details
        </DetailsButton>
      </div>
      <div>
        <Pokemon src={image} alt="" />
        <CatchButton>Cath!</CatchButton>
      </div>
      <Pokeball src={pokeball} alt="" />
    </Container>
  );
};

export default PokemonCard;
