import React from "react";
import { useNavigate } from "react-router-dom";

export const RatingCard = ({ props }) => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/hotels/${_id}`, { state: {} });
  };
  const { name, photos, cheapestPrice, city, rating, _id } = props;
  return (
    <div className="cards-list__item">
      <img
        src={photos[0]}
        alt={name}
        className="cards-list__item-img"
        onClick={() => handleSearch()}
      />
      <h3 className="cards-list__item-name">{name}</h3>
      <p className="cards-list__item-city">{city}</p>
      <p className="cards-list__item-price">Starting from {cheapestPrice}$</p>
      {rating && (
        <div className="cards-list__item-rating">
          <button className="button__rating">{rating}</button>
        </div>
      )}
    </div>
  );
};
