import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import '../pokedex/styled.css'
import { PokemonCardContext } from '../../contexts/usePokemonCardContext'
const Pokedex = () => {

 


  return (
<div>
  <div>
  <Header />
  </div>
  
  <div className='card_div'>
    
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
      
   
  )
}

export default Pokedex
