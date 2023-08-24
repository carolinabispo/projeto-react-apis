import React, { useContext } from 'react'
import { ContainerPokedex, DetailsButtonPokedex, ExcluirButton, PokeballPokedex, PokemonNamePokedex, PokemonNumberPokedex, PokemonPokedex, PokemonTypePokedex, TypesContainerPokedex, TypesPokedex } from './styled';
import { PokemonCardContext } from '../../../contexts/PokemonCardContext';
import pokeball from '../../../utils/pokebola.png'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { goToDetails } from '../../../routes/Coordinator';
import { getTypes } from '../../../functions/ReturnPokemonsTypes';

const PokemonCardDelete = ({ pokemon, name, image, id, types, cardColor }) => {
    const navigate = useNavigate()
   
   
    const {removePokemon} = useContext(PokemonCardContext)
  return (
    <ContainerPokedex color={cardColor}>
    <div>
      <PokemonNumberPokedex>{`# ${id}`}</PokemonNumberPokedex>
      <PokemonNamePokedex>{name}</PokemonNamePokedex>
      <TypesContainerPokedex>
        <TypesPokedex>
          {types.map((type) => {
            return (
              <PokemonTypePokedex key={type} src={getTypes(type)} alt="" />
            );
          })}
        </TypesPokedex>
      </TypesContainerPokedex>
    <Link to={`/details/${id}`}>
    <DetailsButtonPokedex >
        Detalhes
      </DetailsButtonPokedex>
    </Link>
   
    </div>
    <div>
      <PokemonPokedex src={image} alt="" />
      <ExcluirButton onClick={() => removePokemon(name)}>
        Excluir
      </ExcluirButton>
    </div>
    <PokeballPokedex src={pokeball} alt="" />
  </ContainerPokedex>
  )
}

export default PokemonCardDelete
