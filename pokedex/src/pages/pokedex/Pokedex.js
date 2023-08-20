import React, { useContext } from "react";
import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import "../pokedex/styled.css";
import { ApiContext } from "../../contexts/useApiContext";
import { getColors } from "../../functions/ReturnCardColors";
import { PokemonCardContext } from "../../contexts/PokemonCardContext";
const Pokedex = () => {
  const { pokemons } = useContext(ApiContext);
  console.log(pokemons);
  const { pokemonCart } = useContext(PokemonCardContext);

  return (
    <>
      <div className="header_pokedex">
        <Header />
      </div>
      <div className="title_pokedex">
        <p>Meus pokémons</p>
      </div>
      <div className="card_div">
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
      </div>
    </>
  );
};

export default Pokedex;