import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "../src/Components/Login/LoginPage"
import HomePage from "../src/Components/Home/HomePage"
import Login from "../src/Components/Login/Login"
import SignUp from "../src/Components/Login/SignUp"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/HomePage" component={HomePage} />
        </div>
      </Router>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', { className: 'App' }, React.createElement('h1', null, "It really works nowww")))
  }
}

export default App;
