import React, { Component } from "react";
import mommafung from "./img/mommafung.jpg";
class Project extends Component {
  render() {
    return (
      <section className="project">
        <h1 className="section-title">Recent Projects</h1>
        <div className="recent-project">
          <div className="design-project">
            <div className="project-wrapper">
              <div className="project-overview">
                <img
                  className="project-thumbnail"
                  src={mommafung}
                  alt="mommafung"
                />
                <p>
                  Sociable On As Carriage My Position Weddings Raillery
                  Consider. Peculiar Trifling Absolute And Wandered Vicinity
                  Property Yet. blablabla
                </p>
              </div>
              <div className="project-overview">
                <img
                  className="project-thumbnail"
                  src={mommafung}
                  alt="mommafung"
                />
                <p>
                  Sociable On As Carriage My Position Weddings Raillery
                  Consider. Peculiar Trifling Absolute And Wandered Vicinity
                  Property Yet. blablabla
                </p>
              </div>
            </div>
          </div>
          <div className="segregator" />
          <div className="coding-project">
            <div className="project-wrapper">
              <div className="project-overview">
                <p>
                  Sociable On As Carriage My Position Weddings Raillery
                  Consider. Peculiar Trifling Absolute And Wandered Vicinity
                  Property Yet. blablabla
                </p>
                <img
                  className="project-thumbnail"
                  src={mommafung}
                  alt="mommafung"
                />
              </div>
              <div className="project-overview">
                <p>
                  Sociable On As Carriage My Position Weddings Raillery
                  Consider. Peculiar Trifling Absolute And Wandered Vicinity
                  Property Yet. blablabla
                </p>
                <img
                  className="project-thumbnail"
                  src={mommafung}
                  alt="mommafung"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
