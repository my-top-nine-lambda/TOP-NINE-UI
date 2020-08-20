import React from "react";

import { Navbar, Nav } from "reactstrap";

const Home = (props) => {
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
          {props.movies.map((movie) => {
            return (
              <div key={movie.id} className="movie-card">
                <h3 key={movie.id}>{movie.name}</h3>

                <button className="edit">
                  <a href={`/edit/${movie.id}`}>Edit</a>
                </button>
                <button className="delete" onClick={() => props.delete()}>
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
