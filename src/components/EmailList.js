import React from "react";

export const EmailList = () => {
  return (
    <div className="email">
      <div className="container">
        <h2>Save time, save money!</h2>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="email__input-container">
          <input type="email" placeholder="Enter email" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
