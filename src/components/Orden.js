import React from 'react';
import PropTypes from 'prop-types';
import './styles/Navbar.css';

function Orden({
  addUser, orden, user, handleInputChange, updateItem, deleteOrden,
}) {
  return (
    <form onSubmit={addUser}>
      <div>
        <h1>ORDEN</h1>
      </div>
      <div>
        <p>NOMBRE DE CLIENTE:</p>
        <input type="text" name="name" value={user.customer} onChange={handleInputChange} data-testid='cliente-input' />
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
          {orden.length > 0 ? (
            orden.map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      const newItem = { ...item };
                      newItem.count += 1;
                      updateItem(index, newItem);
                    }}
                    data-testid={`${item-id}-update-button`}
                  >
                    +
                  </button>
                  {item.count}
                  <button
                    type="button"
                    onClick={() => {
                      const newItem = { ...item };
                      newItem.count -= 1;
                      updateItem(index, newItem);
                    }}
                  >
                      -
                  </button>
                </td>
                <td>{item.value}</td>
                <td>{item.count * item.value}</td>
                <td>
                  <button type="button" className="button muted-button" onClick={() => deleteOrden(item.name)}>Delete</button>
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
            <th>
              {orden.reduce((preciototal, elemento) => preciototal
              + (elemento.count * elemento.value),
              0)}
            </th>
          </tr>
        </tfooter>
      </table>
      <div>
        <button type="submit">Enviar a cocina</button>
      </div>
    </form>
  );
}

Orden.propTypes = {
  addUser: PropTypes.func.isRequired,
  orden: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  deleteOrden: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Orden;
