import React from 'react';
import {
  cleanup, render, fireEvent, waitForElement, act,
} from 'react-testing-library';
import ReactDOM from 'react-dom';
import MockFirebase from 'mock-cloud-firestore';
import BadgeNew from '../BadgeNew';

afterEach(cleanup);

const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        abc123: {
          name: 'mahali',
          orden: [
            {
              id: 1,
              name: 'Café americano',
              value: 10.00,
              option: 'Bebidas',
              type: 'Desayuno',
              count: 1,
            },
          ],
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BadgeNew />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('addUser', () => {
//   it('deberia poder agregar una orden a firebase', (done) => {
//     const addUser = (callback) => {
//       const db = firebase.firestore();
//       db.collection('users').onSnapshot((querySnapshot) => {
//         const userData = [];
//         querySnapshot.forEach((doc) => {
//           userData.push({
//             id: doc.id,
//             ...doc.data(),
//           });
//         });
//         callback(userData);
//       });
//     };
//     addUser((data) => {
//       expect(data).toHaveLength(1);
//       done();
//     });
//   });
// });

describe('BadgeNew', () => {
  it('deberia aumentar la cantidad de productos en el array de ordenes', async (done) => {
    const { getByTestId, queryAllByTestId } = render(<BadgeNew />);

    let productTableItems = queryAllByTestId('item');
    expect(productTableItems).toHaveLength(0);

    const addOrdenBtn = await waitForElement(() => getByTestId('addOrden-button'));
    await act(async () => {
      fireEvent.click(addOrdenBtn);
      done();
    });
    productTableItems = queryAllByTestId('item');
    expect(productTableItems).toHaveLength(1);
  });

  it('deberia eliminar productos del array de ordenes', async (done) => {
    const { getByTestId, queryAllByTestId } = render(<BadgeNew />);
    let productTableItems = queryAllByTestId('item');
    const addOrderBtn = await waitForElement(() => getByTestId('addOrden-button'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
      done();
    });
    productTableItems = queryAllByTestId('item');
    const deleteOrdenBtn = await waitForElement(() => getByTestId('0-deleteOrden-button'));
    await act(async () => {
      fireEvent.click(deleteOrdenBtn);
      done();
    });
    productTableItems = queryAllByTestId('item');
    expect(productTableItems).toHaveLength(0);
  });
});

describe('addUser', () => {
  it('deberia poder agregar una orden a firebase', async (done) => {
    const getCollectionFromFirebase = (callback) => {
      const db = firebase.firestore();
      db.collection('users').onSnapshot((querySnapshot) => {
        const userData = [];
        querySnapshot.forEach((doc) => {
          userData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        callback(userData);
      });
    };
    const { getByTestId } = render(<BadgeNew />);
    const addOrdenBtn = await waitForElement(() => getByTestId('addOrden-button'));
    await act(async () => {
      fireEvent.click(addOrdenBtn);
      done();
    });
    const buttonOrdenToFirebase = await waitForElement(() => getByTestId('ordenToFirebase-button'));
    await act(async () => {
      fireEvent.click(buttonOrdenToFirebase);
      done();
    });

    const getData = (data) => {
      expect(data).toHaveLength(1);
      done();
    };
    getCollectionFromFirebase(getData);
  });
});
