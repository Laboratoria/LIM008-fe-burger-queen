import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Orden from '../components/Orden';
import Menu from '../components/Menu';

const BadgeNew = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json')
      .then(res => res.json())
      .then((json) => {
        setState(json);
      });
  });

  const [orden, setOrden] = useState([]);
  let total;
  const addOrden = (name) => {
    state.filter(item => (item.name === name ? setOrden([...orden, item]) : item));
    let newTotal = 0;
    total = orden.forEach(element => newTotal += element.value);
  };
  const deleteOrden = (name) => {
    setOrden(orden.filter(item => item.name !== name));
  };

  // const [total, setTotal] = useState(0);
  // const showTotal = () => setTotal(orden.forEach(element => newTotal += element.value));
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-6">
          <Menu addOrden={addOrden} />
        </div>
        <div className="col-6">
          <Orden orden={orden} deleteOrden={deleteOrden} total={total} />
        </div>
      </div>
    </div>
  );
};
export default BadgeNew;

// estaba dentro del componente orden users={users} deleteUser={deleteUser}
