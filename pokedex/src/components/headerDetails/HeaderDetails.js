import React, { useContext } from "react";
import image1 from "../../utils/image1.png";
import { useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/Coordinator";
import { Button, ButtonDetail, ContainerDetail, ImgDetail } from "./styled";
import { PokemonCardContext } from "../../contexts/PokemonCardContext";
const HeaderDetails = ({deletePokemon}) => {
  const navigate = useNavigate();
 console.log(deletePokemon);
  const {removePokemon} = useContext(PokemonCardContext)
  return (
    <>
      <ContainerDetail>
        <ImgDetail>
          <img
            onClick={() => goToHome(navigate)}
            src={image1}
            alt="logo-pokemon"
          />
        </ImgDetail>
      </ContainerDetail>
      <ButtonDetail >
        <Button
onClick={() => removePokemon(deletePokemon)}
        >
          Excluir da Pokédex
        </Button>
      </ButtonDetail>
    </>
  );
};

export default HeaderDetails;
