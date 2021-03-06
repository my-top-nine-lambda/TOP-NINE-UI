import React from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import { axiosWithAuth } from "./auth/axiosWithAuth";
import Home from "./components/Home";
import AddMovies from "./components/AddMovies";
import Edit from "./components/Edit";
import Land from "./components/LandingPage";
// import PrivateRoute from "./components/PrivateRoute";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const endpoint = "https://top9-the2nd.herokuapp.com/api/movies";
    axios
      .get(endpoint, {
        "Content-Type": "application/json",
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addMovie = (movie) => {
    // const endpoint = "https://top9-the2nd.herokuapp.com/api/movies";
    axiosWithAuth()
      .post("", movie)
      .then((res) => {
        this.setState({
          movies: res.data.name,
        });
        // this.props.history.push("/home");
      })
      .catch((error) => console.log(error));
  };

  updateMovie = (e, id, updatedMovie) => {
    e.preventDefault();
    const endpoint = `https://top9-the2nd.herokuapp.com/api/movies/${id}`;
    
    axios
    .put(endpoint, updatedMovie, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      const movie = res.data.name;
      this.setState({
          movies: movie,
        });
        // redirect to home page
        this.props.history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteMovie = (id) => {
    const endpoint = `https://top9-the2nd.herokuapp.com/api/movies/${id}`;
    axios
      .delete(endpoint, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        const movie = res.data;
        this.setState({ movie });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Land} />
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" render={(props) => (<Home {...props} mount={this.componentDidMount} movies={this.state.movies} delete={this.deleteMovie} /> )} />
          <Route path="/movie"render={(props) => ( <AddMovies {...props} addMovie={this.addMovie} /> )} />
          <Route path="/edit/:id" render={(props) => ( <Edit {...props} handleChange={this.handleChange} updateMovie={this.updateMovie} value={this.state.name} /> )} />
        </Router>
      </div>
    );
  }
}

export default App;
