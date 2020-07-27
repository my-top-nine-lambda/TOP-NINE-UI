import React from "react";
import { Col, Form, FormGroup, Input, Nav, Navbar } from "reactstrap";
import axios from "axios";

class Signup extends React.Component {
  state = {
    newUser: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value,
      },
    });
  };

  register = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://top9-the2nd.herokuapp.com/api/auth/register",
        this.state.newUser
      )
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/login");
      })
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    return (
      <div className="login">
        <div className="bar">
          <Navbar>
            <h2>Top 3</h2>
            <Nav>
              <button className="signB">
                <a href="/login">Sign In</a>
              </button>
            </Nav>
          </Navbar>
        </div>
        <div className="register">
          <h2>Register Here</h2>
          <Form className="form" onSubmit={this.register}>
            <Col>
              <FormGroup>
                <Input
                  type="username"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Create a Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>

            <button className="signB">Submit</button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signup;
