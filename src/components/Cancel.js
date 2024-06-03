import React from "react";
import "../style/cancel.css";

const Cancel = () => {
  return (
    <div className="cancel-container">
      <h1 className="cancel-heading">Cancel</h1>
      <h2 className="cancel-message">Your payment was canceled.</h2>
      <a href="/">Return Home</a>
    </div>
  );
};

export default Cancel;
