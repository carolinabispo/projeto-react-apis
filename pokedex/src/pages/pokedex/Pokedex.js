import React, { useContext } from "react";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { ApiContext } from "../../contexts/useApiContext";
import { getColors } from "../../functions/ReturnCardColors";
import { PokemonCardContext } from "../../contexts/PokemonCardContext";
import HeaderPokedex from "../../components/headerPokedex/HeaderPokedex";
import { CardDiv, TitlePokedex } from "./styled";
const Pokedex = () => {
  const { pokemons } = useContext(ApiContext);
  console.log(pokemons);
  const { pokemonCart } = useContext(PokemonCardContext);

  return (
    <>
      <div className="header_pokedex">
        <HeaderPokedex />
      </div>
      <TitlePokedex className="title_pokedex">
        <p>Meus pokémons</p>
      </TitlePokedex>
      <CardDiv>
        {pokemonCart.map((capturedPokemon) => (
          <PokemonCard
            cardColor={getColors(capturedPokemon.pokemon.types[0])}
            pokemon={capturedPokemon.pokemon}
            id={capturedPokemon.pokemon.id}
            name={capturedPokemon.pokemon.name}
            image={
              capturedPokemon.pokemon.sprites.other["official-artwork"]
                .front_default
            }
            types={capturedPokemon.pokemon.types}
          />
        ))}
      </CardDiv>
    </>
  );
};

export default Pokedex;