import React, { Component } from "react";
import "./Modal.scss";
import storyboard1 from "./img/storyboard1.png";
import storyboard2 from "./img/storyboard2.png";
import storyboard3 from "./img/storyboard3.png";
import prototype1 from "./img/paper1.jpg";
import prototype2 from "./img/paper2.jpg";
import prototype3 from "./img/paper3.jpg";
import prototype4 from "./img/paper4.jpg";
import prototype5 from "./img/paper5.jpg";
import prototype6 from "./img/paper6.jpg";
import user1a from "./img/user1a.png";
import user1b from "./img/user1b.png";
import user2 from "./img/user2.png";
import poster from "./img/homeie-poster.jpg";

const HomeieModal = () => {
  return (
    <div className="homeie-modal modal-wrapper">
      <div className="overview">
        <h1 className="modal-title">Home.ie</h1>
        <p>
          This is a web app that helps housemates track their responsibilities
          with statistics that provides a way to show what has been done, what
          needs to be done, and how much each individual has contributed. (Group
          project)
          <br />
          <strong>My Major Role: Front-end Design & Programming</strong>
        </p>
        <p>
          <strong>
            <a href="https://home-ie.herokuapp.com/">
              Click here to open the Web App
            </a>
          </strong>{" "}
          (*Please open it in a mobile view.)
        </p>
      </div>
      <div className="modal-section-segregator">
        <hr />
        <p className="modal-section-title"> Working Process </p>
        <hr />
      </div>
      <div className="modal-section">
        <h2>~Problem Statment~</h2>
        <p>
          Living in a home environment can be difficult if proper effort and
          maintenance is not put into place. Sometimes living with friends or
          peers can make communication and confrontation difficult, fearful of
          hurting feelings and causing animosity.
        </p>

        <h2>1. Prototyping</h2>
        <h3>a) Observation</h3>
        <p>
          We made some observations and interviewed students with roommates
          about their current cleaning habits. We found that most people wanted
          to live in fair and clean environment but were uncomfortable
          confronting others or delegating tasks. Additionally we found that
          people wanted to be doing an equal amount of work and those who were
          bothered by their roommates felt they were always doing more.
        </p>
        <h3>b) Storyboard</h3>
        <p>
          Base on the problems given, we made three Storyboards to address
          different user needs.
        </p>
        <div className="storyboard flex-container">
          <div>
            <img src={storyboard1} />
          </div>
          <div>
            <img src={storyboard2} />
          </div>
          <div>
            <img src={storyboard3} />
          </div>
        </div>
        <h3>c) Paper Prototype</h3>
        <p>
          Based on the storyboard, we made two paper prototypes. In the
          prototypes, we included the important UI elements, but not the details
          about color, fonts and alignment.
        </p>

        <p class="example">#1</p>
        <div className="prototype flex-container">
          <div>
            <img src={prototype1} />
          </div>
          <div>
            <img src={prototype2} />
          </div>
          <div>
            <img src={prototype3} />
          </div>
        </div>
        <p class="example">#2</p>
        <div className="prototype flex-container">
          <div>
            <img src={prototype4} />
          </div>
          <div>
            <img src={prototype5} />
          </div>
          <div>
            <img src={prototype6} />
          </div>
        </div>

        <h3>c) Video Prototype</h3>
        <p>
          We created on a 1-minute video prototype that demonstrates a scenario
          where our app might be used and the potential users that might use it.
        </p>
        <h3>
          <a href="https://youtu.be/N67aKIpWXeM">
            The video is very fun! Click here to watch it
          </a>
        </h3>
        <h3>d) Heuristic Evaluation</h3>
        <p>
          Through the evaluation, people were willing to criticize our paper
          prototype, and we got some very useful insights on the flows. For
          example, we tried to include all the chore cards and graphs on the
          homepage to reduce the clicks that users need to make. However, it
          turned out that there were too much information, which is confusing
          users about what they should look at or do.
        </p>
        <h4>
          Here is the list of changes we decided to make based on the feedback
          form the evaluators:
        </h4>
        <ul>
          <li>More efficient sign-in methods (include facebook, etc)</li>
          <li>
            Present less information on the home page (only tasks without
            graphs, or only one task per page)
          </li>
          <li>
            Add functions of showing pictures for both bought item receipt and
            house conditions.
          </li>
          <li>Add confirmation after users pressing “done”</li>
          <li>Think more carefully about the notification system</li>
          <li>
            Add some more description to tell user what they can do in this app
          </li>
          <li>
            Need to add a system to evaluate the quantity and the quality of the
            task (time, dirtiness, etc)
          </li>
        </ul>

        <h2>~Programming~</h2>
        <p>
          After the prototype, we made a development plan and started coding the
          app using node.js. We used JSON data to customize the pages, and we
          also embedded Facebook Login, real time graph, forms for creating new
          chore and shopping, retrieving old tasks and etc.
          <a href="https://home-ie.herokuapp.com/">
            {" "}
            To see the full app, click here
          </a>
          . **Please use the app in a mobile view.
        </p>

        <h2>~User Testing~</h2>
        <p>
          We tested with UCSD students who are living in a shared home
          environment. These people are our main user base since many college
          and grad students have to deal with living with roommates in their own
          houses often for the first times in their lives. We envision these
          people using our app the most to set rules and organize themselves in
          a truly fair way.
        </p>

        <h3>User #1</h3>
        <div className="flex-container user-research">
          <div>
            <img src={user1a} />
          </div>
          <div>
            <img src={user1b} />
          </div>
        </div>
        <p className="caption">
          <i>
            {" "}
            Actions: User double clicked on the done button, so he accidentally
            clicked on the revive button, which brought the task back. He needed
            to click on the done button again to disable to chore, but ended up
            adding two points instead of one.
          </i>
        </p>
        <h3>User #2</h3>
        <div className="flex-container user-research">
          <div>
            <img src={user2} />
          </div>
          <p className="caption">
            <i>
              Actions: After user open the app, it took her 5 seconds to
              initiate an action because she could not tell what is the app
              about and what she can do on the screen. She also could not
              identify what are the clickables on the screen. She had a hard
              time identifying the expand button that will show the graphs under
              each chore cards.
            </i>{" "}
          </p>
        </div>
        <h3>General Findings:</h3>
        <ul>
          <li>
            There was some difficulty finding the stats page in both testing
            sessions. This could most likely explained by the lack of button
            like look of the current statistics button. Both subjects had
            trouble with the discoverability of that portion of the page.
          </li>
          <li>
            We seem to be lacking a type of immediate response or results from
            completing tasks within the app. Or it may seem not obvious at first
            that clicking done on the task or expense will lead to some type of
            tabulation or collection of data. Both subjects took some time to
            find the stats page and even abused some of the functions of the app
            by repeatedly ‘reviving’ a task and repeatedly clicking ‘done’.
          </li>
          <li>
            Our app is heavily reliant on internet speed and connection. This
            could be problematic if the connection strength is less than ideal.
            As evident in our testing inside Geisel Library during peak hours.
            We had trouble logging in through a remote device and had to resort
            to using one of our devices.
          </li>
        </ul>

        <h2>~Final Poster~</h2>
        <img id="poster" src={poster} />
      </div>

      <div className="modal-section-segregator">
        <hr />
        <p className="modal-section-title"> Challenges & Takeaways </p>
        <hr />
      </div>
      <div className="modal-section">
        <h2>~Interviews~</h2>
        <p>
          The interviews provided us some insights about user needs. However, it
          was hard to detect what the real problems were. <br />
          For example, it was hard to tell what people were really stressed
          about their roommates.
          <strong>
            {" "}
            Did they had different definition of “clean”, which resulting
            unequal work distribution? Is the work distribution related to
            individual’s schedule? Or, are some people really doing more than
            others as they feel?{" "}
          </strong>{" "}
          Currently, our app is trying to provide subjective data to reveal the
          actual work distribution. However, these are the questions we
          definitely need to further explore to really solve the problem rather
          than just providing subjective reference.
        </p>
        <h2>~User Testing~</h2>
        <p>
          When we did user testing for the first version of our app, I had some
          very important lesson. Since we had very little time to finish this
          app, we really focused on making everything functional, but we did not
          pay much attention on the details of the layout of the components on
          the screen. However, it was those missed details led users to misusing
          or not noticing the functions we implemented. Therefore, after this
          user testing, we decided to split the work of front-end coding and
          back-end coding to make sure we are making progress parallely.{" "}
        </p>
      </div>
    </div>
  );
};

export default HomeieModal;
