import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Orden from '../Orden';

describe('Orden', () => {
  it('handleInputChange', (done) => {
    const handleInputChange = (evt) => {
      expect(evt.target.value).toBe('customer nuevo');
      done();
    };
    const { getByTestId } = render(
      <Orden orden={[]} user={{ customer: 'customer original' }} handleInputChange={handleInputChange} />,
    );
    const input = getByTestId('cliente-input');
    fireEvent.change(input, { target: { value: 'customer nuevo' } });
  });
  it('deleteOrden', (done) => {
    const deleteOrden = (name) => {
      expect(name).not.toBe('Sandwich');
      done();
    };
    const { getByTestId } = render(
      <Orden orden={[{ name: 'Sandwich', type: 'Desayuno', value: 0 }]} deleteOrden={deleteOrden} user={{ customer: 'customer nuevo' }} />,
    );
    const buttonDeleteOrden = getByTestId('0-deleteOrden-button');
    fireEvent.click(buttonDeleteOrden);
  });
  it('updateItem', (done) => {
    const updateItem = (count) => {
      expect(count).toBe(1);
      done();
    };
    const { getByTestId } = render(
      <Orden orden={[{ name: 'Sandwich', type: 'Desayuno', value: 0, count: 0 }]} updateItem={updateItem} user={{ customer: 'customer nuevo' }} />,
    );
    const buttonUpdateItemSum = getByTestId('0-update-button-sum');
    fireEvent.click(buttonUpdateItemSum);
  });
});
