import React, { Component } from "react";
import education from "./img/education.png";
import industry from "./img/work.png";

class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="about-content">
          <p>
            I don-not tag myself as a UI/UX designer, Front-end Developer or
            Full-stack engineer.
            <br /> I use and learn whatever I need to solve the problems.
          </p>
        </div>
        <div className="education-and-industry">
          <div className="education">
            <div className="img-wrapper">
              <img src={education} alt="education icon" />
            </div>
            <a className="work-title" href="https://ucsd.edu/" target="_blank">
              University of California, San Diego
            </a>{" "}
            - B.S
            <p>
              Major: Cognitive Science Specialized in HCI(human computer
              interaction)
            </p>
            <p>Minor: Design</p>
          </div>
          <div className="industry">
            <div className="img-wrapper">
              <img src={industry} alt="industry icon" />
            </div>
            <div className="work">
              <a
                className="work-title"
                href="https://www.onegraph.com/"
                target="_blank"
              >
                OneGraph
              </a>
              <div className="work-detail">
                <p>
                  Software Developer - <i>since</i> Summer 2018
                </p>
              </div>
              <a
                className="work-title"
                href="https://www.generalforensics.com/"
                target="_blank"
              >
                General F orensics
              </a>
              <div className="work-detail">
                <p>Software Developer - Winter 2018</p>
              </div>
              <a
                className="work-title"
                href="https://www.paygarden.com/"
                target="_blank"
              >
                PayGarden
              </a>
              <div className="work-detail">
                <p>Software Engineer - Summer 2017</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
