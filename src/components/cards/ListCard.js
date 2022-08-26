import React from "react";

export const ListCard = ({ props }) => {
  const { name, imgURL, propNumber } = props;
  return (
    <div className="cards-list__item">
      <img src={imgURL} alt={name} className="cards-list__item-img" />
      <div className="cards-list__item-titles">
        <h3>{name}</h3>
        <p>{`${propNumber} properties`}</p>
      </div>
    </div>
  );
};
