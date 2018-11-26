import React, { Component } from "react";
import email from "./img/email.png";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import twitter from "./img/twitter.png";

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <h1 className="section-title">Connect With Me</h1>
        <div className="contact-methods">
          <a href="mailto:yukims19@gmail.com">
            <div className="contact-card">
              <div className="nail" />
              <img className="contact-icon" src={email} alt="email" />
            </div>
          </a>
          <a href="https://github.com/yukims19/" target="_blank">
            <div className="contact-card">
              <div className="nail" />
              <img className="contact-icon" src={github} alt="github" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/youxi-li-a6a0274b/"
            target="_blank"
          >
            <div className="contact-card">
              <div className="nail" />
              <img className="contact-icon" src={linkedin} alt="linkedin" />
            </div>
          </a>
          <a href="https://twitter.com/yukims19/" target="_blank">
            <div className="contact-card">
              <div className="nail" />
              <img className="contact-icon" src={twitter} alt="twitter" />
            </div>
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
