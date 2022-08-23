import React from "react";

export const RatingCard = ({ props }) => {
  const { name, imgURL, price, city, rating, grade } = props;
  return (
    <div className="home-list__item">
      <img src={imgURL} alt={name} className="home-list__item-img" />
      <span className="home-list__item-name">{name}</span>
      <span className="home-list__item-city">{city}</span>
      <span className="home-list__item-price">{price}</span>
      <div className="home-list__item-rating">
        <button>{rating}</button>
        <span>{grade}</span>
      </div>
    </div>
  );
};
