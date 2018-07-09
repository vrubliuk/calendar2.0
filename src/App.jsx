import React, { Component } from 'react';
import './App.css';
import Header from "./containers/Header/Header.jsx";
import Main from './containers/Main/Main.jsx'
 
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Main />
      </div>
    );
  }
}

export default App;
