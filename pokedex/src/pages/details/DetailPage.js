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
  StatBar,
  ButtonMoves,
  MovesFont,
  PokemonNumberDetail,
  PokemonNameDetail,
  ImageDetail,
  Moves,
  TitleDetails,
  BaseTitle,
  Amount,
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

  const { name, sprites, stats, types, moves } = pokemonDetail;
  const frontDefault = sprites?.front_default;
  const backDefault = sprites?.back_default;
  const total = stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  const color = getColors(types[0]);

  for (let i = 1; i <= 4; )
    return (
      <>
      <div>
        <HeaderDetails deletePokemon={name}/>
      </div>
      
      <TitleDetails>Detalhes</TitleDetails>

      <Container>
        <DetailsContainer style={{ backgroundColor: color }}>
          <FrontBackImageContainer>
            <Image src={frontDefault} alt="front" />
            <Image src={backDefault} alt="back" />
          </FrontBackImageContainer>

          <StatusContainer>
              <BaseTitle>Base Stats</BaseTitle>
              {stats.map((stat) => (
                <StatBar key={stat.stat.name}>
                  <div className="label">{stat.stat.name} <span className="number">{stat.base_stat}</span></div>
                  <div className="bar">
                    <div
                      className="progress"
                      style={{ width: `${stat.base_stat}%` }}
                    />
                  </div>
                </StatBar>

              ))}
              <Amount> <span className="total">Total:</span> <span className="soma">{total}</span></Amount>
            </StatusContainer>
          <div className="teste">
            <TypeContainer>
              <>
                <PokemonNumberDetail>{`# ${id}`}</PokemonNumberDetail>
                <PokemonNameDetail>{name}</PokemonNameDetail>
                <ImageDetail
                  src={sprites.other["official-artwork"].front_default}
                  alt=""
                />
                <br />
                {types.map((type) => (
                  <img key={type} src={getTypes(type)} alt="" />
                ))}
              </>
            </TypeContainer>
            <MovesContainer>
              <MovesFont>Moves:
              <Moves>
                {moves
                  .filter((move, id) => id < 4)
                  .map((item, id) => (
                    <ul>
                    <ButtonMoves key={id}>{item.move.name}</ButtonMoves>
                    {/* mudar o button para uma div para estilizar a borda */}
                    </ul>
                  ))}
              </Moves>
              </MovesFont>
            </MovesContainer>
          </div>
        </DetailsContainer>
      </Container>
    </>
    );
};

export default DetailPage;
