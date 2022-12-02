import React from "react";
import Card from 'react-bootstrap/Card';

const DetalleContratista = () => {
  return (
    <div className="details">
       <Card className="details__card" style={{ width: '14rem' }}>
          <Card.Img  variant="top" src="https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg" />
          <Card.Body>
            <Card.Title>Pepito Perez</Card.Title>
            <Card.Text>
            Experiencias : 6 años 
        </Card.Text>
        <Card.Text>
           Contacto: 3023456789
        </Card.Text>
          </Card.Body>
        </Card>
      <div className="details__work">
      <Card style={{ width: '14rem' }}>
          <Card.Img  variant="top" src="https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg" />
        </Card>
        <Card style={{ width: '14rem' }}>
          <Card.Img  variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DXA6KwknMvikl2tIpM8kUlfPSC1P67HCtA&usqp=CAU" />
        </Card>
        <Card style={{ width: '14rem' }}>
          <Card.Img  variant="top" src="https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg" />
        </Card>
      </div>
    </div>
  );
};

export default DetalleContratista;
