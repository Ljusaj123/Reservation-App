import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaBed, FaCalendarAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

import { Options } from "./Options";
import { SearchContext } from "../context/SearchContext";
import { useEffect } from "react";

export const SearchHeader = () => {
  const navigate = useNavigate();

  const { dispatch, city, date, options } = useContext(SearchContext);

  useEffect(() => {
    dispatch({ type: "RESET_SEARCH" });
  }, [dispatch]);

  const [destination, setDestination] = useState(city);
  const [localDate, setLocalDate] = useState(date);
  const [localOptions, setLocalOptions] = useState(options);

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [errorInput, setErrorInput] = useState(false);

  const handleSearch = () => {
    if (destination === "") {
      setErrorInput(true);
    } else {
      dispatch({
        type: "NEW_SEARCH",
        payload: {
          city: destination,
          date: localDate,
          options: localOptions,
          min: 0,
          max: 999,
        },
      });
      navigate("/hotels");
    }
  };

  return (
    <div className="header-search">
      <div className="header-search__item ">
        <FaBed className="icon__search" />
        <input
          type="text"
          placeholder="Where are you going?"
          className={errorInput ? "input__search error_input" : "input__search"}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="header-search__item">
        <FaCalendarAlt className="icon__search" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="header-search__item-text"
        >{`${format(localDate[0].startDate, "dd/MM/yyyy")} to ${format(
          localDate[0].endDate,
          "dd/MM/yyyy"
        )} `}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setLocalDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={localDate}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="header-search__item">
        <GoPerson className="icon__search" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="header-search__item-text"
        >
          {`${localOptions.adult} adult ${localOptions.children} children ${localOptions.room} room`}
        </span>
        {openOptions && (
          <Options options={localOptions} setOptions={setLocalOptions} />
        )}
      </div>
      <div className="header-search__item header-search__button">
        <button className="button__search" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
