import React from "react";
import axios from "axios";
import { Button, Col, Form, Input, Navbar } from "reactstrap";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateItem = (e, id) => {
    e.preventDefault();
    axios
      .put(
        `https://top9-the2nd.herokuapp.com/api/movies/${id}`,
        this.state.name,
        {
          "Content-Type": "application/json",
          headers: { authorization: localStorage.getItem("token") },
        }
      )
      .then((res) => {
        console.log(res);
        const movie = res.data;
        this.setState({
          name: movie,
        });
        this.props.history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar className="bar">
          <h2>Top Nine</h2>
        </Navbar>
        <Form onSubmit={(e) => this.updateItem(e, this.props.match.params.id)}>
          <Col>
            <Input
              type="text"
              name="edit"
              placeholder="Edit"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Button type="submit">edit</Button>
          </Col>
        </Form>
      </div>
    );
  }
}

export default Edit;
