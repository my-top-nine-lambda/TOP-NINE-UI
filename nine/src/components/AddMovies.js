import React from "react";
import axios from "axios";
import { Form, FormGroup, Input, Col, Navbar } from "reactstrap";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state.items,
      [e.target.name]: e.target.value,
    });
  };

  addMovie = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://top9-the2nd.herokuapp.com/api/movies",
        { name: this.state.name },
        {
          "Content-Type": "application/json",
          headers: { authorization: localStorage.getItem("token") },
        }
      )
      .then((res) => {
        this.setState({
          name: res.data,
        });
        this.props.history.push("/home");
      })
      .catch((error) => console.log(error));
  };

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
          <Form className="form" onSubmit={this.addMovie}>
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
