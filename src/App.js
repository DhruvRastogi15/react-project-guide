import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "../src/Components/Login/LoginPage"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={LoginPage} />

        </div>
      </Router>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', { className: 'App' }, React.createElement('h1', null, "It really works nowww")))
  }
}

export default App;
