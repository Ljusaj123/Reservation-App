import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

export const SearchHotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="hotels-search">
      <h3 className="hotels-search__title">Search</h3>
      <div className="hotels-search__item">
        <label>Destination</label>
        <input
          type="text"
          placeholder={destination}
          className="input__search"
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
          <input type="number" className="input__price" />
        </div>
        <div className="option-item">
          <span className="option-item__text">
            Max price<small> per night</small>
          </span>
          <input type="number" className="input__price" />
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
      <button className="button__search">Search</button>
    </div>
  );
};
