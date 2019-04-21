/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import './styles/Menu.css';
import PropTypes from 'prop-types';

export default function Menu({ addOrden, state }) {
  const [filter, setFilter] = useState('Desayuno');


  return (
    <div className="background-blue">
      <div className="row button-center margintop margin-filter-bottom">
        <div className="col-6">
          <button className="button-filter weigth marginsup list-group-item list-group-item-action tabs" type="button" onClick={() => setFilter('Desayuno')} data-testid="filter-button-desayuno">DESAYUNO</button>
        </div>
        <div className="col-6">
          <button className="button-filter weigth marginsup list-group-item list-group-item-action tabs" type="button" onClick={() => setFilter('Resto del día')} data-testid="filter-button-restodeldia">MENÚ</button>
        </div>
      </div>
      <div className="background-blue div-center">
        {state.filter(compare => (compare.type === filter)).map(item => (
          <div key={item.id} className="row button-center background-white margin-div margin-top div-centerhijo">
            <div className="col-3">
              <img src={item.img} alt="imagen de opciones"></img>
            </div>
            <div className="col-3 width section centrar1">
              <p>{item.name}</p>
            </div>
            <div className="col-3 width section centrar1">
              <p>
                $/
                {item.value}
                .00
              </p>
            </div>
            <div className="col-3 width section centrar1">
              <span key={item.id} className="addOrden" role="presentation" onClick={() => addOrden(item.name)} data-testid="addOrden-button"><i className="fas fa-shopping-cart"></i></span>
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
