import React from "react";

import Project from "../components/Project";
import logo from "../assets/images/product-image.png";

import "../assets/styles/home.css";

const Homepage = () => {
  const INFO = {
    projects: [
      {
        title: "إهداءات صوتية",
        description: "إهداءات صوتية لمن تحب",
        logo: "https://freepngtransparent.com/wp-content/uploads/2023/03/Microphone-Png-171.png",
        linkText: "إطلب",
        link: "/checkout",
      },
      {
        title: "ألحان مخصصة",
        description: "ألحان موسيقية مخصصة",
        logo: "https://freepngtransparent.com/wp-content/uploads/2023/03/Microphone-Png-171.png",
        linkText: "إطلب",
        link: "/checkout",
      },
      {
        title: "قصائد شعرية",
        description: "قصائد شعرية مكتوبة خصيصاً",
        logo: "https://freepngtransparent.com/wp-content/uploads/2023/03/Microphone-Png-171.png",
        linkText: "إطلب",
        link: "/checkout",
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="content-wrapper">
          <div className="homepage-logo-container"></div>

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">مع جبران</div>
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
