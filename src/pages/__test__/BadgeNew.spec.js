import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from 'react-testing-library';
// import MockFirebase from 'mock-cloud-firestore';
import BadgeNew from '../BadgeNew';

afterEach(cleanup);

// const fixtureData = {
//   __collection__: {
//     users: {
//       __doc__: {
//         abc123: {
//           name: 'mahali',
//           orden: [
//             {
//               id: 1,
//               name: 'Café americano',
//               value: 10.00,
//               option: 'Bebidas',
//               type: 'Desayuno',
//               count: 1,
//             },
//           ],
//         },
//       },
//     },
//   },
// };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BadgeNew />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('BadgeNew', () => {
//   it('deberia agregar un item en el componente orden', () => {
//     const { getByTestId, queryAllByTestId } = render(
//       <BadgeNew orden={[{
//         id: 1, name: 'Sandwich', type: 'Desayuno', value: 0,
//       }, {
//         id: 2, name: 'Hamburguesa', type: 'Resto del día', value: 0,
//       }]}
//       />,
//     );
//     const buttonAddOrden = getByTestId('addOrden-button');
//     fireEvent.click(buttonAddOrden);
//     const result = queryAllByTestId('item');
//     expect(result.length).toBe(2);
//     expect(getNodeText(result[0])).toBe('Sandwich 0');
//   });
// });

// describe('addOrderToFirebase', () => {
//   it('deberia poder agregar una orden a firebase', (done) => {
//     addUser = () => {
//       expect(users.name).toBe('cinthya');
//       done();
//     }
//     const buttonOrdenToFirebase = getByTestId('ordenToFirebase-button');
//     fireEvent.click(buttonOrdenToFirebase);
//   });
// });
