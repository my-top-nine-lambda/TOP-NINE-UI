import React from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import AddMovies from "./components/AddMovies";
import Edit from "./components/Edit";
import Landing from "./components/LandingPage";
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
        console.log(response.data);
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addMovie = () => {
    const endpoint = "https://top9-the2nd.herokuapp.com/api/movies";
    axios
      .post(
        endpoint,

        {
          "Content-Type": "application/json",
          headers: { authorization: localStorage.getItem("token") },
        }
      )
      .then((res) => {
        const movie = {
          name: "",
        };
        this.setState({
          movies: [...this.state.movies, movie],
        });
        this.props.history.push("/home");
      })
      .catch((error) => console.log(error));
  };

  updateMovie = (changes, id) => {
    const endpoint = `https://top9-the2nd.herokuapp.com/api/movies/${id}`;
    axios
      .put(endpoint, changes, {
        "Content-Type": "application/json",
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        const movie = res.data;
        this.setState({
          movie,
        });
        // redirect to home page
        this.history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteMovie = (id) => {
    const endpoint = `https://top9-the2nd.herokuapp.com/api/movies/${id}`;
    axios
      .delete(endpoint, {
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route
            path="/home"
            render={(props) => (
              <Home
                {...props}
                movies={this.state.movies}
                delete={this.deleteMovie}
              />
            )}
          />
          <Route
            path="/movie"
            render={(props) => (
              <AddMovies {...props} addMovie={this.addMovie} />
            )}
          />
          <Route
            path="/edit/:id"
            render={(props) => (
              <Edit
                {...props}
                handleChange={this.handleChange}
                updateMovie={this.updateMovie}
                value={this.state.name}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
