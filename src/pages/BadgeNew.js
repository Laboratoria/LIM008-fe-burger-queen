import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Orden from '../components/Orden';
import Menu from '../components/Menu';
import firebase from '../firestore';
import './styles/BadgeNew.css';

const BadgeNew = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json');
      setState(result.data);
    }
    fetchData();
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
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
    db.collection('users').add({ name: user.customer, orden });
    setUser({ customer: '' });
    setOrden([]);
  };
  return (
    <div>
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <div className="col-md-6 background-blue">
          <Menu addOrden={addOrden} state={state} />
        </div>
        <div className="col-md-6 background-yellow margin-black">
          <Orden
            orden={orden}
            deleteOrden={deleteOrden}
            updateItem={updateItem}
            addUser={addUser}
            user={user}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
export default BadgeNew;
