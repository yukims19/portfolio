import React, { Component } from "react";
class Project extends Component {
  render() {
    return (
      <div className="project">
        <h1 className="section-title">Recent Projects</h1>
        <div className="recent-project">
          <div className="design-project">
            <div className="project-wrapper">
              <div className="example" />
              <div className="example" />
            </div>
          </div>
          <div className="segregator" />
          <div className="coding-project">
            <div className="project-wrapper">
              <div className="example" />
              <div className="example" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
