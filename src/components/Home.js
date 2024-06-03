import React, { useEffect } from "react";

import NavBar from "../components/navBar";
import Project from "./Project";
import logo from "../images/product-image.png"; // with import

import "../style/home.css";
// import "./styles/homepage.css";

const Homepage = () => {
  const INFO = {
    projects: [
      {
        title: "Project 1",
        description:
          "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
        linkText: "View Project",
        link: "https://github.com",
      },

      {
        title: "Project 2",
        description:
          "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com",
      },

      {
        title: "Project 3",
        description:
          "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
        linkText: "View Project",
        link: "https://github.com",
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
                  Profesional Voice Over{" "}
                </div>

                <div className="subtitle homepage-subtitle">desc </div>
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
