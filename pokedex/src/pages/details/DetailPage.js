import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../contexts/useApiContext";
import {
  Container,
  Title,
  MovesContainer,
  TypeContainer,
  DetailsContainer,
  FrontBackImageContainer,
  Image,
  StatusContainer,
  StatBar
} from "../details/styled";
import { getTypes } from "../../functions/ReturnPokemonsTypes";
import HeaderDetails from "../../components/headerDetails/HeaderDetails";
import { getColors } from "../../functions/ReturnCardColors";

const DetailPage = () => {



  const { id } = useParams();
  const { pokemons } = useContext(ApiContext);
  const pokemonDetail = pokemons.find((item) => item.id === parseInt(id));

  if (!pokemonDetail) {
    return null; // Return null or an error message if the Pokemon is not found
  }

  const { name, sprites, stats, types,moves } = pokemonDetail;
  const frontDefault = sprites?.front_default;
  const backDefault = sprites?.back_default;
  const total = stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  const color = getColors(types[0])

  for(let i =1;i <=4; )
  
  return (
    <>
      <HeaderDetails />
      <Container>
        <Title>Detalhes</Title>
        <DetailsContainer style={{ backgroundColor: color}}>
          <FrontBackImageContainer>
            <Image src={frontDefault} alt="front" />
            <Image src={backDefault} alt="back" />
          </FrontBackImageContainer>
          <StatusContainer>
            <h2>stats</h2>
            <ul>
              {/* {stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))} */}
                 {stats.map((stat) => (
                <StatBar key={stat.stat.name}>
                  <div className="label">{stat.stat.name}</div>
                  <div className="bar">
                    <div
                      className="progress"
                      style={{ width: `${(stat.base_stat)}%` }}
                    />
                  </div>
                </StatBar>
              ))}
              <li>Total: {total}</li>
            </ul>
          </StatusContainer>
          <div className="teste">
            <TypeContainer>
              {types && (
                <>
                  <div>
                    <img
                      src={sprites.other["official-artwork"].front_default}
                      alt=""
                    />
                  </div>
                  {types.map((type) => (
                    <img key={type} src={getTypes(type)} alt="" />
                  ))}
                </>
              )}
              {name}
            </TypeContainer>
            <MovesContainer>
              <h2>moves</h2>
              <ul>
                {moves.filter((move,id)=>id < 4).map((item,id)=>(
                  
                    <li key={id}>{item.move.name}</li>
                  
                ))}
                
              </ul>
            </MovesContainer>
          </div>
        </DetailsContainer>
      </Container>
    </>
  );
};

export default DetailPage;
