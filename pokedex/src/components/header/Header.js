import React from "react";
import "../header/styled.css";
import image1 from "../../utils/image1.png";
const Header = () => {
  return (
    <div className="div1">
      <div className="div2">
        <div className="div_img">
          <img src={image1} alt="logo-pokemon" />
        </div>

        
      </div>
      <div className="div_button">
          <button className="button_header">Pokédex</button>
        </div>
    </div>
  );
};

export default Header;
