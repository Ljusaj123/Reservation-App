import React, { useContext } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchContext from "../context/SearchHotelsContext";

export const SearchHotels = () => {
  const {
    destination,
    options,
    date,
    setDate,
    openDate,
    setOpenDate,
    setMin,
    setMax,
    setUrl,
    min,
    max,
    setDestination,
  } = useContext(SearchContext);

  return (
    <div className="hotels-search">
      <h3 className="hotels-search__title">Search</h3>
      <div className="hotels-search__item">
        <label>Destination</label>
        <input
          type="text"
          placeholder={destination}
          className="input__search"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="hotels-search__item">
        <label>Check-in date</label>
        <span onClick={() => setOpenDate(!openDate)}>{`${format(
          date[0].startDate,
          "dd/MM/yyyy"
        )} to ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
        {openDate && (
          <DateRange
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
            className="date"
          />
        )}
      </div>
      <div className="hotels-search__item">
        <label>Options</label>
        <div className="option-item">
          <span className="option-item__text">
            Min price<small> per night</small>
          </span>
          <input
            type="number"
            className="input__price"
            placeholder="0"
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <div className="option-item">
          <span className="option-item__text">
            Max price<small> per night</small>
          </span>
          <input
            type="number"
            placeholder="999"
            className="input__price"
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
        <div className="option-item">
          <span className="option-item__text">Adult</span>
          <input
            type="number"
            min={1}
            className="input__number"
            placeholder={options.adult}
          />
        </div>
        <div className="option-item">
          <span className="option-item__text">Children</span>
          <input
            type="number"
            min={0}
            className="input__number"
            placeholder={options.children}
          />
        </div>
        <div className="option-item">
          <span className="option-item__text">Room</span>
          <input
            type="number"
            min={1}
            className="input__number"
            placeholder={options.room}
          />
        </div>
      </div>
      <button
        className="button__search"
        onClick={() =>
          setUrl(
            `http://localhost:5500/api/v1/hotels?city=${destination}&min=${
              min || 0
            }&max=${max || 999}`
          )
        }
      >
        Search
      </button>
    </div>
  );
};
