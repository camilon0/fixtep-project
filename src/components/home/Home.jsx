import React from "react";
import { Carousel } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
//import { images } from "../../services/data";

import logo from "./assets/logoConLetrasGrande.svg";
import "./style.scss";

const images = require.context("./assets/img", true);

const Home = () => {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-100"
              src={images(`./img1.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-100"
              src={images(`./img2.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-100"
              src={images(`./img3.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-100"
              src={images(`./img4.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-100"
              src={images(`./img5.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-100"
              src={images(`./img6.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-100"
              src={images(`./img7.jpg`)}
              alt="s"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <img src={logo} alt="s" />
      </div>
      <div>frase de la compania</div>
      <div>imagen backgraund</div>
      <div>dos botones: uno que redireccione a los contratistas </div>
    </>
  );
};

export default Home;
