import React from 'react';
import Navbar from '../components/Navbar';
import Orden from '../components/Orden';
import Menu from '../components/Menu';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-6">
            <Menu />
          </div>
          <div className="col-6">
            <Orden />
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
