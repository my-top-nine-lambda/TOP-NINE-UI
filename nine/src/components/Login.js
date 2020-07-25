import React from "react";
import axios from "axios";
import { Col, Form, FormGroup, Input, Navbar } from "reactstrap";

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
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/home");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Credentials");
      });
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
        <div className="bar">
          <Navbar>
            <h2>Top 3</h2>
          </Navbar>
        </div>
        <div className="loginCont">
          <div className="loginCard">
            <p className="title">Top 3</p>
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
              <p id="para">Don't have an account?</p>

              <a href="/register">Register</a>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
