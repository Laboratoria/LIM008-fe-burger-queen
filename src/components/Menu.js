import React, { useEffect, useState } from 'react';
import './styles/Menu.css';

function useData() {
  const [state, setState] = useState({
    items: [],
  });

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json')
      .then(res => res.json())
      .then((json) => {
        setState({
          items: json,
        });
      });
  });
  return state;
}

export default function Menu() {
  const data = useData();
  return (
    <div>
      {data.items.map(item => (
        <button className="margin" type="button">
          {`${item.name} ${item.value}`}
        </button>
      ))}
    </div>
  );
}
