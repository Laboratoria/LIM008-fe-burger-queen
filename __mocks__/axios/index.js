// import menu from '../../src/data/menu.json';
import { act } from 'react-testing-library';

export default () => ({
  then: jest.fn(callback => act(() => {
    callback({
      data: [
        {
          id: 1,
          name: 'Sandwich de jamon y queso',
          value: 10.00,
          option: 'Sandwich',
          type: 'Desayuno',
          count: 1,
          img: 'https://d701vexhkz032.cloudfront.net/media/images/menu-content/PE/desayunos/tostado-jamon-queso_new_pe.png',
        },
        {
          id: 2,
          name: 'Jugo Natural',
          value: 7.00,
          option: 'Bebidas',
          type: 'Desayuno',
          count: 1,
          img: 'https://www.pollosmario83.com/288-tm_large_default/jugo-de-naranja-natural.jpg',
        },
      ],
    });
  })),
});
