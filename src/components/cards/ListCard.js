import React from "react";

export const ListCard = ({ props }) => {
  const { name, count, imageUrl } = props;
  return (
    <div className="cards-list__item">
      <img src={imageUrl} alt={name} className="cards-list__item-img" />
      <div className="cards-list__item-titles">
        <h3>{name}</h3>
        <p>{`${count} properties`}</p>
      </div>
    </div>
  );
};
