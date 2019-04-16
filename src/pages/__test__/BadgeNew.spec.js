import React from 'react';
import {
  cleanup, render, fireEvent, waitForElement, act,
} from 'react-testing-library';
import ReactDOM from 'react-dom';
import MockFirebase from 'mock-cloud-firestore';
import BadgeNew from '../BadgeNew';

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
})

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
    act(() => {
      fireEvent.click(addOrdenBtn);
      done();
    });
    productTableItems = queryAllByTestId('item');
    expect(productTableItems).toHaveLength(1);
  });

  it('deberia eliminar productos del array de ordenes', async (done) => {
    const { getByTestId, queryAllByTestId } = render(<BadgeNew />);
    const addOrderBtn = await waitForElement(() => getByTestId('addOrden-button'));
    act(() => {
      fireEvent.click(addOrderBtn);
      done();
    });
    const deleteOrdenBtn = await waitForElement(() => getByTestId('0-deleteOrden-button'));
    act(() => {
      fireEvent.click(deleteOrdenBtn);
      done();
    });
    const productTableItems = queryAllByTestId('item');
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
    act(() => {
      fireEvent.click(addOrdenBtn);
      done();
    });
    const buttonOrdenToFirebase = await waitForElement(() => getByTestId('ordenToFirebase-button'));
    act(() => {
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
