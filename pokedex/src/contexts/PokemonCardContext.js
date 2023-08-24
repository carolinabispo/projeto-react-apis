import React, {createContext,useEffect,useState} from "react"
import image1 from '../utils/image1.png'
export const PokemonCardContext = createContext()

const PokemonCardProvider = ({children})=>{
   
    const [pokemonCart, setPokemonCart] = useState([])
    // const [name,setName] = useState([])
    const [pokemonAmount, setPokemonAmount] = useState(0);

   useEffect(()=>{
    if(pokemonCart){
        const amount = pokemonCart.reduce((accmulator, currentItem)=>accmulator +1,0)
        setPokemonAmount(amount)
    }
   },[pokemonCart])

   const addToPokedex = (pokemon, name) =>{
    const checkPokemon = pokemonCart.find((pokemon)=>pokemon.name === name)
    if(checkPokemon){
        console.log('pokemon capturado');
        return
    }
    setPokemonCart([...pokemonCart,{pokemon,name, amount: 1}])
   }

   const removePokemon = (name) => {
    const pokemonRemove = pokemonCart.filter((pokemon) => pokemon.name !== name);
    setPokemonCart(pokemonRemove);
    
  };
return(
    <PokemonCardContext.Provider value={{pokemonCart,pokemonAmount,addToPokedex, removePokemon}}>
        {children}
    </PokemonCardContext.Provider>

)






}

export default PokemonCardProvider