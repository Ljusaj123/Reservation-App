import React, { useContext } from "react";
import { FaBed, FaCalendarAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

import { Options } from "./Options";
import SearchHeaderContext from "../context/SearchHeaderContext";

export const SearchHeader = () => {
  const {
    date,
    options,
    setOptions,
    setDestination,
    openDate,
    setOpenDate,
    setDate,
    openOptions,
    setOpenOptions,
    handleSearch,
  } = useContext(SearchHeaderContext);

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
        {openOptions && (
          <Options options={options} handleOption={handleOption} />
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
