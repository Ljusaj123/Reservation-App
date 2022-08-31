import React from "react";
import { useNavigate } from "react-router-dom";

export const ListCard = ({ props }) => {
  const { name, count, imageUrl } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    var date = {
      startDate: new Date(),
      endDate: new Date(),
    };

    date = new Array(date);

    navigate("/hotels", { state: { destination: name, date } });
  };
  return (
    <div className="cards-list__item">
      <img
        src={imageUrl}
        alt={name}
        className="cards-list__item-img"
        onClick={handleClick}
      />
      <div className="cards-list__item-titles">
        <h3>{name}</h3>
        <p>{`${count} properties`}</p>
      </div>
    </div>
  );
};
