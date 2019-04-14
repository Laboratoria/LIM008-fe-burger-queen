/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import './styles/Menu.css';
import PropTypes from 'prop-types';

export default function Menu({ addOrden, state }) {
  const [filter, setFilter] = useState('Desayuno');


  return (
    <div className="margin-blue">
      <div className="row marginsup button-center">
        <div className="col-6">
          <button className="button-filter" type="button" onClick={() => setFilter('Desayuno')} data-testid="filter-button-desayuno">DESAYUNO</button>
        </div>
        <div className="col-6">
          <button className="button-filter" type="button" onClick={() => setFilter('Resto del día')} data-testid="filter-button-restodeldia">MENÚ</button>
        </div>
      </div>
      <div>
        {state.filter(compare => (compare.type === filter)).map(item => (
          <div className="row">
            <div className="col-3">
              {item.img}
            </div>
            <div className="col-3">
              <p>{item.name}</p>
            </div>
            <div className="col-3">
              <p>{item.value}</p>
            </div>
            <div className="col-3">
              <button key={item.id} type="button" onClick={() => addOrden(item.name)} data-testid="addOrden-button"><i className="fas fa-shopping-cart"></i></button>
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
