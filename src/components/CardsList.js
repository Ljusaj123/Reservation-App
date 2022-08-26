import React from "react";
import { ListCard } from "./cards/ListCard";

export const CardsList = ({ props }) => {
  return (
    <div className="cards-list">
      {props.map((item) => {
        return <ListCard props={item} />;
      })}
    </div>
  );
};
