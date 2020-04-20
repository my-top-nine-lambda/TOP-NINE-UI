import React from "react";
import axios from "axios";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Navbar,
  Nav,
} from "reactstrap";

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
      .post("https://mtnbe.herokuapp.com/api/auth/login", this.state.user)
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
      <Container class="login">
        <Navbar className="bar">
          <h2>Top Nine</h2>
          <Nav>
            <button className="sign">
              <a href="/register">Register</a>
            </button>
          </Nav>
        </Navbar>
        <h2>Top Nine</h2>
        <Form className="form" onSubmit={this.login}>
          <Col>
            <FormGroup>
              <Label>Username</Label>
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
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <button className="sign" type="submit">
            Login
          </button>
        </Form>
      </Container>
    );
  }
}

export default Login;
