import React from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

class Signup extends React.Component {
  state = {
    newUser: {
      username: "",
      password: "",
    }
  };

  handleChange = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.newUser);
    this.props.history.push('/')
  };

  render() {
    return (
      <Container className="login">
        <h2>Register</h2>
        <Form className="form" onSubmit={this.register}>
          <Col>
            <FormGroup>
              <Label>Username</Label>
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
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Signup;