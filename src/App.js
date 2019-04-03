import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from './firestore.js'

class App extends Component {
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
      <form className = "App" onSubmit={this.addUser}>
        <div className = "App-header">
          <h1>BURGER QUEEN</h1>
        </div>
        <div className ="App-section-info">
          <p>{this.props.firstOption}</p>
          <input className = "margin"  
          type ="text"
          name = "name"
          onChange={this.updateInput}
          value={this.state.name}></input>
          <p>{this.props.secondOption}</p>
          <input className = "margin" 
          type ="text"
          name = "table_number"
          onChange={this.updateInput}
          value={this.state.table_number}></input>
          <button className = "margin btn" type = "submit">Gardar</button>
        </div>
        <div className = "App-header">
          <p>Desarrollado por SoftInPeru</p>
        </div>
      </form>
    );
  }
};

export default App;
