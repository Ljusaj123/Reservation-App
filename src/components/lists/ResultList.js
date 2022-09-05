import { ResultCard } from "../cards/ResultCard";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

export const ResultList = () => {
  const { url } = useContext(SearchContext);
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
          return <ResultCard props={item} key={item._id} />;
        })
      ) : (
        <h3>There are no properties for inserted data.</h3>
      )}
    </div>
  );
};
