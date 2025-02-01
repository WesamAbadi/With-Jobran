import React from "react";
import "../assets/styles/cta.css";

const Button84 = ({ children, onClick }) => {
  return (
    <button className="button-84" onClick={onClick} role="button">
      {children}
    </button>
  );
};

export default Button84;
