/* eslint-disable react/self-closing-comp */
import React from 'react';
import NavPrincipal from './NavPrincipal';

export default function Layout(props) {
  return (
    <React.Fragment>
      <NavPrincipal />
      {props.children}
    </React.Fragment>
  );
}
