import React, { useContext } from "react";
<<<<<<< HEAD
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { ApiContext } from "../../contexts/useApiContext";
import { getColors } from "../../functions/ReturnCardColors";
import { PokemonCardContext } from "../../contexts/PokemonCardContext";
import HeaderPokedex from "../../components/headerPokedex/HeaderPokedex";
import { CardDiv, TitlePokedex } from "./styled";
=======
import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import "../pokedex/styled.css";
import { ApiContext } from "../../contexts/useApiContext";
import { getColors } from "../../functions/ReturnCardColors";
import { PokemonCardContext } from "../../contexts/PokemonCardContext";
>>>>>>> cff038e05aaed14097a6707dd9af41d5f5e804c8
const Pokedex = () => {
  const { pokemons } = useContext(ApiContext);
  console.log(pokemons);
  const { pokemonCart } = useContext(PokemonCardContext);

  return (
    <>
      <div className="header_pokedex">
<<<<<<< HEAD
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
=======
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
>>>>>>> cff038e05aaed14097a6707dd9af41d5f5e804c8
