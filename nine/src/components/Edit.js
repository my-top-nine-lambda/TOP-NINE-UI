import React from "react";
import { Col, Form, Input, Navbar } from "reactstrap";

const Edit = (props) => {
  return (
    <div className="editPage">
      <Navbar className="bar">
        <h2>Top Nine</h2>
        <button className="site-button">
          <a href="/home">Home</a>
        </button>
      </Navbar>
      <div className="editForm">
        <h1>Edit Here</h1>
        <Form
          onSubmit={(changes) =>
            props.updateItem(changes, props.match.params.id)
          }
        >
          <Col>
            <Input
              id="editInput"
              type="edit"
              name="edit"
              placeholder="Edit"
              value={props.value}
              onChange={props.handleChange}
            />
            <button className="site-button" type="submit">
              Submit
            </button>
          </Col>
        </Form>
      </div>
    </div>
  );
};

export default Edit;
