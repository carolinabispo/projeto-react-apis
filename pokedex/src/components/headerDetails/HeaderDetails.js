import React from "react";
import image1 from "../../utils/image1.png";
import { useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/Coordinator";
import { Button, ButtonDetail, ContainerDetail, ImgDetail } from "./styled";
const HeaderDetails = () => {
  const navigate = useNavigate();
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
          onClick={() => goToPokedex(navigate)}
        >
          Excluir da Pokédex
        </Button>
      </ButtonDetail>
    </>
  );
};

export default HeaderDetails;
