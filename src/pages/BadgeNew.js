import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Orden from '../components/Orden';
import Menu from '../components/Menu';
import firebase from '../firestore';

const BadgeNew = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json')
      .then(res => res.json())
      .then((json) => {
        setState(json);
      });
  }, []);

  const [orden, setOrden] = useState([]);
  const addOrden = (name) => {
    state.filter(item => (item.name === name ? setOrden([...orden, item]) : item));
  };
  const deleteOrden = (name) => {
    setOrden(orden.filter(item => item.name !== name));
  };
  const updateItem = (index, item) => {
    const newItems = [...orden];
    newItems[index] = item;
    setOrden(newItems);
  };
  const [user, setUser] = useState({ customer: '' });
  const handleInputChange = (event) => {
    setUser({ customer: event.target.value });
  };
  const addUser = (e) => { 
    e.preventDefault ();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection('users').add({
      name: this.state.name,
    });   
  this.setState ({ 
    name: '', 
    table_number: ''
  }); 
  };

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-6">
          <Menu addOrden={addOrden} />
        </div>
        <div className="col-6">
          <Orden orden={orden} deleteOrden={deleteOrden} updateItem={updateItem} addUser={addUser} user={user} handleInputChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
};
export default BadgeNew;

// estaba dentro del componente orden users={users} deleteUser={deleteUser}
