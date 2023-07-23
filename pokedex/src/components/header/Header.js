import React from "react";
import "../header/styled.css";
import image1 from "../../utils/image1.png";
import { useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/Coordinator";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="div1">
      <div className="div2">
        <div className="div_img">
          <img onClick={()=>goToHome(navigate)} src={image1} alt="logo-pokemon" />
        </div>

        
      </div>
      <div className="div_button">
          <button onClick={()=>goToPokedex(navigate)} className="button_header">Pokédex</button>
        </div>
    </div>
  );
};

export default Header;
