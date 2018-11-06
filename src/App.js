import React, { Component } from "react";
import LandingPage from "./LandingPage";
import heartIcon from "./heart.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Youxi Li</p>
          <img className="heart-icon" src={heartIcon} alt="Heart icon" />
        </header>
        <LandingPage />
      </div>
    );
  }
}

export default App;
