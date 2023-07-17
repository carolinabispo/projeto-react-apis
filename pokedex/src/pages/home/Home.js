import React from 'react'
import Header from '../../components/header/Header'
import '../home/style.css'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
const Home = () => {
  return (
    <div className='div_home'>
      <div>
        <Header/>
      </div>
     <div className='card'>
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

export default Home
