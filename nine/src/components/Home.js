import React from "react";

import { Navbar, Button } from "reactstrap";

const Home = (props) => {
  return (
    <div className="home">
      <Navbar className="bar">
        <h2>Top 3</h2>
        <Button color="primary" href="/login">Sign Out</Button>
      </Navbar>

      <Button color="primary" href="/movie">Add Movie</Button>
      <h1>Genre</h1>
      <div className="movies">
        <div className="movieList">
          <p id="para">Sport</p>
          {props.movies.map((movie) => {
            return (
              <div key={movie.id} className="movie-card">
                <h3 key={movie.id}>{movie.name}</h3>
                <Button color="primary" className="edit" href={`/edit/${movie.id}`}>Edit</Button>
                <Button color="danger" className="delete" onClick={(id) => props.delete(id)}>X</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
