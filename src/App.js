import React, { Component } from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import heartIcon from "./img/heart.png";
import "./App.scss";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;

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
        <Footer style={{ textAlign: "center" }}>
          Made with{" "}
          <img className="heart-icon" src={heartIcon} alt="Heart icon" /> by
          Youxi Li
        </Footer>
      </div>
    );
  }
}

export default App;
