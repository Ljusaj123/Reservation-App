import React from "react";
import { RatingCard } from "./cards/RatingCard";

export const HomeRating = ({ props }) => {
  return (
    <div className="home-list">
      {props.map((item) => {
        return <RatingCard props={item} />;
      })}
    </div>
  );
};
