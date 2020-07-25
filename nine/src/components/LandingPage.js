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
              <a href="/login">Login</a>
            </button>
          </Navbar>
        </div>
        <div className="landCont">
          <p className="title">Top Nine</p>
          <Form className="form">
            <p id="para">Don't have an account?</p>
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
