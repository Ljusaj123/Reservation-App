import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ props }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <nav className={props ? "nav show" : "nav"}>
      <ul className="nav__list">
        <li className="nav__item">
          <a onClick={handleSearch} className="nav__link">
            Stays
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Car Rent
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Attractions
          </a>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__item login-register">
          <a href="#" className="nav__link ">
            Register
          </a>
        </li>
        <li className="nav__item login-register">
          <a href="#" className="nav__link">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};
