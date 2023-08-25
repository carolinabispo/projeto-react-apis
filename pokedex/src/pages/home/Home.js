import React, { useContext } from "react";
import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { ApiContext } from "../../contexts/useApiContext";
import { getColors } from "../../functions/ReturnCardColors";
import { Card, Title, Container } from "./styled";
import { ModalPokemon } from "../../components/modal/ModalPokemon";

const Home = () => {
  const { pokemons } = useContext(ApiContext);

  return (
    <> 
      <div>
          <Header />
        </div>
      <div >
       
        <Title>
            <p>Todos os pokémons</p>
          </Title>
   
        <Card>
          
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
        </Card>
      </div>
      <ModalPokemon/>
    </>
  );
};

export default Home;
