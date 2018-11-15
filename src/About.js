import React, { Component } from "react";
import education from "./img/education.png";
import industry from "./img/work.png";

class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="about-content">
          <p>
            I don-not want to tag myself as a UI/UX designer, Front-end
            Developer or Full-stack engineer. I enjoy conveying my thoughts
            through color, shape and animation. I enjoy implementing some
            trivial clicking or scrolling animations. I enjoy exploring
            different languages and jokes about their strength and shortnesses.
            I use and learn whatever I need to solve the problems.
          </p>
        </div>
        <div className="education-and-industry">
          <div className="education">
            <div className="img-wrapper">
              <img src={education} alt="education icon" />
            </div>
            <p className="education-title">
              University of California, San Diego - B.S
            </p>
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
                href="https://www.generalforensics.com/"
                target="_blank"
              >
                <strong>General Forensics</strong>
              </a>
              <div className="work-detail">
                <p>Software Developer - Winter 2018</p>
                <ul>
                  <li>
                    Designed and developed a website using Django (include
                    database, social media login, payment system, search engine)
                  </li>
                  <li>Collected data on web using BeautifulSoup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
