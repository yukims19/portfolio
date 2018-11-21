import React, { Component } from "react";
import mommafung from "./img/mommafung.jpg";
import musicPlaylist from "./img/music-playlist.png";
import homeie from "./img/homeie.png";
import crunchfield from "./img/crunchfield.png";
import oneProfile from "./img/oneProfile.png";
import pleaseStarMe from "./img/pleaseStarMe.png";
import nuclearSub from "./img/nulcearSub.png";
import rightArrow from "./img/right-arrow.png";
import leftArrow from "./img/left-arrow.png";
import { Modal, Button, Card, Icon } from "antd";
import MommafungModal from "./MommafungModal";
import HomeieModal from "./HomeieModal";

//const mommafungModal = mommafungModal;
//const idasher = <div> idasher</div>;
const { Meta } = Card;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isDesignExpand: false,
      isCodeExpand: false,
      content: null
    };
  }

  showModal = content => {
    this.setState({
      content,
      visible: true
    });
  };

  handleClose = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  displayModalContent = () => {
    switch (this.state.content) {
      case "mommafung":
        return <MommafungModal />;
      case "homeie":
        return <HomeieModal />;
      default:
        return "Error";
    }
  };

  expandToggle(value) {
    if (value === "design") {
      this.setState({
        isCodeExpand: false,
        isDesignExpand: true
      });
    } else if (value === "code") {
      this.setState({
        isDesignExpand: false,
        isCodeExpand: true
      });
    }
  }

  collapseExpand() {
    this.setState({
      isDesignExpand: false,
      isCodeExpand: false
    });
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <section className="project">
        {this.state.isDesignExpand || this.state.isCodeExpand ? (
          <div className="project-expand-background" />
        ) : null}

        <h1 className="section-title">Recent Projects</h1>
        <div className="recent-project">
          <div
            className={
              this.state.isDesignExpand
                ? "design-project expand"
                : "design-project"
            }
            tabIndex="0"
            onBlur={() => this.collapseExpand()}
          >
            <div
              className="more-projects-btn"
              onClick={() => this.expandToggle("design")}
            >
              <img src={rightArrow} alt="right arrow" />
              <p>More Design Projects</p>
            </div>
            <div className="project-wrapper">
              <Card
                className="project-overview-card extra"
                cover={
                  <div>
                    <img alt="crunchfield" src={crunchfield} />
                    <div className="hover-cover">
                      <p>
                        This is a professional website for Momma Fung & Co,
                        which is a food vendor that sells unicorn buns.
                      </p>
                      <button onClick={() => this.showModal("mommafung")}>
                        Details
                      </button>
                    </div>
                  </div>
                }
                hoverable={true}
              >
                <Meta
                  title="Home.ie"
                  description="Mobile Web App - Winter 2018"
                />
              </Card>
              <Card
                className="project-overview-card"
                cover={
                  <div>
                    <img alt="example" src={mommafung} />
                    <div className="hover-cover">
                      <p>
                        This is a professional website for Momma Fung & Co,
                        which is a food vendor that sells unicorn buns.
                      </p>
                      <button onClick={() => this.showModal("mommafung")}>
                        Details
                      </button>
                    </div>
                  </div>
                }
                hoverable={true}
              >
                <Meta title="MonnaFung" description="Website - Winter 2018" />
              </Card>
              <Card
                className="project-overview-card extra"
                cover={
                  <div>
                    <img alt="music playlist" src={musicPlaylist} />
                    <div className="hover-cover">
                      <p>
                        This is a professional website for Momma Fung & Co,
                        which is a food vendor that sells unicorn buns.
                      </p>
                      <button onClick={() => this.showModal("mommafung")}>
                        Details
                      </button>
                    </div>
                  </div>
                }
                hoverable={true}
              >
                <Meta
                  title="Home.ie"
                  description="Mobile Web App - Winter 2018"
                />
              </Card>
              <Card
                className="project-overview-card"
                cover={
                  <div>
                    <img alt="homeie" src={homeie} />
                    <div className="hover-cover">
                      <p>
                        This is a professional website for Momma Fung & Co,
                        which is a food vendor that sells unicorn buns.
                      </p>
                      <button onClick={() => this.showModal("mommafung")}>
                        Details
                      </button>
                    </div>
                  </div>
                }
                hoverable={true}
                onClick={() => this.showModal("homeie")}
              >
                <Meta
                  title="Home.ie"
                  description="Mobile Web App - Winter 2018"
                />
              </Card>
            </div>
          </div>
          <div className="segregator" />
          <div
            className={
              this.state.isCodeExpand
                ? "coding-project expand"
                : "coding-project"
            }
            tabIndex="0"
            onBlur={() => this.collapseExpand()}
          >
            <div className="project-wrapper">
              <Card
                className="project-overview-card"
                cover={
                  <div>
                    <img alt="OneProfile" src={oneProfile} />

                    <div className="hover-cover">
                      <p>
                        This is a professional website for Momma Fung & Co,
                        which is a food vendor that sells unicorn buns.
                      </p>
                      <button onClick={() => this.showModal("mommafung")}>
                        Try it
                      </button>
                    </div>
                  </div>
                }
                hoverable={true}
              >
                <Meta
                  title="OneProfile"
                  description="Chrome Extension - Summer 2018"
                />
              </Card>
              <Card
                className="project-overview-card"
                cover={
                  <div>
                    <img alt="pleaseStarMe" src={pleaseStarMe} />
                    <div className="hover-cover">
                      <p>
                        This is a professional website for Momma Fung & Co,
                        which is a food vendor that sells unicorn buns.
                      </p>
                      <button onClick={() => this.showModal("mommafung")}>
                        Try it
                      </button>
                    </div>
                  </div>
                }
                hoverable={true}
              >
                <Meta title="PleaseStarMe" description="Web App -  Fall 2018" />
              </Card>
              <Card
                className="project-overview-card extra"
                cover={
                  <div>
                    <img alt="nuclearSub" src={nuclearSub} />
                    <div className="hover-cover">
                      <p>
                        This is a professional website for Momma Fung & Co,
                        which is a food vendor that sells unicorn buns.
                      </p>
                      <button onClick={() => this.showModal("mommafung")}>
                        Try it
                      </button>
                    </div>
                  </div>
                }
                hoverable={true}
              >
                <Meta title="NuclearSub" description="Web App - Fall 2018" />
              </Card>
              <Card
                className="project-overview-card extra"
                cover={<img alt="music playlist" src={musicPlaylist} />}
                hoverable={true}
              >
                <Meta
                  title="Home.ie"
                  description="Mobile Web App - Winter 2018"
                />
              </Card>
            </div>
            <div
              className="more-projects-btn"
              onClick={() => this.expandToggle("code")}
            >
              <img src={leftArrow} alt="left arrow" />
              <p>More Design Projects</p>
            </div>
          </div>
        </div>

        <Modal
          visible={this.state.visible}
          footer={null}
          closable={false}
          width="100vw"
          style={{
            height: "100vh"
          }}
          className="project-detail-modal"
        >
          <div className="back-btn" onClick={this.handleClose}>
            <Icon type="left" />
            Back
          </div>
          {this.displayModalContent()}
        </Modal>
      </section>
    );
  }
}

export default Project;
