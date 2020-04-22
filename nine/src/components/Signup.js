import React from "react";
import { Col, Form, FormGroup, Input, Nav, Navbar } from "reactstrap";

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
    this.props.register(this.state.newUser);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="login">
        <Navbar className="bar">
          <h2>Top Nine</h2>
          <Nav>
            <button className="signB">
              <a href="/">Login</a>
            </button>
          </Nav>
        </Navbar>
        <div className="register">
          <h2>Register</h2>
          <Form className="form" onSubmit={this.register}>
            <Col>
              <FormGroup>
                <Input
                  type="username"
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
            <button className="signB">Submit</button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signup;
