import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Contact from './Contactform';
import '../Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <h1 className="App-title">Welcome to the Magical Menagerie!!</h1>
        </header>
          <img src= "https://userscontent2.emaze.com/images/6d50e532-083e-4f63-91cc-6547ca31b627/20622900573554651d90013606d9990d.jpeg"></img>
        <p className="App-intro">
          OH HECK! Let's get to shoppin'!!!!
        </p>
        <Link to="/contact">Contact Us!</Link>
      </div>
    );
  }
}

export default App;
