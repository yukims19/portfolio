import React, { Component } from "react";
import mommafung from "./img/mommafung.jpg";
import musicPlaylist from "./img/music-playlist.png";
import homeie from "./img/homeie.png";
import crunchfield from "./img/crunchfield.png";
import rightArrow from "./img/right-arrow.png";
import leftArrow from "./img/left-arrow.png";
import { Modal, Button, Card, Icon } from "antd";

const mommafungModal = <div> mommafungModal</div>;
const idasher = <div> idasher</div>;
const { Meta } = Card;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isDesignExpand: false,
      isCodeExpand: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleClose = e => {
    console.log(e);
    this.setState({
      visible: false
    });
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
                cover={<img alt="crunchfield" src={crunchfield} />}
                hoverable={true}
              >
                <Meta
                  title="Home.ie"
                  description="Mobile Web App - Wifnter 2018"
                />
              </Card>
              <Card
                className="project-overview-card"
                cover={<img alt="example" src={mommafung} />}
                hoverable={true}
              >
                <Meta title="MonnaFung" description="Website - Winter 2018" />
              </Card>
              <Card
                className="project-overview-card extra"
                cover={<img alt="music playlist" src={musicPlaylist} />}
                hoverable={true}
              >
                <Meta
                  title="Home.ie"
                  description="Mobile Web App - Wifnter 2018"
                />
              </Card>
              <Card
                className="project-overview-card"
                cover={<img alt="homeie" src={homeie} />}
                hoverable={true}
              >
                <Meta
                  title="Home.ie"
                  description="Mobile Web App - Wifnter 2018"
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
                cover={<img alt="example" src={mommafung} />}
                hoverable={true}
              >
                <Meta title="MonnaFung" description="Website - Winter 2018" />
              </Card>
              <Card
                className="project-overview-card"
                cover={<img alt="homeie" src={homeie} />}
                hoverable={true}
              >
                <Meta
                  title="Home.ie"
                  description="Mobile Web App - Wifnter 2018"
                />
              </Card>
              <Card
                className="project-overview-card extra"
                cover={<img alt="crunchfield" src={crunchfield} />}
                hoverable={true}
              >
                <Meta
                  title="Home.ie"
                  description="Mobile Web App - Wifnter 2018"
                />
              </Card>
              <Card
                className="project-overview-card extra"
                cover={<img alt="music playlist" src={musicPlaylist} />}
                hoverable={true}
              >
                <Meta
                  title="Home.ie"
                  description="Mobile Web App - Wifnter 2018"
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
          title="mommafung"
          visible={this.state.visible}
          onCancel={this.handleClose}
          footer={<Button type="primary"> Close</Button>}
        >
          {mommafungModal}
        </Modal>
      </section>
    );
  }
}

export default Project;
