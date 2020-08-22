import React from "react";
import { Form, FormGroup, Input, Col, Navbar } from "reactstrap";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  submitMovie = () => {};
  render() {
    return (
      <div className="addMovie">
        <Navbar className="bar">
          <h2>Top Nine</h2>
          <button className="signB">
            <a href="/home">Home</a>
          </button>
        </Navbar>
        <div className="addCard">
          <p className="title1">Add Your Movie</p>
          <Form className="form" onSubmit={this.submitMovie}>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="movie"
                  placeholder="Movie"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <button className="signB">Add</button>
            </Col>
          </Form>
        </div>
      </div>
    );
  }
}

export default Movies;
