import React from "react";

import NavBar from "../components/navBar";
import Project from "./Project";
import logo from "../images/product-image.png";

import "../style/home.css";

const Homepage = () => {
  const INFO = {
    projects: [
      {
        title: "أهداءات صوتية",
        description:
          "إهداءات صوتية لمن تحب",
        logo: "https://freepngtransparent.com/wp-content/uploads/2023/03/Microphone-Png-171.png",
        linkText: "إطلب",
        link: "/checkout",
      },
      {
        title: "أهداءات صوتية",
        description:
          "إهداءات صوتية لمن تحب",
        logo: "https://freepngtransparent.com/wp-content/uploads/2023/03/Microphone-Png-171.png",
        linkText: "إطلب",
        link: "/checkout",
      },
      {
        title: "أهداءات صوتية",
        description:
          "إهداءات صوتية لمن تحب",
        logo: "https://freepngtransparent.com/wp-content/uploads/2023/03/Microphone-Png-171.png",
        linkText: "إطلب",
        link: "/checkout",
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container"></div>

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  مع جبران
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper">
                    <img src={logo} alt="about" className="homepage-image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="homepage-projects">
              <div className="all-projects-container">
                {INFO.projects.map((project, index) => (
                  <div className="all-projects-project" key={index}>
                    <Project
                      logo={project.logo}
                      title={project.title}
                      description={project.description}
                      linkText={project.linkText}
                      link={project.link}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
