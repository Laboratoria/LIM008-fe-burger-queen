/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import './styles/Orden.css';

function Orden({
  addUser, orden, user, handleInputChange, updateItem, deleteOrden,
}) {
  return (
    <form onSubmit={addUser} className="margintop">
      <div className="center orden">
        <p>ORDEN</p>
      </div>
      <div className="row">
        <div className="col-4">
          <p>Nombre de cliente:</p>
        </div>
        <div className="col-8">
          <input type="text" name="name" value={user.customer} onChange={handleInputChange} data-testid="cliente-input" />
        </div>
      </div>
      <div className="row">
        <table className="table">
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
                <tr data-testid="item" key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <button
                      type="button"
                      className="button-count margin-button-count-sum"
                      onClick={() => {
                        const newItem = { ...item };
                        newItem.count += 1;
                        updateItem(index, newItem);
                      }}
                      data-testid={`${index}-update-button-sum`}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                    {item.count}
                    <button
                      type="button"
                      className="button-count margin-button-count-substr"
                      onClick={() => {
                        const newItem = { ...item };
                        newItem.count -= 1;
                        updateItem(index, newItem);
                      }}
                      data-testid={`${index}-update-button-subs`}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                  </td>
                  <td>{item.value}</td>
                  <td>{item.count * item.value}</td>
                  <td>
                    <button type="button" className="button muted-button button-delete" onClick={() => deleteOrden(item.name)} data-testid={`${index}-deleteOrden-button`}><i className="fas fa-trash-alt" /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No hay pedidos</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th>TOTAL</th>
              <th>
                {orden.reduce((preciototal, elemento) => preciototal
                + (elemento.count * elemento.value),
                0)}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="margin-button-send">
        <button type="submit" data-testid="ordenToFirebase-button" className="button-send">ENVIAR A COCINAR</button>
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
