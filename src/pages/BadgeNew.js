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
  // const usersData = [
  //   { id: 1, name: 'Tania', username: 'floppydiskette' },
  //   { id: 2, name: 'Craig', username: 'siliconeidolon' },
  //   { id: 3, name: 'Ben', username: 'benisphere' },
  // ];
  const addUser = (name) => {
    state.filter(item => (item.name === name ? setOrden([...orden, item]) : item));
  };

  // const deleteUser = (id) => {
  //   setUsers(users.filter(user => user.id !== id));
  // };
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-6">
          <Menu addUser={addUser} />
        </div>
        <div className="col-6">
          <Orden orden={orden} />
        </div>
      </div>
    </div>
  );
};
export default BadgeNew;

// estaba dentro del componente orden users={users} deleteUser={deleteUser}
