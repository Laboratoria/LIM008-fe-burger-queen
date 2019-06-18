import React from 'react';
import {
  render, fireEvent, cleanup,
} from 'react-testing-library';
import Menu from '../Menu';

afterEach(cleanup);

describe('Menu', () => {
  it('addOrden', (done) => {
    const addOrden = (array) => {
      expect(array.name).toBe('Sandwich');
      done();
    };
    const { getByTestId } = render(
      <Menu
        state={[{
          id: 1, name: 'Sandwich', type: 'Desayuno', value: 0,
        }]}
        addOrden={addOrden}
      />,
    );
    const buttonAddOrden = getByTestId('addOrden-button');
    fireEvent.click(buttonAddOrden);
  });
  it('deberia cambiar el componente orden y mostrar data filtrada por desayuno', () => {
    const addOrden = (name) => {
      expect(name).toBe('Sandwich');
    };
    const { getByTestId, queryAllByTestId } = render(
      <Menu
        state={[{
          id: 1, name: 'Sandwich', type: 'Desayuno', value: 0,
        }, {
          id: 2, name: 'Hamburguesa', type: 'Resto del dia', value: 0,
        }]}
        addOrden={addOrden}
      />,
    );
    const buttonFilterDesayuno = getByTestId('filter-button-desayuno');
    fireEvent.click(buttonFilterDesayuno);
    const result = queryAllByTestId('addOrden-button');
    expect(result).toHaveLength(1);
  });
  it('deberia cambiar el componente orden y mostrar data filtrada por resto del dia', () => {
    const addOrden = (name) => {
      expect(name).toBe('Sandwich');
    };
    const { getByTestId, queryAllByTestId } = render(
      <Menu
        state={[{
          id: 1, name: 'Sandwich', type: 'Desayuno', value: 0,
        }, {
          id: 2, name: 'Hamburguesa', type: 'Resto del día', value: 0,
        }]}
        addOrden={addOrden}
      />,
    );
    const buttonFilterRest = getByTestId('filter-button-restodeldia');
    fireEvent.click(buttonFilterRest);
    const result = queryAllByTestId('addOrden-button');
    expect(result).toHaveLength(1);
  });
});
