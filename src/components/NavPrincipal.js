/* eslint-disable react/self-closing-comp */
import React from 'react';
import './styles/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


export default function NavPrincipal() {
  return (
  // <nav className="navbar navbar-expand-md navbar-dark bg-dark Navbar justify-content-between title">
  //   <h1 className="principal">BURGER QUEEN</h1>
  // </nav>
    <Navbar className="NavbarClass" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">BURGER QUEEN</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto margin-left-nav nav-center">
          <Link to="/">ORDENAR PEDIDO</Link>
          <Link to="/AtenderPedido">ATENDER PEDIDO</Link>
          <Link to="/PedidoListo">PEDIDO LISTO</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
