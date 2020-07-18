import React from "react";

import { Form, Navbar } from "reactstrap";

class Landing extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="bar">
          <Navbar>
            <h2>Top Nine</h2>
            <button className="signB" type="submit">
              Login
            </button>
          </Navbar>
        </div>
        <div className="loginCont">
          <p className="title">Top Nine</p>
          <Form className="form">
            <p>Don't have an account?</p>
            <button className="signB">
              <a href="/register">Register</a>
            </button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Landing;
