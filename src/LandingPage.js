import React, { Component } from "react";
import heartIcon from "./img/heart.png";

class LandingPage extends Component {
  render() {
    return (
      <section className="landing-page">
        <div id="landing-page-filter" />
        <h1>Hi. This is Yuki.</h1>
        <h1>
          I <img className="heart-icon" src={heartIcon} alt="Heart icon" />{" "}
          Design and Coding.
        </h1>
      </section>
    );
  }
}

export default LandingPage;
