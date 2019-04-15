import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Login from './Login/Login';
import Signup from './Login/Signup';

class App extends Component {

  login = user => {
    axios
      .post("https://", user)
      .then(response => {
        localStorage.setItem("token", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  register = creds => {
    axios
      .post("http://", creds)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
