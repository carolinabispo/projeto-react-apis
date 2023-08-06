import React, { useContext} from "react";
import Header from "../../components/header/Header";
import "../home/style.css";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { ApiContext } from "../../contexts/useApiContext";
import { getColors } from "../../functions/ReturnCardColors";

const Home = () => {
  const { pokemons } = useContext(ApiContext);

  return (
    <div>
      <div className="div_home">
        <div>
          <Header />
        </div>
        <div className="card">
          <div className="title">
            <p>Todos os pokémons</p>
          </div>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              cardColor={getColors(pokemon.types[0])}
              pokemon={pokemon}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other["official-artwork"].front_default}
              types={pokemon.types}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
