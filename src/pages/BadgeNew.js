import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Orden from '../components/Orden';
import Menu from '../components/Menu';

const BadgeNew = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ];
  const [users, setUsers] = useState(usersData);
  // const addUser = (user) => {
  //   user.id = users.length + 1;
  //   setUsers([...users, user]);
  // };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-6">
          <Menu />
        </div>
        <div className="col-6">
          <Orden users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};
export default BadgeNew;
