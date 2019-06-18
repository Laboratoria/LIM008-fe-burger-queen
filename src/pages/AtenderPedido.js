/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';

export default function AtenderPedido() {
  const { error, loading, value } = useCollection(
    firebase.firestore().collection('users').orderBy('date', 'asc'),
  );

  const sendFinishedOrden = (item, id) => {
    const db = firebase.firestore();
    db.collection('ordenFinished').add(item);
    db.collection('users').doc(id).delete();
  };
  return (
    <div className="container center margin-option">
      <div className="row weigth font-mayor">
        <div className="col-3">CLIENTE</div>
        <div className="col-3">PRODUCTO</div>
        <div className="col-3">CANTIDAD</div>
        <div className="col-3">ENVIAR</div>
      </div>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>
          {value.docs.map(doc => (
            // console.log(doc.data().orden[0].count)
            <div className="row margin-option font-menor section" data-testid="item" key={doc.id}>
              <div className="col-3">{doc.data().name}</div>
              <div className="col-3 center">{doc.data().orden.map(item => (<div>{item.name}</div>))}</div>
              <div className="col-3 center">{doc.data().orden.map(item => (<div>{item.count}</div>))}</div>
              <div className="col-3 center">
                <button type="button" className="button muted-button button-delete margin-button-count-substr" onClick={() => sendFinishedOrden(doc.data(), doc.id)}><i className="fas fa-share"></i></button>
              </div>
            </div>
            // <React.Fragment key={doc.id}>
            //   {JSON.stringify(doc.data())},{' '}
            // </React.Fragment>
          ))}
        </span>
      )}
    </div>

  );
}
