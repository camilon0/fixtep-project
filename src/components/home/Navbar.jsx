import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <div>
      <div className="Nav">
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contratistas">Contratistas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contratistas">Contratistas</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default Navbar;
