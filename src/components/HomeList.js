import React from "react";
import { ListCard } from "./cards/ListCard";

export const HomeList = ({ props }) => {
  return (
    <div className="home-list">
      {props.map((item) => {
        return <ListCard props={item} />;
      })}
    </div>
  );
};
