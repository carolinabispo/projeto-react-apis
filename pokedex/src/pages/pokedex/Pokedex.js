import React from 'react'
import Header from '../../components/header/Header'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import '../pokedex/styled.css'
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
