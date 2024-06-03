import React from "react";
import { Link } from "react-router-dom";
import "../style/navBar.css"

const NavBar = (props) => {
  const { active } = props;

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li
                className={active === "home" ? "nav-item active" : "nav-item"}
              >
                <Link to="/">الرئيسية</Link>
              </li>
              <li
                className={active === "about" ? "nav-item active" : "nav-item"}
              >
                <Link to="/about">من نحن</Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/projects">خدمات</Link>
              </li>
              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/contact">تواصل معنا</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
