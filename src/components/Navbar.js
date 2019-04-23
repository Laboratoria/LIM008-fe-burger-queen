/* eslint-disable react/self-closing-comp */
import React from 'react';
import './styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark Navbar justify-content-between title">
      <h1 className="principal">BURGER QUEEN</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-text margin-left" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item margin-li">
            <a className="nav-link option" href="#about">ORDENAR PEDIDO</a>
          </li>
          <li className="nav-item margin-li option">
            <a className="nav-link" href="#about">ATENDER PEDIDO</a>
          </li>
          <li className="nav-item option">
            <a className="nav-link" href="#about">PEDIDO LISTO</a>
          </li>
        </ul>
      </div>
      {/* <span class="navbar-text">
      Navbar text with an inline element
    </span> */}
    </nav>
  );
}
