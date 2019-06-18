/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import './styles/Menu.css';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function Menu({ addOrden, state }) {
  const [filter, setFilter] = useState('Desayuno');
  return (
    <div className="width">
      <div className="d-flex flex-column border-black">
        <ButtonGroup size="mt-3">
          <Button className="button-filter weigth marginsup btn marginrigth" variant="outline-dark" type="button" onClick={() => setFilter('Desayuno')} data-testid="filter-button-desayuno">DESAYUNO</Button>
          <Button className="button-filter weigth marginsup btn" variant="outline-dark" type="button" onClick={() => setFilter('Resto del día')} data-testid="filter-button-restodeldia">MENÚ</Button>
        </ButtonGroup>
      </div>
      <div className="div-center">
        {state.filter(compare => (compare.type === filter)).map(item => (
          <div key={item.id} className="row button-center border-black margin-div div-centerhijo padding-option">
            <div className="col-3">
              <img src={item.img} alt="imagen de opciones"></img>
            </div>
            <div className="col-3 width section centrar font-menor">
              <p>{item.name}</p>
            </div>
            <div className="col-3 width section centrar font-menor">
              <p>
                $/
                {item.value}
                .00
              </p>
            </div>
            <div className="col-3 width section centrar margin-addOrden">
              <span key={item.id} className="addOrden" role="presentation" onClick={() => addOrden(item)} data-testid="addOrden-button"><i className="fas fa-shopping-cart"></i></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Menu.propTypes = {
  addOrden: PropTypes.func.isRequired,
  state: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
