import { useNavigate } from "react-router-dom";

export const ListCard = ({ props, type }) => {
  const { name, count, imageUrl } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hotels", { state: { destination: name } });
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
