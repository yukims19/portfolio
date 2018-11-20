import React, { Component } from "react";
import "./Modal.scss";
import footographer from "./img/footographer.png";
import justEater from "./img/just-eater.png";
import pickyPerson from "./img/picky-person.png";
import competitors from "./img/mommafung-competitors.png";
import moodboard from "./img/mommamoodboard.png";

const MommafungModal = () => {
  return (
    <div className="mommafung-modal modal-wrapper">
      <div className="overview">
        <h1 className="modal-title">MommaFung</h1>
        <p>
          This is a professional website for Momma Fung & Co, which is a food
          vendor that sells unicorn buns.
          <br />
          <strong>
            My Major Role: Competitive Analysis, Front-end Design & Programming
          </strong>
        </p>
        <p>
          <strong>
            <a
              href="http://yoshili.com/Moma_Fungs.github.io/index.html"
              target="_blank"
            >
              Click here to open the Website
            </a>
          </strong>
        </p>
      </div>
      <div className="modal-section-segregator">
        <hr />
        <p className="modal-section-title"> Working Process </p>
        <hr />
      </div>
      <div className="modal-section">
        <h2>1. Client Proposal</h2>
        <p>
          First, we had a meeting with our client to understand their business
          model and their expectations for the website. Based on our meeting, we
          decided on the brand of the website, which is “cute, modest, and
          thankful”, as well as the working priority list.
        </p>
        <p>
          Our detailed meeting summary and analysis can be accessed through
          <a href="https://docs.google.com/document/d/1LF2dC9u6YSdTlyFsY1Edwpx7lOZJE34WIr-CkgPQaKg/edit?usp=sharing">
            {" "}
            here.
          </a>
        </p>

        <h2>2. User Interview</h2>
        <p>
          Based on the information provided by our client, we interviewed our
          targeted users and made three personaes.
        </p>
        <div className="persona flex-container">
          <div>
            <img src={footographer} />
          </div>
          <div>
            <img src={justEater} />
          </div>
          <div>
            <img src={pickyPerson} />
          </div>
        </div>
        <p>
          We also summarized User Scenarios and Use cases. Based on those
          informations, we made a Features & Functionality Table. <br />
          Details can be accessed through
          <a href="https://docs.google.com/document/d/1zopXHcXaYxlprxHJv8hkuImWKTQcA-YrNZpTwvUxRDM/edit?usp=sharing">
            here.
          </a>
        </p>

        <h2>3. Competitive Analysis</h2>
        <p>
          We made analysis on what our client's competitors' websites look like
          and how features on other websites have been designed that might be
          useful on our site.
        </p>

        <p className="example">Here is the list of our competitors:</p>
        <div>
          <img className="big-img" src={competitors} />
        </div>

        <p className="example">
          a) First, we made analysis on the branding, functionality, content,
          site architecture, navigation, and design on each website.
        </p>
        <p className="example">
          b) Second, we summarized the fundings, and made a list of takeaways
          for our website
        </p>
        <p className="example">
          c) Finally, we made a moodboard for our website.
        </p>
        <div>
          <img className="big-img" src={moodboard} />
        </div>

        <p>
          Our analysis details can be accessed through
          <a href="https://docs.google.com/presentation/d/1sjPY7IY2sTaBJA0ragfKe_ckGY2-O053beE2ND5dir4/edit?usp=sharing">
            {" "}
            here.
          </a>
        </p>

        <h2>4. Creative Brief</h2>
        <p>We made a creative brief which includes:</p>
        <ul>
          <li>Definition of Potential Product/ Attention Grabber</li>
          <li>Scope</li>
          <li>Audience</li>
          <li>Objectives</li>
          <li>Personality and Tone</li>
          <li>Key Target Audience Insight</li>
          <li>Special Issues/ Problems Anticipated</li>
        </ul>
        <p>
          Details can be accessed through
          <a href="https://docs.google.com/document/d/1hTselc6Zko0F0t4M1B1ZBHmVyeJaNvK3bZKemiOJvbk/edit?usp=sharing">
            {" "}
            here.
          </a>
        </p>

        <h2>5.Wireframe</h2>
        <p>
          Based on our creative brief, we made a Development plan,{" "}
          <a href="https://www.figma.com/proto/Vi0rT7eSTMWS0QST3GDqfy3q/Momma-Fung-Wireframes?scaling=contain&node-id=1%3A2">
            MOBILE Wireframe
          </a>{" "}
          and{" "}
          <a href="https://www.figma.com/proto/Vi0rT7eSTMWS0QST3GDqfy3q/Momma-Fung-Wireframes?node-id=54%3A295&scaling=contain">
            DESKTOP Wireframe
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default MommafungModal;
