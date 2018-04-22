import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/MainContent/Main';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
