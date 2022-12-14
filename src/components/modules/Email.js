import React from "react";

export const Email = () => {
  return (
    <div className="email">
      <div className="email-container container">
        <h2>Save time, save money!</h2>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="email__input-container">
          <input
            type="email"
            placeholder="email@gmail.com"
            className="input__email"
          />
          <button className="button__subscribe">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
