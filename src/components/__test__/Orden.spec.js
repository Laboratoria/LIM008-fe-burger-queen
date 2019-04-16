import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Orden from '../Orden';

afterEach(cleanup);

const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
});

describe('Orden', () => {
  it('handleInputChange', (done) => {
    const addUser = () => {};
    const updateItem = () => {};
    const deleteOrden = () => {};
    const handleInputChange = (evt) => {
      expect(evt.target.value).toBe('customer nuevo');
      done();
    };
    const { getByTestId } = render(
      <Orden orden={[]} user={{ customer: 'customer original' }} handleInputChange={handleInputChange} addUser={addUser} updateItem={updateItem} deleteOrden={deleteOrden} />,
    );
    const input = getByTestId('cliente-input');
    fireEvent.change(input, { target: { value: 'customer nuevo' } });
  });
  it('deleteOrden', (done) => {
    const addUser = () => {};
    const updateItem = () => {};
    const handleInputChange = () => {};
    const deleteOrden = (name) => {
      expect(name).toBe('Sandwich');
      done();
    };
    const { getByTestId } = render(
      <Orden
        orden={[
          {
            id: 1, name: 'Sandwich', type: 'Desayuno', value: 0, count: 0, img: '',
          }]}
        deleteOrden={deleteOrden}
        user={{ customer: 'customer nuevo' }}
        handleInputChange={handleInputChange}
        addUser={addUser}
        updateItem={updateItem}
      />,
    );
    const buttonDeleteOrden = getByTestId('0-deleteOrden-button');
    fireEvent.click(buttonDeleteOrden);
  });
  it('updateItem suma', (done) => {
    const addUser = () => {};
    const handleInputChange = () => {};
    const deleteOrden = () => {};
    const updateItem = (index) => {
      expect(index).toBe(0);
      done();
    };
    const { getByTestId } = render(
      <Orden
        orden={[
          {
            id: 1, name: 'Sandwich', type: 'Desayuno', value: 0, count: 0, img: '',
          }]}
        updateItem={updateItem}
        user={{ customer: 'customer nuevo' }}
        deleteOrden={deleteOrden}
        handleInputChange={handleInputChange}
        addUser={addUser}
      />,
    );
    const buttonUpdateItemSum = getByTestId('0-update-button-sum');
    fireEvent.click(buttonUpdateItemSum);
  });
  it('updateItem resta', (done) => {
    const addUser = () => {};
    const handleInputChange = () => {};
    const deleteOrden = () => {};
    const updateItem = (index) => {
      expect(index).toBe(0);
      done();
    };
    const { getByTestId } = render(
      <Orden
        orden={[
          {
            id: 1, name: 'Sandwich', type: 'Desayuno', value: 0, count: 0, img: '',
          }]}
        updateItem={updateItem}
        user={{ customer: 'customer nuevo' }}
        deleteOrden={deleteOrden}
        handleInputChange={handleInputChange}
        addUser={addUser}
      />,
    );
    const buttonUpdateItemSubs = getByTestId('0-update-button-subs');
    fireEvent.click(buttonUpdateItemSubs);
  });
});
