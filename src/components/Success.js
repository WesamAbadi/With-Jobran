import React from "react";
import "../style/success.css";

const Success = () => {
  return (
    <div className="success-container">
      <h1 className="success-heading">Success</h1>
      <h2 className="success-message">Thank you for your purchase!</h2>
      <a href="/">Return Home</a>
    </div>
  );
};

export default Success;
