import React, { Component } from "react";
import heartIcon from "./img/heart.png";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingTextScale: 1,
      landingTextY: 0,
      landingFilterOpacity: 0.6
    };
  }

  handleScroll = () => {
    if (
      window.scrollY < window.innerHeight &&
      this.state.landingTextScale > 0.1
    ) {
      this.setState({
        landingTextScale: 1 - window.scrollY / window.innerHeight / 5,
        landingTextY: (window.scrollY / 5) * -1,
        landingFilterOpacity: 0.6 + window.scrollY / window.innerHeight / 5
      });
    }
    console.log(window.scrollY);
    //this.state.landingTextScale - window.scrollY / 1000
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <section className="landing-page">
        <div
          id="landing-page-filter"
          style={{
            opacity: this.state.landingFilterOpacity
          }}
        />
        <div
          className="landing-page-wrapper"
          style={{
            transform:
              "scale(" +
              this.state.landingTextScale +
              ") translateY(" +
              this.state.landingTextY +
              "px)"
          }}
        >
          <h1>Hi. This is Yuki.</h1>
          <h1>
            I <img className="heart-icon" src={heartIcon} alt="Heart icon" />{" "}
            Design and Coding.
          </h1>
        </div>
      </section>
    );
  }
}

export default LandingPage;
