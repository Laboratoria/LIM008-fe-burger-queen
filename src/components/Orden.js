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
          {props.users.length > 0 ? (
            props.users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>user</td>
                <td>User</td>
                <td>
                  <button type="button" className="button muted-button">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}  
        </tbody>
      </table>
    </div>
  );
};
