import React, { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const SearchHotels = () => {
  const { city, date, options, property, dispatch } = useContext(SearchContext);

  const [destination, setDestination] = useState(city);
  const [localDate, setLocalDate] = useState(date);
  const [localOptions, setLocalOptions] = useState(options);
  const [localType, setLocalType] = useState(property);

  const handleClick = () => {
    const url = `http://localhost:5500/api/v1/hotels?city=${destination}&min=${
      min || 0
    }&max=${max || 999}`;
    dispatch({
      type: "NEW_SEARCH",
      payload: {
        city: destination,
        date: localDate,
        options: localOptions,
        property: localType,
        url: url,
      },
    });
  };

  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  return (
    <div className="hotels-search">
      <h3 className="hotels-search__title">Search</h3>
      <div className="hotels-search__item">
        <label>Destination</label>
        <input
          type="text"
          placeholder="Your destination..."
          className="input__search"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="hotels-search__item">
        <label>Check-in date</label>
        <span onClick={() => setOpenDate(!openDate)}>{`${format(
          localDate[0].startDate,
          "dd/MM/yyyy"
        )} to ${format(localDate[0].endDate, "dd/MM/yyyy")} `}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setLocalDate([item.selection])}
            moveRangeOnFirstSelection={false}
            minDate={new Date()}
            ranges={localDate}
            className="date"
          />
        )}
      </div>
      <div className="hotels-search__item">
        <label>Property</label>
        <input
          type="text"
          placeholder="Property..."
          className="input__search"
          value={localType}
          onChange={(e) => setLocalType(e.target.value)}
        />
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
            placeholder={localOptions.adult}
            value={localOptions.adult}
            onChange={(e) =>
              setLocalOptions({ ...localOptions, adult: e.target.value })
            }
          />
        </div>
        <div className="option-item">
          <span className="option-item__text">Children</span>
          <input
            type="number"
            min={0}
            className="input__number"
            value={localOptions.children}
            placeholder={localOptions.children}
            onChange={(e) =>
              setLocalOptions({ ...localOptions, children: e.target.value })
            }
          />
        </div>
        <div className="option-item">
          <span className="option-item__text">Room</span>
          <input
            type="number"
            min={1}
            className="input__number"
            value={localOptions.room}
            placeholder={localOptions.room}
            onChange={(e) =>
              setLocalOptions({ ...localOptions, room: e.target.value })
            }
          />
        </div>
      </div>
      <button className="button__search" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};
