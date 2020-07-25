import React from "react";

import { Form, Navbar } from "reactstrap";

class Landing extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="bar">
          <Navbar>
            <h2>Top 3</h2>
            <button className="signB" type="submit">
              <a href="/login">Sign In</a>
            </button>
          </Navbar>
        </div>
        <div className="landCont">
          <div className="landCard">
            <p className="title">Top 3</p>
            <div>
              <p id="para">
                When was the last time you had you pick your Top 10 when it
                comes to movies? Never, well here's your chance!
              </p>
            </div>
            <Form className="form">
              <p id="para">Click here to Sign Up</p>
              <button className="signB">
                <a href="/register">Register</a>
              </button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
