import React from "react";
import Nav from "react-bootstrap/Nav";
import "./style.scss";

const Home = () => {
  return (
    <div>
      <div className="Nav">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>logo con letra</div>
      <div>frase de la compania</div>
      <div>imagen backgraund</div>
      <div>dos botones: uno que redireccione a los contratistas </div>
    </div>
  );
};

export default Home;
