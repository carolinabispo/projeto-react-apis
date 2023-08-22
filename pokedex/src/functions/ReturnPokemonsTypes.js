import bug from "../assets/pokemons_types/bug.png"
import dark from "../assets/pokemons_types/dark.png"
import dragon from "../assets/pokemons_types/dragon.png"
import electric from "../assets/pokemons_types/electric.png"
import fairy from "../assets/pokemons_types/fairy.png"
import fighting from "../assets/pokemons_types/fighting.png"
import fire from "../assets/pokemons_types/fire.png"
import flying from "../assets/pokemons_types/flying.png"
import ghost from "../assets/pokemons_types/ghost.png"
import grass from "../assets/pokemons_types/grass.png"
import ground from "../assets/pokemons_types/ground.png"
import ice from "../assets/pokemons_types/ice.png"
import normal from "../assets/pokemons_types/normal.png"
import poison from "../assets/pokemons_types/poison.png"
import psychic from "../assets/pokemons_types/psychic.png"
import rock from "../assets/pokemons_types/rock.png"
import steel from "../assets/pokemons_types/steel.png"
import water from "../assets/pokemons_types/water.png"


export const getTypes = (types) => {
    switch (types.type.name) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }
  };
  