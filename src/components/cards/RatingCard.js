import React from "react";

export const RatingCard = ({ props }) => {
  const { name, imgURL, price, city, rating, grade } = props;
  return (
    <div className="home-list__item">
      <img src={imgURL} alt={name} className="home-list__item-img" />
      <h3 className="home-list__item-name">{name}</h3>
      <p className="home-list__item-city">{city}</p>
      <p className="home-list__item-price">{price}</p>
      <div className="home-list__item-rating">
        <button>{rating}</button>
        <span>{grade}</span>
      </div>
    </div>
  );
};
