import React from 'react';
import './styles/Navbar.css';
import firebase from '../firestore.js'
// import Options from './Options.js'
class Orden extends React.Component {
  // state = {
  //   menu: [
  //     {name: 'Hamburguesa simple de res', value: 10},
  //     {name: 'Hamburguesa simple de pollo', value: 10},
  //     {name: 'Hamburguesa simple vegetariana', value: 10},
  //     {name: 'Hamburguesa doble de res', value: 15},
  //     {name: 'Hamburguesa doble de pollo', value: 15},
  //     {name: 'Hamburguesa doble vegetariana', value: 15},
  //   ]
  // }
    addUser = e => { 
        e.preventDefault ();
        const db = firebase.firestore();
        db.settings({
        timestampsInSnapshots: true
      });
      db.collection('users').add({
        name: this.state.name,
        table_number: this.state.table_number
      });   
        this.setState ({ 
          name: '', 
          table_number: ''
        }); 
      };
      
      constructor() {
        super();
        this.state = {
         name: '',
         table_number: ''
        };
      }
      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
     
      render() {
        return (
          <form onSubmit={this.addUser}>
            <div>
              <h1>ORDEN</h1>
            </div>
            <div>
              <p>NOMBRE DE CLIENTE:</p>
              <input  
              type ="text"
              name = "name"
              onChange={this.updateInput}
              value={this.state.name}></input>
              <p>NÚMERO DE MESA:</p>
              <input 
              type ="text"
              name = "table_number"
              onChange={this.updateInput}
              value={this.state.table_number}></input>
              {/* <div>
                <ul>
                  {
                    this.state.menu.map((menu) => {
                      return (<Options name = {menu.name}>{menu.value}</Options>)
                    })
                  }
                </ul>
              </div> */}
              <button type = "submit">Enviar a cocina</button>
            </div>
          </form>
        );
      }
  }

export default Orden;