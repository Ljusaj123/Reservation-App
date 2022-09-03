import React from "react";
import useFetch from "../../hooks/useFetch";
import { RatingCard } from "../cards/RatingCard";

export const RatingList = ({ url }) => {
  const { data, error, loading } = useFetch(url);
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
      {data.map((item, index) => {
        return <RatingCard props={item} key={index} />;
      })}
    </div>
  );
};
