/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import './styles/Orden.css';

function Orden({
  addUser, orden, user, handleInputChange, updateItem, deleteOrden,
}) {
  return (
    <div>
      <form onSubmit={addUser} className="margintop">
        <div className="center weigth row margin-orden">
          ORDEN
        </div>
        <div className="container center margin-option">
          <div className="row weigth font-mayor">
            <div className="col-3">DESCRIPCIÓN</div>
            <div className="col-3">CANTIDAD</div>
            <div className="col-3">P/UNITARIO</div>
            <div className="col-3">P/TOTAL</div>
          </div>
          {orden.length > 0 ? (
            orden.map((item, index) => (
              <div className="row margin-option font-menor section" data-testid="item" key={item.id}>
                <div className="col-3">{item.name}</div>
                <div className="col-3 center">
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
                  <span data-testid={`${index}-amount`}>{item.count}</span>
                  <button
                    type="button"
                    className="button-count margin-button-count-substr"
                    onClick={() => {
                      const newItem = { ...item };
                      newItem.count -= 1;
                      if (newItem.count < 1) {
                        newItem.count = 1;
                      }
                      updateItem(index, newItem);
                    }}
                    data-testid={`${index}-update-button-subs`}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
                <div className="col-3 center">
                  $/
                  {item.value}
                  .00
                </div>
                <div className="col-3 center">
                  $/
                  {item.count * item.value}
                  .00
                  <button type="button" className="button muted-button button-delete margin-button-count-substr" onClick={() => deleteOrden(item.name)} data-testid={`${index}-deleteOrden-button`}><i className="fas fa-trash-alt" /></button>
                </div>
              </div>
            ))
          ) : (
            <div className="row center margin-option section">
              <div className="col-12 center">
                No hay pedidos
              </div>
            </div>
          )}
          <div className="row weigth margin-total font-mayor margin-option">
            <div className="col-3 center">
              TOTAL:
            </div>
            <div className="col-9 center">
              $/
              {orden.reduce((preciototal, elemento) => preciototal
                + (elemento.count * elemento.value),
              0)}
              .00
            </div>
          </div>
          <div className="section form-inline margin-cliente">
            <div className="row">
              <label htmlFor="name">
                Cliente:
                <input type="text" id="name" name="name" value={user.customer} onChange={handleInputChange} data-testid="cliente-input" />
              </label>
            </div>
            <button type="submit" data-testid="ordenToFirebase-button" className="button-send margin-send">ENVIAR A COCINAR</button>
          </div>
        </div>
      </form>
    </div>
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
