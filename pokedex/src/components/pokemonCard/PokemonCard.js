import React, { useContext } from "react";
import pokeball from "../../utils/pokebola.png";
import { goToDetails } from "../../routes/Coordinator";
import { Link, useNavigate } from "react-router-dom";
import {
  CatchButton,
  Container,
  DetailsButton,
  Pokeball,
  Pokemon,
  PokemonName,
  PokemonNumber,
  PokemonType,
  Types,
  TypesContainer,
} from "./styled";
import { getTypes } from "../../functions/ReturnPokemonsTypes";
import { ApiContext } from "../../contexts/useApiContext";
import { PokemonCardContext } from "../../contexts/PokemonCardContext";

const PokemonCard = ({ pokemon, name, image, id, types, cardColor }) => {
  const navigate = useNavigate();

  const { addToPokedex } = useContext(PokemonCardContext);

  // const handleType = ()=>{
  //   if(types[1]){
  //     return types[0].type.name +" "+ types[1].type.name
  //   }else { return types[0].type.name}
  // }

  return (
    <Container color={cardColor}>
      <div>
        <PokemonNumber>{`# ${ id}`}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
        <TypesContainer>
          <Types>
            {types.map((type) => {
              return <PokemonType key={type} src={getTypes(type)} alt="" />;
            })}
            {/* {handleType()} */}
          </Types>
        </TypesContainer>
        <Link to={`/details/${id}`}>
          <DetailsButton>
            Details
          </DetailsButton>
        </Link>
      </div>
      <div>
        <Pokemon src={image} alt="" />
        <CatchButton onClick={() => addToPokedex(pokemon, name)}>
          Cath!
        </CatchButton>
      </div>
      <Pokeball src={pokeball} alt="" />
    </Container>
  );
};

export default PokemonCard;
