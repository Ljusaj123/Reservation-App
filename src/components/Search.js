import React, { useState } from "react";
import { FaBed, FaCalendarAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

export const Search = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

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

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header-search">
      <div className="header-search__item">
        <FaBed className="header-search__icon" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="header-search__input"
        />
      </div>
      <div className="header-search__item">
        <FaCalendarAlt className="header-search__icon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="header-search__text"
        >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )} `}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          />
        )}
      </div>
      <div className="header-search__item">
        <GoPerson className="header-search__icon" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="header-search__text"
        >
          {`${options.adult} adult ${options.children} children ${options.room} room`}
        </span>
        {openOptions && (
          <div className="options">
            <div className="options__item">
              <span className="options__text">Adult</span>
              <div className="options__counter">
                <button
                  disabled={options.adult <= 1}
                  className="options__counter-button"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="options__counter-number">{options.adult}</span>
                <button
                  className="options__counter-button"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="options__item">
              <span className="options__text">Children</span>
              <div className="options__counter">
                <button
                  disabled={options.children <= 0}
                  className="options__counter-button"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className="options__counter-number">
                  {options.children}
                </span>
                <button
                  className="options__counter-button"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="options__item">
              <span className="options__text">Room</span>
              <div className="options__counter">
                <button
                  disabled={options.room <= 1}
                  className="options__counter-button"
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className="options__counter-number">{options.room}</span>
                <button
                  className="options__counter-button"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="header-search__item header-search__button">
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};
