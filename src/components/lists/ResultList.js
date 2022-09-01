import React, { useContext } from "react";
import { ResultCard } from "../cards/ResultCard";
import useFetch from "../../hooks/useFetch";
import SearchHotelsContext from "../../context/SearchHotelsContext";

export const ResultList = () => {
  const { url, destination, date, options } = useContext(SearchHotelsContext);
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
    <div className="result-list">
      {data.length !== 0 ? (
        data.map((item) => {
          return (
            <ResultCard
              props={item}
              key={item._id}
              destination={destination}
              date={date}
              options={options}
            />
          );
        })
      ) : (
        <h3>There are no properties for inserted data.</h3>
      )}
    </div>
  );
};
