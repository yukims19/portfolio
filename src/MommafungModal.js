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
              This unique street-food vendor, MommaFung, that harnesses the
              essence of unicorn food needs to be discoverable by all the
              instagram food influencers and picky eaters. We tell you why
              Mommafung would be your first choice and where you can catch them.
              <br />
            </p>
          </Col>
        </Row>
        <a
          href="http://yoshili.com/Moma_Fungs.github.io/index.html"
          target="_blank"
        >
          <Button type="primary" className="overview-btn">
            Open the Website
          </Button>
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
              Katie started MommaFung, the steamed bun vendor business, because
              she loved her mom’s buns and thought it was so tasty that it
              should be shared with others. While Starbucks Unicorn drink
              marketing campaign was causing a huge fever of rainbow food all
              over the world, she decided to take advantage of that wave and
              create a unique “unicorn” steamed bun business.
            </p>
            <p>
              Their business brand is <strong>Cute</strong>,
              <strong> Modest</strong>, and <strong>Thankful</strong>. Having a
              bun in mommafung is not only about making your stomach full, but
              more importantly, the experience of enjoying the look and the
              taste of the food, witnessing the process the bun is made one by
              one by hand, and sharing this excitement with your people.
            </p>
            <p>
              <i>
                {" "}
                Our detailed meeting summary and analysis can be accessed
                through
                <a href="https://docs.google.com/document/d/1LF2dC9u6YSdTlyFsY1Edwpx7lOZJE34WIr-CkgPQaKg/edit?usp=sharing">
                  {" "}
                  here.
                </a>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={22} offset={1}>
            <h2>Who are the users (people who will visite the webpage)?</h2>
          </Col>
        </Row>
        <Row className="section-content">
          <Col span={20} offset={2}>
            <p>
              In order to better understand our user, we interviewed the
              customers of MommaFung and summarized the interview results into
              three personals. While we originally expected that our users will
              be limited to young adults who love sharing food picture on the
              social media, during the interview, we realized that many people
              are actually also attracted by the Steam that is produced when
              buns are cooked, and they enjoy watching the process that the bun
              is made. Some people also simply enjoy the taste because it is so
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
              kinds of users listed above, and developed a Features &
              Functionality Table to cover those user needs.
            </p>
            <p>
              <i>
                Details can be accessed through
                <a href="https://docs.google.com/document/d/1zopXHcXaYxlprxHJv8hkuImWKTQcA-YrNZpTwvUxRDM/edit?usp=sharing">
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
              from 6 different aspects: branding, functionality, content, site
              architecture, navigation, and design. Then, we summarized the
              fundings and made a list of takeaways for our website.
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
                    The address will link to google map navigation, which allows
                    user to easily find the way to access the place
                  </li>
                  <li>
                    The text and section buttons are big and easy to click,
                    which works well for both Desktop and Mobile view.
                  </li>
                </ul>
              </Col>
            </Row>

            <p>
              Another example is Rainbow Bagel. Their website is conveying their
              brand very wisely:
            </p>
            <Row className="example-block">
              <Col span={16} offset={4}>
                <img src={rainbowBagelMakingVideo} alt="Hi-Point Nav" />
              </Col>
              <Col span={16} offset={4}>
                <ul>
                  <li>
                    Rainbow Bagel included their making process as a video. This
                    demonstrates the hard work and effort put into the food,
                    providing an insight into the people behind the product and
                    allowing the customers to connect on a deeper level with the
                    brand, the people, and the food.
                  </li>
                </ul>
              </Col>
            </Row>

            <p>
              Through the process of analyzing the competitor websites, we
              developed a sense of what are the “Goods” and “Bads” that are
              specific to the vendor food industry. For example, food vendors
              are different from the traditional restaurants that they do not
              have much dish variety in menu, but they have random opening hours
              and pop up locations. With the uniqueness of the vendor’s business
              style in mind, we developed a Moodboard that will fit MommaFung’s
              brand.
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
                <a href="https://docs.google.com/presentation/d/1sjPY7IY2sTaBJA0ragfKe_ckGY2-O053beE2ND5dir4/edit?usp=sharing">
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
              Now we have the higher level image. Let’s get into details on how
              we will tackle this.
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
                  <li>Page contents</li>
                  <li>Total program size</li>
                </ul>
              </li>
              <li>
                Audience
                <ul>
                  <li>Returning customer</li>
                  <li>Potential customer</li>
                  <li>Photographers, Instagrammers, Foodies</li>
                </ul>
              </li>
              <li>
                Objectives
                <ul>
                  <li>MommaFung's objective</li>
                  <li>Audience's objective</li>
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
                <a href="https://docs.google.com/document/d/1hTselc6Zko0F0t4M1B1ZBHmVyeJaNvK3bZKemiOJvbk/edit?usp=sharing">
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
              <a href="https://www.figma.com/proto/Vi0rT7eSTMWS0QST3GDqfy3q/Momma-Fung-Wireframes?scaling=contain&node-id=1%3A2">
                MOBILE Wireframe
              </a>{" "}
              and{" "}
              <a href="https://www.figma.com/proto/Vi0rT7eSTMWS0QST3GDqfy3q/Momma-Fung-Wireframes?node-id=54%3A295&scaling=contain">
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
