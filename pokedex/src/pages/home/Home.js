import React from "react";
import Header from "../../components/header/Header";
import "../home/style.css";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
const Home = () => {
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
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
