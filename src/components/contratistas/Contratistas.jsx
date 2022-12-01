import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { categoryWorker } from "../../services/data";
import logo from '../../assets/fixtep.svg'
import './contratistas.scss';
import { useNavigate } from 'react-router-dom';

const Contratistas = () => {
const navigate = useNavigate()
const details = () =>{
  navigate('/details')
}

  return (
    <div className="worker">
      <div className="worker__logo">
        <img src={logo} alt="s" />
      </div>
      <div className="worker__buttons">
        {categoryWorker.map((item) => (
          // <button key={item.value}>{item.label}</button>
          <Button variant="warning" key={item.value}>{item.label}</Button>
        ))
        }
      </div>
      <div>
        <Card style={{ width: '11rem' }}>
          <Card.Img variant="top" src="https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg" />
          <Card.Body>
            <Card.Title>Carpintero</Card.Title>
            <Button onClick={details} variant="primary">Detalles</Button>
          </Card.Body>
        </Card>
      </div>
      <div>footer</div>
    </div>
  );
};

export default Contratistas;
