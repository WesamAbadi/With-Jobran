import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/navBar.css";

const NavBar = () => {
  const location = useLocation();
  const active = location.pathname;
  console.log(active);
  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li className={active === "/" ? "nav-item active" : "nav-item"}>
                <Link to="/">الرئيسية</Link>
              </li>
              <li
                className={active === "/about" ? "nav-item active" : "nav-item"}
              >
                <Link to="/about">من نحن</Link>
              </li>
              <li
                className={
                  active === "/contact" ? "nav-item active" : "nav-item"
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
