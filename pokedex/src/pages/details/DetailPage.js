import React, { useContext } from "react";
import Header from "../../components/header/Header";
// import "../details/styled.css";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../contexts/useApiContext";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { getColors } from "../../functions/ReturnCardColors";
import { Container, Title,MovesContainer,TypeContainer,DetailsContainer,FrontBackImageContainer,Image,StatusContainer } from "../details/styled";
import { PokemonType } from "../../components/pokemonCard/styled";
import { getTypes } from "../../functions/ReturnPokemonsTypes";


const DetailPage = ({types}) => {
  
  const { id } = useParams();
  const { pokemons } = useContext(ApiContext);
  console.log(pokemons);

  const pokemonDetail = pokemons.find((item) => {
    return item.id === parseInt(id);
  });

  const frontDefault = pokemonDetail?.sprites?.front_default;
  const backDefault = pokemonDetail?.sprites?.back_default;

  const hpStat = pokemonDetail?.stats.find(
    (stat) => stat.stat.name === "hp"
  )?.base_stat;
  const attack = pokemonDetail?.stats.find(
    (stat) => stat.stat.name === "attack"
  )?.base_stat;
  const defense = pokemonDetail?.stats.find(
    (stat) => stat.stat.name === "defense"
  )?.base_stat;
  const spAtk = pokemonDetail?.stats.find(
    (stat) => stat.stat.name === "special-attack"
  )?.base_stat;
  const spDef = pokemonDetail?.stats.find(
    (stat) => stat.stat.name === "special-defense"
  )?.base_stat;
  const speed = pokemonDetail?.stats.find(
    (stat) => stat.stat.name === "speed"
  )?.base_stat;
  const total = hpStat + attack + defense + spAtk + spDef + speed;
   
  return (
    <Container>
    <Header />
    <Title>Detalhes</Title>
    <DetailsContainer>
      <FrontBackImageContainer>
        <Image src={frontDefault} alt="front" />
        <Image src={backDefault} alt="back" />
      </FrontBackImageContainer>
      <StatusContainer>
        <h2>stats</h2>
        <ul>
          <li>hp: {hpStat}</li>
          <li>Attack: {attack}</li>
          <li>Defense: {defense}</li>
          <li>Sp. Atk.: {spAtk}</li>
          <li>Sp. Def: {spDef}</li>
          <li>Speed: {speed}</li>
          <li>Total: {total}</li>
        </ul>
      </StatusContainer>
      <div className="teste">
        <TypeContainer>
        {pokemonDetail && (
              <div>
                 <img src={pokemonDetail.sprites.other["official-artwork"].front_default} alt="" />
              </div>
             
            )}
           
          
          {/* {pokemonDetail.types && (
            <PokemonCard
              key={pokemonDetail.name}
              cardColor={getColors(pokemonDetail.types[0])}
              pokemon={pokemonDetail}
              id={pokemonDetail.id}
              name={pokemonDetail.name}
              image={pokemonDetail.sprites.other["official-artwork"].front_default}
              types={pokemonDetail.types}
            />
          )} */}
          {/* {pokemonDetail.sprites.other["official-artwork"].front_default} */}
          <ul>
            <li>type</li>
            <li>type</li>
          </ul>
        </TypeContainer>
        <MovesContainer>
          <h2>moves</h2>
          <ul>
            <li>move</li>
            <li>move</li>
            <li>move</li>
          </ul>
        </MovesContainer>
      </div>
    </DetailsContainer>
  </Container>
  );
};

export default DetailPage;
