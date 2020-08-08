import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../Components/gym1.png";
export default class Nave extends Component {
  render() {
    const authNavDetails = this.props.user ? (
      <>
        <Nav.Link as={Link} to="/updateprofile">
          WELCOME, {this.props.user.name}
        </Nav.Link>
        {this.props.user.isAdmin ? (
          <a
            target="_blank"
            className="navLink"
            href="http://localhost:5000/adminbro"
          >
            DASHBOARD
          </a>
        ) : (
          ""
        )}

        {this.props.user.isAdmin ? (
          <a
            target="_blank"
            className="navLink"
            href="https://studio.youtube.com/channel/UC3ljgH1h5HsQsL3ZX-eAbng/livestreaming/stream?utm_campaign=upgrade&utm_medium=redirect&utm_source=%2Fmy_live_events"
          >
            ADD LIVE
          </a>
        ) : (
          ""
        )}
        <Nav.Link as={Link} to="/logout" onClick={this.props.logout}>
          LOGOUT
        </Nav.Link>
      </>
    ) : (
      <>
        <Nav.Link as={Link} to="/login">
          LOGIN
        </Nav.Link>
        <Nav.Link as={Link} to="/signup">
          SIGN UP
        </Nav.Link>
      </>
    );
    return (
      <div>
        {/*  style={{ backgroundColor: "hsla(0, 0%, 0%, 0)" }} */}
        <Navbar style={{ backgroundColor: "black" }} variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand>
              <img src={`${logo}`} width="40px" height="40px" />{" "}
              <span style={{ marginLeft: "5px" }}>V-GYM</span>
            </Navbar.Brand>
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/Trainers">
              OUR TRAINERS
            </Nav.Link>
            <Nav.Link as={Link} to="/ClassList">
              OUR CLASSES
            </Nav.Link>
          </Nav>
          <Nav>{authNavDetails}</Nav>
        </Navbar>
      </div>
    );
  }
}
