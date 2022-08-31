import React from "react";
import { ResultCard } from "./cards/ResultCard";
import useFetch from "../hooks/useFetch";

export const ResultList = ({ destination, options, date, url }) => {
  const { data, error, loading } = useFetch(
    `http://localhost:5000/api/v1/hotels?city=${destination}`
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
    <div className="result-list">
      {data.map((item) => {
        return <ResultCard props={item} key={item._id} />;
      })}
    </div>
  );
};
