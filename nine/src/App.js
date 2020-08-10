import React from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import AddMovies from "./components/AddMovies";
import Edit from "./components/Edit";
import Landing from "./components/LandingPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://top9-the2nd.herokuapp.com/api/movies", {
        "Content-Type": "application/json",
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        this.setState({
          items: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (e) => {
    this.setState({
      ...this.state.items,
      [e.target.name]: e.target.value,
    });
  };

  deleteMovie = (id) => {
    axios
      .delete(`https://top9-the2nd.herokuapp.com/api/movies/${id}`, {
        "Content-Type": "application/json",
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        const movie = res.data;
        this.setState({ movie });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          path="/home"
          render={(props) => (
            <Home
              {...props}
              componentDidMount={this.componentDidMount}
              delete={this.deleteMovie}
            />
          )}
        />
        <Route
          path="/movie"
          render={(props) => (
            <AddMovies
              {...props}
              handleChange={this.handleChange}
              value={this.state.name}
            />
          )}
        />
        <Route path="/edit/:id" component={Edit} />
      </div>
    );
  }
}

export default App;
