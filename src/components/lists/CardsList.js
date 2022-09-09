import React from "react";
import useFetch from "../../hooks/useFetch";
import { ListCard } from "../cards/ListCard";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

export const CardsList = ({ images, url, type }) => {
  const { data, error, loading } = useFetch(url);

  if (loading) {
    return <HalfMalf text={"Loading..."} width={"250px"} height={"250px"} />;
  }
  if (error.isError) {
    return <p>{error.message}</p>;
  }

  const list = data.map((item, index) => {
    return {
      ...item,
      imageUrl: images[index],
    };
  });
  return (
    <div className="cards-list">
      {list.map((item, index) => {
        return <ListCard props={item} key={index} type={type} />;
      })}
    </div>
  );
};
