import React from "react";
import useFetch from "../../hooks/useFetch";
import { RatingCard } from "../cards/RatingCard";

export const RatingList = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:5500/api/v1/hotels?featured=true&limit=4"
  );
  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  if (error.isError) {
    return (
      <>
        <p>{error.message}</p>
      </>
    );
  }

  return (
    <div className="cards-list">
      {data.map((item) => {
        return <RatingCard props={item} key={item._id} />;
      })}
    </div>
  );
};
