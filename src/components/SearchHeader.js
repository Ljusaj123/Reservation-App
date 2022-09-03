import React, { useContext, useState } from "react";
import { FaBed, FaCalendarAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Options } from "./Options";
import { SearchContext } from "../context/SearchContext";

export const SearchHeader = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(SearchContext);

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().valueOf() + 1000 * 3600 * 24),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, date, options } });
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header-search">
      <div className="header-search__item">
        <FaBed className="header-search__item-icon" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="input__search"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="header-search__item">
        <FaCalendarAlt className="header-search__item-icon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="header-search__item-text"
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
            minDate={new Date()}
          />
        )}
      </div>
      <div className="header-search__item">
        <GoPerson className="header-search__item-icon" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="header-search__item-text"
        >
          {`${options.adult} adult ${options.children} children ${options.room} room`}
        </span>
        {openOptions && <Options options={options} setOptions={setOptions} />}
      </div>
      <div className="header-search__item header-search__button">
        <button className="button__search" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
