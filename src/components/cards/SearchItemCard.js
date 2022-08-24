import React from "react";

export const SearchItemCard = () => {
  return (
    <div className="search-item">
      <img src="/images/dublin.jpg" alt="" className="search-item__img" />
      <div className="search-item__desc">
        <h3 className="search-item__title">Tower Street Apartments</h3>
        <p className="search-item__distance">500m from center</p>
        <p className="search-item__taxiOp">Free airport taxi</p>
        <p className="search-item__subtitle">
          Studio Apartment with Air conditioning
        </p>
        <span className="search-item__features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="search-item__cancelOp">Free cancellation </span>
        <span className="search-item__cancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="search-item__details">
        <div className="search-item__rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="search-item__detailTexts">
          <p className="search-item__price">$112</p>
          <span className="search-item__taxOp">Includes taxes and fees</span>
          <button className="search-item__checkButton">See availability</button>
        </div>
      </div>
    </div>
  );
};
