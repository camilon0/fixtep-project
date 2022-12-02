import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from "./assets/logoConLetrasGrande.svg";
import "./style.scss";

const Home = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="s" />
      </div>
      <div>frase de la compania</div>
      <div>imagen backgraund</div>
      <div>dos botones: uno que redireccione a los contratistas </div>
    </div>
  );
};

export default Home;
