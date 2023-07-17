import React from "react";
import Header from "../../components/header/Header";
import "../details/styled.css";
const DetailPage = () => {
  return (
    <div className="div_container">
      <Header />
      <div className="title">Detalhes</div>
      <div className="div_details">
        <div className="front_back_img">
          <img className="img_details" src="" alt="front" />
          <img className="img_details" src="" alt="back" />
        </div>
        <div className="status">
          <h2>stats</h2>
          <ul>
            <li>attributes:</li>
            <li>atributtes:</li>
            <li>atributtes:</li>
            <li>atributtes:</li>
            <li>atributtes:</li>
            <li>atributtes:</li>
          </ul>
        </div>
        <div className="teste">
        <div className="type">
          <ul>
            <li>type</li>
            <li>type</li>
          </ul>
        </div>
        <div className="moves">
          <h2>moves</h2>
          <ul>
            <li>move</li>
            <li>move</li>
            <li>move</li>
          </ul>
        </div>
        </div>
  
      </div>
    </div>
  );
};

export default DetailPage;
