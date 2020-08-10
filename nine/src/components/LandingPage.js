import React from "react";

import { Form, Navbar } from "reactstrap";

const Landing = (props) => {
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
              When was the last time you had to pick your Top 3 movies? Don't
              worry I'll wait...well here's your chance!
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
};

export default Landing;
