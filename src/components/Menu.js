import React, { useState } from 'react';
import './styles/Menu.css';
import PropTypes from 'prop-types';

export default function Menu({ addOrden, state }) {
  const [filter, setFilter] = useState('Desayuno');


  return (
    <div>
      <div className="row">
        <div className="col-6">
          <button type="button" onClick={() => setFilter('Desayuno')}>DESAYUNO</button>
        </div>
        <div className="col-6">
          <button type="button" onClick={() => setFilter('Resto del día')}>MENÚ</button>
        </div>
      </div>
      <div>
        {state.filter(compare => (compare.type === filter)).map((item, index) => (
          <button className="margin" type="button" onClick={() => addOrden(item.name)} data-testid={`${index}-addOrden-button`}>
            {`${item.name} ${item.value}`}
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
