import React, { Component } from "react";
import "../App.css";
import image1 from "../Components/1.png";
import image2 from "../Components/2.png";
import image3 from "../Components/3.png";

export default class Features extends Component {
  render() {
    return (
      <div className="container">
        <h1>WHAT YOU WILL GET.</h1>
        <h5>MAKE YOUR WORKOUT EASIER AND GET FASTER RESULTS</h5> <br />
        <br />
        <div className="featureList">
          <div>
            <img src={`${image1}`} height="70px" width="70px" /> <br />
            <br />
            <h4>AT HOME WORKOUTS </h4>
            <p>
              Keep your results going strong with our easy-to-follow at home
              routines.
            </p>
          </div>
          <div>
            <img src={`${image2}`} height="70px" width="70px" />
            <br />
            <br />
            <h4>GUARANTEED RESULTS</h4>
            <p>
              Attend your personal training sessions. Follow our recommended
              nutritional plans. You'll see results - guaranteed.
            </p>
          </div>
          <div>
            <img src={`${image3}`} height="70px" width="70px" />
            <br />
            <br />
            <h4>BEST TRAINERS</h4>
            <p>
              {" "}
              We choose the best trainers you can ever meet. We promise you you
              will have fun and be fit with each one of them.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
