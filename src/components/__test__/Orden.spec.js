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
    //expect(handleInputChange.mock.calls[0][0].target.value).toBe('customer original');
  })
})