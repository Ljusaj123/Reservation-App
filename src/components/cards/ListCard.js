import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

export const ListCard = ({ props, type }) => {
  const navigate = useNavigate();

  const { dispatch, date, options } = useContext(SearchContext);
  const { name, count, imageUrl } = props;

  const handleClick = () => {
    if (type === "cities") {
      dispatch({
        type: "NEW_SEARCH",
        payload: { date, options, city: name, min: 0, max: 999 },
      });
    }
    if (type === "properties") {
      dispatch({
        type: "NEW_SEARCH",
        payload: {
          property: name,
          options,
          date,
          min: 0,
          max: 999,
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
