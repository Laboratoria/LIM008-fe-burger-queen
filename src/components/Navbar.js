import React from 'react';
import './styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="container-fluid row">
        <div className="col-6">
          <h1>BURGER QUEEN</h1>
        </div>
        <div className="col-6 Navbar__brand:hover">
          <div className="row">
            <div className="col-4"><a href="#about">ORDENAR PEDIDO</a></div>
            <div className="col-4"><a href="#about">ATENDER PEDIDO</a></div>
            <div className="col-4"><a href="#about">PEDIDO LISTO</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
