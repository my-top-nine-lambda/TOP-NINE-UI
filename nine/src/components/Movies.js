import React from "react";
import axios from "axios";
import { Form, FormGroup, Input, Col, Navbar } from "reactstrap";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleName = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
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
      .then((response) => {
        this.setState({
          name: "",
        });
        this.props.history.push("/home");
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="AddMovie">
        <Navbar className="bar">
          <h2>Top Nine</h2>
          <button className="signB">
            <a href="/home">Home</a>
          </button>
        </Navbar>
        <h2>Add Your Movie</h2>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Movie"
                onChange={this.handleName}
                value={this.state.name}
              />
            </FormGroup>
            <button className="signB">Add</button>
          </Col>
        </Form>
      </div>
    );
  }
}

export default Movies;
