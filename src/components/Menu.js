import React, { useEffect, useState } from 'react';
import './styles/Menu.css';

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

export default function Menu(props) {
  const data = useData();

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
        {data.filter(compare => (compare.type === filter)).map(item => (
          <button className="margin" type="button" onClick={() => props.addUser(item.name)}>
            {`${item.name} ${item.value}`}
          </button>
        ))}
      </div>
    </div>
  );
}
