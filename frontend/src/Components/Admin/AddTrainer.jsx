import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";

export default class AddTrainer extends Component {
  state = {};

  registerHandler = async () => {
    console.log("Hi");
    try {
      let data = await axios
        .post("http://localhost:5000/admin/addtrainer", this.state)
        .then((res) => {
          this.props.history.push("/");
        });
    } catch (err) {
      console.log(err);
    }
  };

  changeHandler = (e) => {
    let temp = { ...this.state }; //copy state object
    temp[e.target.name] = e.target.value;
    this.setState(temp);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Container
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            width: "40%",
          }}
        >
          <Form.Group>
            <Form.Label>Trainer Name</Form.Label>
            <Form.Control name="name" onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>About the Trainer</Form.Label>
            <Form.Control name="description" onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Trainer Photo</Form.Label>
            <Form.Control name="image" onChange={this.changeHandler} />
          </Form.Group>
          <Button variant="info" onClick={this.registerHandler} block>
            Register
          </Button>
        </Container>
      </div>
    );
  }
}
