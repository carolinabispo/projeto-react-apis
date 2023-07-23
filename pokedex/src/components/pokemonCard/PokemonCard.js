import React from 'react'
import "../pokemonCard/styled.css"
import { goToDetails } from '../../routes/Coordinator'
import { Navigate, useNavigate } from 'react-router-dom'


const PokemonCard = () => {
  const navigate = useNavigate()
  return (
     <div className='container'>
        <div className='div_img'>
          <img src="" alt="" />
        </div>
        <div className='details_cacth'>
          <button onClick={()=>goToDetails(navigate)} className='details'>Detalhes</button>
          <button className='add_button'>Capturar!</button>


        </div>
     </div>
  )
}

export default PokemonCard
