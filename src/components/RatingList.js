import React from "react";
import { RatingCard } from "./cards/RatingCard";

export const RatingList = ({ props }) => {
  return (
    <div className="cards-list">
      {props.map((item, index) => {
        return <RatingCard props={item} key={index} />;
      })}
    </div>
  );
};
