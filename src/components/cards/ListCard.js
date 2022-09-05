import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

export const ListCard = ({ props, type }) => {
  const navigate = useNavigate();

  const { dispatch, date, options } = useContext(SearchContext);
  const { name, count, imageUrl } = props;

  const handleClick = () => {
    let url = "";
    if (type === "cities") {
      url = `http://localhost:5500/api/v1/hotels?city=${name}`;
      dispatch({
        type: "NEW_SEARCH",
        payload: { property: "", date, options, city: name, url: url },
      });
    }
    if (type === "properties") {
      url = `http://localhost:5500/api/v1/hotels?type=${name}`;
      dispatch({
        type: "NEW_SEARCH",
        payload: {
          property: name,
          url: url,
          city: "",
          options,
          date,
        },
      });
    }
    navigate("/hotels");
  };
  return (
    <div className="cards-list__item">
      <img
        src={imageUrl}
        alt={name}
        className="cards-list__item-img"
        onClick={handleClick}
      />
      <div className="cards-list__item-titles">
        <h3>{name}</h3>
        <p>{`${count} properties`}</p>
      </div>
    </div>
  );
};
