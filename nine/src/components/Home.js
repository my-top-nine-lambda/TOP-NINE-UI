import React from "react";
import axios from "axios";
import { Navbar, Nav } from "reactstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
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
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const sports = this.state.movies;

    return (
      <div className="home">
        <div className="bar">
          <Navbar>
            <h2>Top 3</h2>
            <Nav>
              <button className="signB">
                <a href="/movie">+Movie</a>
              </button>
              <button className="signB">
                <a href="/login">Sign Out</a>
              </button>
            </Nav>
          </Navbar>
        </div>
        <p className="h1">Genre</p>
        <div className="movies">
          <div className="movieList">
            <p id="para">Sport</p>
            {sports.map((movie) => {
              return (
                <div key={movie.id} className="movie-card">
                  <h3 key={movie.id}>{movie.name}</h3>
                  <button className="edit">
                    <a href={`/edit/${movie.id}`}>Edit</a>
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.props.delete()}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
