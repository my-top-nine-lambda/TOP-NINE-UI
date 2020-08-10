import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import AddMovies from "./components/AddMovies";
import Edit from "./components/Edit";
import Landing from "./components/LandingPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/movie" component={AddMovies} />
        <Route path="/edit/:id" component={Edit} />
      </div>
    );
  }
}

export default App;
