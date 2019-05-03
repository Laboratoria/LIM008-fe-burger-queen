/* eslint-disable react/self-closing-comp */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import OrdenarPedido from '../pages/OrdenarPedido';
import AtenderPedido from '../pages/AtenderPedido';
import PedidoListo from '../pages/PedidoListo';


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={OrdenarPedido} />
          <Route exact path="/AtenderPedido" component={AtenderPedido} />
          <Route exact path="/PedidoListo" component={PedidoListo} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
