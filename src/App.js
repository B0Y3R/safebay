import React, { Component } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Header />
        <Main />
        <Footder />
      </div>
    );
  }
}

export default App;
