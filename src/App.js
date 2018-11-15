import React, { Component } from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import heartIcon from "./img/heart.png";
import "./App.scss";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Youxi Li</p>
          <img className="heart-icon" src={heartIcon} alt="Heart icon" />
        </header>
        <LandingPage />
        <About />
        <Project />
        <Contact />
      </div>
    );
  }
}

export default App;
