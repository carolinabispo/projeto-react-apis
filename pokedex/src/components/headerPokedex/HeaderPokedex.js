import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../utils/image1.png";
import { goToHome } from "../../routes/Coordinator";
import { IoChevronBackSharp } from "react-icons/io5";
import { Button, ContainerHeader, DivButton, DivImg } from "./styled";
const HeaderPokedex = () => {
  const navigate = useNavigate();
  return (
    <ContainerHeader>
      <DivImg>
        <img
          onClick={() => goToHome(navigate)}
          src={image1}
          alt="logo-pokemon"
        />
      </DivImg>

      <DivButton>
        <Button onClick={() => goToHome(navigate)}>
          <IoChevronBackSharp /> Todos Pokemons
        </Button>
      </DivButton>
    </ContainerHeader>
  );
};

export default HeaderPokedex;
