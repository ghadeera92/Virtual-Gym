import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import image from "../gym2.png";

export default class LiveClass extends Component {
  state = {
    found: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/class/listClass")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          found: res.data.listClass.filter(
            (element) => element._id == this.props.match.params.id
          )[0],
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App" style={{ height: "700px" }}>
        <h2 style={{ margin: "40px 0" }}>
          {this.state.found.class_title}
          <span className="pull-right">
            <NavLink
              as={Link}
              to={`/ClassList`}
              className="btn btn-warning"
              variant="outline-warning"
              style={{ marginLeft: "400px" }}
            >
              Leave Class
            </NavLink>
          </span>
        </h2>
        {this.state.found.liveLink == undefined ? (
          <div style={{ margin: "200px 0" }}>
            <img src={`${image}`} height="80px" width="80px" />
            <br /> <br />
            <h4>We Will Add Live Link As soon As Possible..</h4>
          </div>
        ) : (
          <iframe
            width="80%"
            height="500"
            src={`https://www.youtube.com/embed/${this.state.found.liveLink}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}

        {/* <iframe
        width="90%"
        height="600px"
        src={props}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      </div>
    );
  }
}
