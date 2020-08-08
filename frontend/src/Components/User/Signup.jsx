import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";
import classes from "../BackgroundVideo.module.css";
import videoSource from "../training1.mp4";

export default class Signup extends Component {
  state = {};

  registerHandler = async () => {
    try {
      let data = await axios
        .post("http://localhost:5000/api/users/signup", this.state)
        .then((res) => {
          this.props.history.push("/login");
        });
    } catch (err) {
      console.log(err);
    }
  };

  changeHandler = (e) => {
    // console.log("name of field", e.target["name"]);
    // console.log("value of field", e.target.value);
    let temp = { ...this.state }; //copy state object
    temp[e.target.name] = e.target.value;
    this.setState(temp);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className={classes.smallContainer}>
          <video
            autoPlay="autoplay"
            loop="loop"
            muted
            className={classes.Video}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={classes.Content}>
            <div className={classes.SubContent}>
              <h1 style={{ color: "black", backgroundColor: "#ffcc00" }}>
                SIGN-UP
              </h1>
              <p>We will be HAPPY to have you in our classes</p>
            </div>
          </div>
        </div>

        <Container
          style={{ marginTop: "20px", marginBottom: "30px", width: "40%" }}
        >
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={this.changeHandler}
            />
          </Form.Group>
          <Button variant="info" onClick={this.registerHandler} block>
            Sign Up
          </Button>
        </Container>
      </div>
    );
  }
}
