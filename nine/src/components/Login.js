import React from "react";
import axios from "axios";
import { Col, Form, FormGroup, Input, Navbar, Nav } from "reactstrap";

class Login extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
    },
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("https://top9-the2nd.herokuapp.com/api/auth/login", this.state.user)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/home");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (e) => {
    console.log(e);
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="login">
        <Navbar className="bar">
          <h2>Top Nine</h2>
          <Nav>
            <button className="signB">
              <a href="/register">Register</a>
            </button>
          </Nav>
        </Navbar>
        <div className="loginCont">
          <p>Top Nine</p>
          <Form className="form" onSubmit={this.login}>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="username"
                  placeholder="username"
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
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <button className="signB" type="submit">
              Login
            </button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
