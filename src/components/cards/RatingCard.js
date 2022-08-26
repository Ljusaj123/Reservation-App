import React from "react";

export const RatingCard = ({ props }) => {
  const { name, imgURL, price, city, rating, grade } = props;
  return (
    <div className="cards-list__item">
      <img src={imgURL} alt={name} className="cards-list__item-img" />
      <h3 className="cards-list__item-name">{name}</h3>
      <p className="cards-list__item-city">{city}</p>
      <p className="cards-list__item-price">{price}</p>
      <div className="cards-list__item-rating">
        <button className="button__rating">{rating}</button>
        <span>{grade}</span>
      </div>
    </div>
  );
};
