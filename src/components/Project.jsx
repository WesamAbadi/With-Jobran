import React from "react";

import "../assets/styles/project.css";
import AnimatedButton from "./cta";

const Project = (props) => {
  const { logo, title, description, linkText, link } = props;

  return (
    <React.Fragment>
      <div className="project">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="project-container">
            <div className="project-logo">
              <img src={logo} alt="with jobran logo" />
            </div>
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
            <div className="project-link">
              <div className="project-link-icon"></div>

              <div className="project-link-text">{linkText}</div>
            </div>
            <div className="cta-btn-container">
            <AnimatedButton children="إحجز الآن" />
            </div>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Project;
