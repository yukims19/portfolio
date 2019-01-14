import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import "./Modal.scss";
import footographer from "./img/footographer.png";
import justEater from "./img/just-eater.png";
import pickyPerson from "./img/picky-person.png";
import competitors from "./img/mommafung-competitors.png";
import moodboard from "./img/mommamoodboard.png";
import hiPointeNav from "./img/hi-pointe-nav.png";
import rainbowBagelMakingVideo from "./img/rainbow-bagel-making-video.png";

const MommafungModal = () => {
  return (
    <div className="mommafung-modal modal-wrapper">
      <section className="overview">
        <h1 className="modal-title">MommaFung</h1>
        <Row>
          <Col span={16} offset={4}>
            <p>
              This unique street food vendor that harnesses the essence of
              unicorn food needs to be discoverable on the internet for all the
              instagram food influencers and local foodies. We tell you why
              MommaFung would be your first choice and where you can catch them.
            </p>
          </Col>
        </Row>
        <a
          href="http://yoshili.com/Moma_Fungs.github.io/index.html"
          target="_blank"
          className="ant-btn ant-btn-primary ant-btn-lg overview-btn"
        >
          Visit Website
        </a>
      </section>

      <div className="modal-section">
        <Row>
          <Col span={22} offset={1}>
            <h2>
              Who is our client? What is their expectation and business model?
            </h2>
          </Col>
        </Row>
        <Row className="section-content">
          <Col span={20} offset={2}>
            <p>
              Katie started the steamed bun vendor business because she loved
              her mom’s buns and thought that they are so tasty that should be
              shared with others. She came up with the idea of selling the buns
              which happened to coincide with the Starbucks Unicorn drink
              marketing campaign which she used to her advantage in creating a
              unique “unicorn” steamed bun that people loved. The food
              vendor/truck emergence became hugely popular because of a number
              of reasons. Eating evolved from just a necessity to become a
              social activity that people engage in, and food vendors are the
              perfect facilitators of that.
            </p>
            <p>
              MommaFung's business brand is <strong>Cute</strong>,
              <strong> Modest</strong>, and <strong>Thankful</strong>. Having a
              bun in MommaFung is not only about filling your stomach, but more
              importantly, about the experience of enjoying the aesthetics of
              the food, witnessing the making process of the buns, and sharing
              the excitement with other people.
            </p>
            <p>
              <i>
                {" "}
                More details about the client meeting and analysis can be
                accessed through
                <a
                  href="https://docs.google.com/document/d/1LF2dC9u6YSdTlyFsY1Edwpx7lOZJE34WIr-CkgPQaKg/edit?usp=sharing"
                  target="_blank"
                >
                  {" "}
                  here.
                </a>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={22} offset={1}>
            <h2>Who are the users (people who will visit the website)?</h2>
          </Col>
        </Row>
        <Row className="section-content">
          <Col span={20} offset={2}>
            <p>
              In order to better understand the users, we interviewed
              MommaFung's customers and categorized our users with three
              personas. While we originally expected that our users will be
              limited to young adults who love sharing food picture on social
              media, we later learned from the interviews that many people are
              actually attracted by the steam that is produced when buns are
              cooked, and they enjoy watching the making process of the buns.
              Some people also simply enjoy the taste because it is so
              delicious.
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
              We also summarized user scenarios and use cases for the three
              personas listed above, and developed a Feature & Functionality
              Table to cover those user needs.
            </p>
            <p>
              <i>
                Details can be accessed through
                <a
                  href="https://docs.google.com/document/d/1zopXHcXaYxlprxHJv8hkuImWKTQcA-YrNZpTwvUxRDM/edit?usp=sharing"
                  target="_blank"
                >
                  {" "}
                  here.
                </a>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={22} offset={1}>
            <h2>Who is our client’s competitor?</h2>
          </Col>
        </Row>
        <Row className="section-content">
          <Col span={20} offset={2}>
            <p>
              We conducted a close analysis of each of the competitor website
              from 6 different aspects:{" "}
              <strong>
                Branding, Functionality, Content, Site Architecture, Navigation,
              </strong>{" "}
              and <strong>Design</strong>. Then, we summarized the findings and
              made a list of takeaways for MommaFung's website.
            </p>

            <p>
              As an example, Hi-Pointe’s navigation bar is very well designed:
            </p>
            <Row className="example-block">
              <Col span={7} offset={2}>
                <img src={hiPointeNav} alt="Hi-Point Nav" />
              </Col>
              <Col span={13}>
                <ul>
                  <li>
                    It includes all the essential information such as address,
                    social media links, and press sections.
                  </li>
                  <li>
                    Clicking on the address will open the google map, which
                    saves users' time of copying and pasting
                  </li>
                  <li>
                    The text and section buttons are big and easy to click,
                    which works well for both Desktop and Mobile view.
                  </li>
                </ul>
              </Col>
            </Row>

            <p>
              Another example is Rainbow Bagel. Their website is conveying the
              brand very wisely:
            </p>
            <Row className="example-block">
              <Col span={16} offset={4}>
                <img src={rainbowBagelMakingVideo} alt="Hi-Point Nav" />
              </Col>
              <Col span={16} offset={4}>
                <ul>
                  <li>
                    Rainbow Bagel includes a video of the making process of the
                    bagels, which demonstrates the hard work and effort put into
                    the food and provides an insight into the people behind the
                    product. It allows the customers to connect on a deeper
                    level with Rainbow Bagel's brand, the people, and the food.
                  </li>
                </ul>
              </Col>
            </Row>

            <p>
              Through the process of analyzing the competitor websites, we
              developed a sense of what are the “Goods” and “Bads” for a vendor
              website. For example, food vendors are different from the
              traditional restaurants that they do not have much dish variety in
              menu, but they have random opening hours and pop up locations.
              With the uniqueness of the vendor’s business style in mind, we
              developed a mood board that will fit MommaFung’s brand.
            </p>
            <Row className="example-block">
              <Col span={18} offset={3}>
                <img src={moodboard} alt="moodboard" />
              </Col>
            </Row>

            <p>
              <i>
                What to see check more details? Our analysis details can be
                accessed through
                <a
                  href="https://docs.google.com/presentation/d/1sjPY7IY2sTaBJA0ragfKe_ckGY2-O053beE2ND5dir4/edit?usp=sharing"
                  target="_blank"
                >
                  {" "}
                  here
                </a>
                .
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={22} offset={1}>
            <h2>
              With all the analysis results, let’s get into details on how we
              will tackle this.
            </h2>
          </Col>
        </Row>
        <Row className="section-content">
          <Col span={20} offset={2}>
            <p>
              We made a creative brief which summarizes our research and
              analysis, and explains the following in detail:
            </p>
            <ul>
              <li>Definition of Potential Product/ Attention Grabber</li>
              <li>
                Scope
                <ul>
                  <li>Page Contents</li>
                  <li>Total Program Size</li>
                </ul>
              </li>
              <li>
                Audience
                <ul>
                  <li>Returning Customer</li>
                  <li>Potential Customer</li>
                  <li>Photographers, Instagrammers, Foodies</li>
                </ul>
              </li>
              <li>
                Objectives
                <ul>
                  <li>MommaFung's Objective</li>
                  <li>Audience's Objective</li>
                </ul>
              </li>
              <li>Personality and Tone</li>
              <li>Key Target Audience Insight</li>
              <li>Special Issues/ Problems Anticipated</li>
            </ul>
            <p>
              <i>
                This is a very long document, and most of them are the
                repetition of what I have mentioned above. If you are interested
                in reading more, click
                <a
                  href="https://docs.google.com/document/d/1hTselc6Zko0F0t4M1B1ZBHmVyeJaNvK3bZKemiOJvbk/edit?usp=sharing"
                  target="_blank"
                >
                  {" "}
                  here.
                </a>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={22} offset={1}>
            <h2>Final prototyle. Check it out!</h2>
          </Col>
        </Row>
        <Row className="section-content">
          <Col span={20} offset={2}>
            <p>
              Based on our creative brief, we made a Development plan,{" "}
              <a
                href="https://www.figma.com/proto/Vi0rT7eSTMWS0QST3GDqfy3q/Momma-Fung-Wireframes?scaling=contain&node-id=1%3A2"
                target="_blank"
              >
                MOBILE Wireframe
              </a>{" "}
              and{" "}
              <a
                href="https://www.figma.com/proto/Vi0rT7eSTMWS0QST3GDqfy3q/Momma-Fung-Wireframes?node-id=54%3A295&scaling=contain"
                target="_blank"
              >
                DESKTOP Wireframe
              </a>
              .
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MommafungModal;
