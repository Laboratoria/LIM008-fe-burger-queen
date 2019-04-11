import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Menu from '../Menu';

describe('Menu', () => {
  it('addOrden', (done) => {
    const addOrden = (name) => {
      expect(name).toBe('Sandwich');
      done();
    };
    const { getByTestId } = render(
      <Menu state={[{ name: 'Sandwich', type: 'Desayuno', value: 0 }]} addOrden={addOrden} />,
    );
    const buttonAddOrden = getByTestId('0-addOrden-button');
    fireEvent.click(buttonAddOrden);
  });
});
