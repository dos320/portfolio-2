import React from "react";
import { Parallax, Background } from "react-parallax";
import ProjectBox from "./ProjectBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hideButtons: false
    };
    this.getCurrentTimeOfDay = this.getCurrentTimeOfDay.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    //console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 300) {
      this.setState({
        hideButtons: true
      });
    } else {
      this.setState({
        hideButtons: false
      });
    }
    //console.log(this.state.hideButtons)
  }

  getCurrentTimeOfDay() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();

    if (currentHours >= 6 && currentHours < 12) {
      return "morning";
    } else if (currentHours >= 12 && currentHours < 17) {
      return "afternoon";
    } else if (currentHours >= 17 && currentHours < 21) {
      return "evening";
    } else {
      return "night";
    }
  }

  render() {
    let imageURL = "";
    let textboxStyle = {};
    if (this.getCurrentTimeOfDay() === "morning") {
      imageURL =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Hazy_Crazy_Sunrise.jpg/1280px-Hazy_Crazy_Sunrise.jpg";
      textboxStyle = { backgroundColor: "rgba(242, 150, 75, 0.4)" };
    } else if (this.getCurrentTimeOfDay() === "afternoon") {
      imageURL =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg/1920px-Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg";
      textboxStyle = { backgroundColor: "rgba(2, 111, 166, 0.4)" };
    } else if (this.getCurrentTimeOfDay() === "evening") {
    } else {
    
    }

    return (
      <div className="App">
        <Parallax
          blur={10}
          bgImage={imageURL}
          bgImageAlt="mountains"
          strength={600}
        >
          <div
            style={{
              height: "100%",
              paddingBottom: "100px",
              position: "relative"
            }}
            className="App__layer App__layer--base"
          >
            <h1>test</h1>
            <div style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
              {this.state.hideButtons ? (
                <button
                  className="home-button visible"
                  style={{
                    position: "fixed",
                    left: "20px",
                    height: "40px",
                    border: "1px solid white",
                    borderRadius: "40px"
                  }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="./home.png"
                    alt="home"
                  />
                </button>
              ) : (
                <button
                  className="home-button invisible"
                  style={{
                    position: "fixed",
                    left: "20px",
                    height: "40px",
                    border: "1px solid white",
                    borderRadius: "40px"
                  }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="./home.png"
                    alt="home"
                  />
                </button>
              )}
              <button
                className="headerButtons"
                type="button"
                onClick={() =>
                  document.getElementById("about-me").scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start"
                  })
                }
              >
                About Me
              </button>
              <button
                className="headerButtons"
                type="button"
                onClick={() =>
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start"
                  })
                }
              >
                Projects
              </button>
              <button
                className="headerButtons"
                type="button"
                onClick={() =>
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start"
                  })
                }
              >
                Contact
              </button>
            </div>

            <h2>Good {this.getCurrentTimeOfDay()}!</h2>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div
              className="infoboxes about-me-textbox"
              id="about-me"
              style={textboxStyle}
            >
              <h3 style={{ textAlign: "center" }}>About me</h3>
              <p style={{ textAlign: "center" }}>About me</p>
            </div>

            <div
              className="infoboxes projects-textbox"
              id="projects"
              style={textboxStyle}
            >
              <h3 style={{ textAlign: "center" }}>Projects</h3>
              <p style={{ textAlign: "center" }}>Projects</p>
              <ProjectBox
                text="test project 1"
                link="https://google.com"
                image="https://www.fillmurray.com/460/300"
              />
              <ProjectBox
                text="test project 2"
                link="https://google.com"
                image="https://www.fillmurray.com/284/196"
              />
              <ProjectBox
                text="test project 3"
                link="https://google.com"
                image="https://www.fillmurray.com/284/196"
              />
              <ProjectBox
                text="test project 4"
                link="https://google.com"
                image="https://www.fillmurray.com/284/196"
              />
              <ProjectBox
                text="test project 5"
                link="https://google.com"
                image="https://www.fillmurray.com/284/196"
              />
            </div>

            <div
              className="infoboxes contact-textbox"
              id="contact"
              style={textboxStyle}
            >
              <h3 style={{ textAlign: "center" }}>Contact</h3>
              <p style={{ textAlign: "center" }}>Contact</p>
              <div className="contact-textbox-images">
                <img
                  className="linkedin-img"
                  style={{
                    paddingRight: "10px",
                    width: "100px",
                    height: "auto"
                  }}
                  src="./linkedin.png"
                  alt="LinkedIn"
                />
                <img
                  className="github-img"
                  style={{
                    paddingLeft: "10px",
                    width: "100px",
                    height: "auto"
                  }}
                  src="./github.png"
                  alt="GitHub"
                />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default App;
