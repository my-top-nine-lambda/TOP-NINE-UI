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
      .get("https://mtnbe.herokuapp.com/api/categories/moviesDB", {
        "Content-Type": "application/json",
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          items: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  delete = (id) => {
    let items = this.state.items;
    items = items.filter((item) => item.id !== id);
    this.setState({
      items,
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="cat">
        <Navbar className="bar">
          <h2>Top Nine</h2>
          <Nav>
            <button className="signB">
              <a href="/">Sign Out</a>
            </button>
          </Nav>
        </Navbar>
        <p className="h1">Your 9</p>
        <div className="movies">
          <div className="movieList">
            <p>Sport</p>
            {items.map((item) => {
              return (
                <div className="movie-card">
                  <h3 key={item.id}>{item.name}</h3>
                  <button className="edit" href={`/edit/${item.id}`}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.delete(item.id)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <div className="movieList">
            <p>Drama</p>
            {items.map((item) => {
              return (
                <div className="movie-card">
                  <h3 key={item.id}>{item.name}</h3>
                  <button className="edit" href={`/edit/${item.id}`}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.delete(item.id)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <div className="movieList">
            <p>Scary</p>
            {items.map((item) => {
              return (
                <div className="movie-card">
                  <h3 key={item.id}>{item.name}</h3>
                  <button className="edit" href={`/edit/${item.id}`}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.delete(item.id)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <div className="movieList">
            <p>Comedy</p>
            {items.map((item) => {
              return (
                <div className="movie-card">
                  <h3 key={item.id}>{item.name}</h3>
                  <button className="edit" href={`/edit/${item.id}`}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.delete(item.id)}
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
