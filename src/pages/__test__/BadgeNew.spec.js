import React from 'react';
import { render, fireEvent, cleanup, getNodeText } from 'react-testing-library';
import BadgeNew from '../BadgeNew';
afterEach(cleanup);

describe('BadgeNew', () => {
  it('deberia agregar un item en el componente orden', () => {

    const { getByTestId, queryAllByTestId } = render(
      <BadgeNew orden={[{ id: 1, name: 'Sandwich', type: 'Desayuno', value: 0 }, { id: 2, name: 'Hamburguesa', type: 'Resto del día', value: 0 }]} />,
    );
    const buttonAddOrden = getByTestId('addOrden-button');
    fireEvent.click(buttonAddOrden);
    const result = queryAllByTestId("item");
    expect(result.length).toBe(2);
    expect(getNodeText(result[0])).toBe('Sandwich 0');
  });
}); 