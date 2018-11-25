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
                        : "design-project "
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
                    <div className="project-wrapper extra">
                        <Card
                            className="project-overview-card extra"
                            cover={
                                <div>
                                    <img alt="crunchfield" src={crunchfield} />
                                    <div className="hover-cover">
                                        <p>
                                            This is a usability analysis project on the site - Crunchfield. We used Nielsen's 10 heuristics to assess the usability of the site on both desktop and mobile site.
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
                                title="Music Playlist"
                                description="Usability Analysis - Fall 2017"
                            />
                        </Card>
                        <Card
                            className="project-overview-card extra"
                            cover={
                                <div>
                                    <img alt="music playlist" src={musicPlaylist} />
                                    <div className="hover-cover">
                                        <p>
                                            This is a prototye for mobile platforms that supports music stream that focuses on redesigning the process of constructing and managing the playlists based on existing major stream apps.
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
                                description="Prototype - Fall 2017"
                            />
                        </Card>

                    </div>
                    <div className="project-wrapper">
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
                            className="project-overview-card"
                            cover={
                                <div>
                                    <img alt="homeie" src={homeie} />
                                    <div className="hover-cover">
                                        <p>
                                            This is a web app that helps housemates track their responsibilities with statistics that provides a way to show what has been done, what needs to be done, and how much each individual has contributed. 
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
                                            This is a chrome extension that will find a person’s GitHub, Youtube, Twitter and other general information based on a link provided. 
                                        </p>
                                        <a href="https://github.com/yukims19/oneprofile" target='_blank'>
                                            <button>
                                                Try it
                                            </button>
                                        </a>
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
                                            This is a web app that enables users to request star or star for specified GitHub Repositories.
                                        </p>
                                        <a href="https://www.pleasestarme.com/" target='_blank'>
                                            <button>
                                                Try it
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            }
                            hoverable={true}
                        >
                            <Meta title="PleaseStarMe" description="Web App -  Fall 2018" />
                        </Card>

                    </div>
                    <div className="project-wrapper extra">
                        <Card
                            className="project-overview-card extra"
                            cover={
                                <div>
                                    <img alt="nuclearSub" src={nuclearSub} />
                                    <div className="hover-cover">
                                        <p>
                                            This is a web app that enables users to unsubscribe from all the unwanted emails.
                                        </p>
                                        <a href="https://github.com/yukims19/Nuclear-sub" target='_blank'>
                                            <button>
                                                Try it
                                            </button>
                                        </a>

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
