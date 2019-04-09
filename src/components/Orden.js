import React from 'react';
import './styles/Navbar.css';

export default function Orden(props) {
  return (
    <form>
      <div>
        <h1>ORDEN</h1>
      </div>
      <div>
        <p>NOMBRE DE CLIENTE:</p>
        <input type ="text"></input>
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
                <td>
                  <button type="button" onClick={() => item.count += 1}>+</button>
                  {item.count}
                  <button type="button" onClick={() => item.count -= 1}>-</button>
                </td>
                <td>{item.value}</td>
                <td>{item.count*item.value}</td>
                <td>
                  <button type="button" className="button muted-button" onClick={() => props.deleteOrden(item.name)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay pedidos</td>
            </tr>
          )}  
        </tbody>
        <tfooter>
          <tr>
            <th>TOTAL</th>
            <th>{props.orden.reduce((preciototal, elemento) => preciototal + (elemento.count*elemento.value), 0)}</th>
          </tr>
        </tfooter>
      </table>
    </form>
  );
}
// Iba dentro del boton delete onClick={() => props.deleteUser(user.id)}
