import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Contratistas = () => {
  return (
    <div>
      <div>
        Nav
        <img src="./assets/fixtep.svg" alt="s" />
      </div>
      <div>Filtro</div>
      <Card style={{ width: '11rem' }}>
      <Card.Img variant="top" src="https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg" />
      <Card.Body>
        <Card.Title>Carpintero</Card.Title>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
      <div>footer</div>
    </div>
  );
};

export default Contratistas;
