import React from "react";
import classes from "./BackgroundVideo.module.css";
import videoSource from "../Components/training3.mp4";
import { NavLink } from "react-router-dom";
import Feature from "./Features";

const Welcome = () => {
  return (
    <>
      <div className={classes.Container}>
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <div className={classes.SubContent}>
            <div
              style={{
                textAlign: "justify",
                color: "#ffcc00",
                // "#ffcc00",
                // "#ff3300",
                //  "#cf111d"
                letterSpacing: "5px",
                fontWeight: "900",
                fontSize: "60pt",
                marginBottom: "10px",
              }}
            >
              <div>STAY HOME.</div>
              <div>STAY SAFE.</div>
              <div>STAY FIT.</div>
            </div>

            {/* <p>Stay HOME. Stay SAFE. Stay FIT with our live classes</p> */}
            {/* <button type="button" className="btn btn-outline-dark">
              View Classes
            </button> */}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          height: "100px",
          width: "100%",
          color: "white",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h2>
          JOIN OUR LIVE CLASSES{" "}
          <span className="pull-right">
            <NavLink
              to={`/ClassList`}
              className="btn btn-warning"
              variant="outline-warning"
              style={{ marginLeft: "200px", width: "100px" }}
            >
              JOIN
            </NavLink>
          </span>
        </h2>{" "}
      </div>
      <Feature />
    </>
  );
};

export default Welcome;
