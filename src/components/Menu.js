import React, { useEffect, useState } from 'react';
import './styles/Menu.css';
import PropTypes from 'prop-types';

function useData() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json')
      .then(res => res.json())
      .then((json) => {
        setState(json);
      });
  });
  return state;
}

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
};
