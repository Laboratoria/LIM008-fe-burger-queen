import React from 'react';
import './styles/Navbar.css';

export default function Orden(props) {
  return (
    <div>
      <div>
        <h1>ORDEN</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>CANTIDAD</th>
            <th>P/UNITARIO</th>
            <th>P/TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {props.orden.length > 0 ? (
            props.orden.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.value}</td>
                <td>0</td>
                <td>
                  <button type="button" className="button muted-button">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay pedidos</td>
            </tr>
          )}  
        </tbody>
      </table>
    </div>
  );
}
// Iba dentro del boton delete onClick={() => props.deleteUser(user.id)}
