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
          <button key={item.id} className="margin align-right" type="button" onClick={() => addOrden(item.name)} data-testid="addOrden-button">
            <span className="button-center">
              {item.name}
            </span>
            <span className="margin-value">
              `$/
              {item.value}
              .00`
            </span>
            {/* {`${item.name} ${item.value}`} */}
          </button>
        ))}
      </div>
    </div>
  );
}
Menu.propTypes = {
  addOrden: PropTypes.func.isRequired,
  state: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
