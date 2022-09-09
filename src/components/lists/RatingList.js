import React from "react";
import useFetch from "../../hooks/useFetch";
import { RatingCard } from "../cards/RatingCard";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

export const RatingList = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:5500/api/v1/hotels?featured=true&limit=4"
  );
  if (loading) {
    return <HalfMalf text={"Loading..."} width={"250px"} height={"250px"} />;
  }
  if (error.isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="cards-list">
      {data.map((item) => {
        return <RatingCard props={item} key={item._id} />;
      })}
    </div>
  );
};
