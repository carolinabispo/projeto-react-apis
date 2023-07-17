import React from 'react'
import "../pokemonCard/styled.css"


const PokemonCard = () => {
  return (
     <div className='container'>
        <div className='div_img'>
          <img src="" alt="" />
        </div>
        <div className='details_cacth'>
          <button className='details'>Detalhes</button>
          <button className='add_button'>Capturar!</button>


        </div>
     </div>
  )
}

export default PokemonCard
