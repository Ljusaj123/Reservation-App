import React from "react";
import { useNavigate } from "react-router-dom";

export const RatingCard = ({ props }) => {
  const navigate = useNavigate();

  const { _id, name, photos, cheapestPrice, city, rating } = props;
  return (
    <div className="cards-list__item">
      <img
        src={photos[0]}
        alt={name}
        className="cards-list__item-img"
        onClick={() => navigate(`/hotels/${_id}`)}
      />
      <h3 className="cards-list__item-name">{name}</h3>
      <p className="cards-list__item-city">{city}</p>
      <p className="cards-list__item-price">Starting from {cheapestPrice}$</p>
      <div className="cards-list__item-rating">
        <button className="button__rating">{rating}</button>
      </div>
    </div>
  );
};
