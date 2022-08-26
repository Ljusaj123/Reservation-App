import React from "react";

export const ResultCard = () => {
  return (
    <div className="result-item">
      <img src="/images/dublin.jpg" alt="" className="result-item__img" />
      <div className="result-item__desc">
        <h3 className="result-item__title">Tower Street Apartments</h3>
        <p className="result-item__distance">500m from center</p>
        <p className="result-item__taxiOp">Free airport taxi</p>
        <p className="result-item__subtitle">
          Studio Apartment with Air conditioning
        </p>
        <span className="result-item__features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="result-item__cancelOp">Free cancellation </span>
        <span className="result-item__cancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="result-item__details">
        <div className="result-item__rating">
          <span>Excellent</span>
          <button className="button__rating">8.9</button>
        </div>
        <div className="result-item__detailTexts">
          <h3 className="result-item__price">$112</h3>
          <span className="result-item__taxOp">Includes taxes and fees</span>
          <button className="button__availability">See availability</button>
        </div>
      </div>
    </div>
  );
};
