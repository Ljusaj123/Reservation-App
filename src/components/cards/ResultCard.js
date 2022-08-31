import React from "react";
import { Link } from "react-router-dom";

export const ResultCard = ({ props }) => {
  const { _id, name, photos, cheapestPrice, rating, distance, desc } = props;

  return (
    <div className="result-item">
      <img src={photos[0]} alt="" className="result-item__img" />
      <div className="result-item__desc">
        <h3 className="result-item__title">{name}</h3>
        <p className="result-item__distance">${distance}m from center</p>
        <p className="result-item__taxiOp">Free airport taxi</p>
        <p className="result-item__subtitle">
          Studio Apartment with Air conditioning
        </p>
        <span className="result-item__features">{desc}</span>
        <span className="result-item__cancelOp">Free cancellation </span>
        <span className="result-item__cancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="result-item__details">
        {rating && (
          <div className="result-item__rating">
            <span>Excellent</span>
            <button className="button__rating">{rating}</button>
          </div>
        )}
        <div className="result-item__detailTexts">
          <h3 className="result-item__price">{cheapestPrice}$</h3>
          <span className="result-item__taxOp">Includes taxes and fees</span>
          <Link to={`${_id}`}>
            <button className="button__availability">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
