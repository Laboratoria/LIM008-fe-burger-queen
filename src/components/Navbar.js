import React from 'react';
import './styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="row">
        <div className="col-6">
          <h1 className="title container-fluid">BURGER QUEEN</h1>
        </div>
        <div className="col-6">
          <div className="row margin-top">
            <div className="col-4 margin-div a-center"><a href="#about" className="color">ORDENAR PEDIDO</a></div>
            <div className="col-4 margin-div a-center"><a href="#about" className="color">ATENDER PEDIDO</a></div>
            <div className="col-4 a-center"><a href="#about" className="color">PEDIDO LISTO</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
