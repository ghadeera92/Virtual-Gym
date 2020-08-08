import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";

export default class UpdateProfile extends Component {
  state = {
    user: this.props.user, //set props from router to state so as to have a controlled form
  };
  update = () => {
    this.props.update(this.state.user);
  };

  changeHandler = (e) => {
    // console.log("name of field", e.target["name"]);
    // console.log("value of field", e.target.value);
    let temp = { ...this.state }; //copy state object
    temp.user[e.target.name] = e.target.value;
    this.setState(temp);
  };

  render() {
    console.log(this.state.user);

    let { user } = this.state;
    return (
      <div>
        <Container>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              onChange={this.changeHandler}
              value={user.name}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              onChange={this.changeHandler}
              value={user.email}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={this.changeHandler}
            />
          </Form.Group>
          <Button variant="warning" onClick={this.update} block>
            Update
          </Button>
        </Container>
      </div>
    );
  }
}
