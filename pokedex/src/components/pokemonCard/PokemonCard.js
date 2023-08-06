import React from "react";
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
  PokemonType,
  Types,
  TypesContainer,
} from "./styled";
import { getTypes } from "../../functions/ReturnPokemonsTypes";


const PokemonCard = ({ name, image,id,types,cardColor }) => {
  const navigate = useNavigate();

  // const {pokemonCart,pokemonAmount,addToPokedex} = useContext(PokemonCardContext)

  // const handleType = ()=>{
  //   if(types[1]){
  //     return types[0].type.name +" "+ types[1].type.name
  //   }else { return types[0].type.name}
  // }

  return (
    <Container color={cardColor}>
      <div>
        <PokemonNumber>{id}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
        <TypesContainer>
          <Types>
            {types.map((type)=>{ 
              return <PokemonType key={type} src={getTypes(type)} alt="" />
            })}
          {/* {handleType()} */}
          </Types>
        </TypesContainer>
        <DetailsButton onClick={() => goToDetails(navigate)}>
          Details
        </DetailsButton>
      </div>
      <div>
        <Pokemon src={image} alt="" />
        <CatchButton >Cath!</CatchButton>
      </div>
      <Pokeball src={pokeball} alt="" />
    </Container>
  );
};

export default PokemonCard;
