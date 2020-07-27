import React from "react";
import axios from "axios";
import { Navbar, Nav } from "reactstrap";

class Home extends React.Component {
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

  deleteMovie = (id) => {
    axios
      .delete(`https://top9-the2nd.herokuapp.com/api/movies/${id}`)
      .then((res) => {
        const movie = res.data;
        this.setState({ movie });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const sports = this.state.items;
    // const drama = this.state.dramaItems;
    // const comedy = this.state.comedyItems;
    // const scary = this.state.scaryItems;

    return (
      <div className="home">
        <div className="bar">
          <Navbar>
            <h2>Top 3</h2>
            <Nav>
              <button className="signB">
                <a href="/login">Sign Out</a>
              </button>
              <button className="signB">
                <a href="/movie">+Movie</a>
              </button>
            </Nav>
          </Navbar>
        </div>
        <p className="h1">Genre</p>
        <div className="movies">
          <div className="movieList">
            <p id="para">Sport</p>
            {sports.map((item) => {
              return (
                <div key={item.id} className="movie-card">
                  <h3 key={item.id}>{item.name}</h3>
                  <button className="edit">
                    <a href={`/edit/${item.id}`}>Edit</a>
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.deleteMovie(item.id)}
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
