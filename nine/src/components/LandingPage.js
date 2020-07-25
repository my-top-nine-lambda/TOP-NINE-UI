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
          <div>
            <p id="para">
              When was the last time you had you pick your Top 10 when it comes
              to movies? Never, well here's your chance!
            </p>
          </div>
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
