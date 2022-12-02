import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { categoryWorker } from "../../services/data";
import logo from '../../assets/fixtep.svg'
import './contratistas.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetWorkerAsync } from "../../redux/actions/workerAction";
// https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg

const Contratistas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const details = () => {
    navigate('/details')
  }

  useEffect(() => {
    dispatch(actionGetWorkerAsync());
}, [dispatch])

  const { contratista } = useSelector(store => store.worker);
  console.log(contratista)

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
        {
          contratista && contratista.length ? (
            contratista.map((item, index) => (
              <Card style={{ width: '11rem' }} key={index}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.profession}</Card.Title>
                  <Button onClick={details} variant="primary">Detalles</Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <div>no hay contratistas</div>
          )
        }
      </div>
      <div>footer</div>
    </div>
  );
};

export default Contratistas;
