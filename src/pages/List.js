import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { ListResult } from "../components/ListResult";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Header type="list" />
      <div className="list-container container">
        <div className="list-wrapper">
          <div className="list-search">
            <h3 className="list-search__title">Search</h3>
            <div className="list-search__item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list-search__item">
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
                />
              )}
            </div>
            <div className="list-search__item">
              <label>Options</label>
              <div className="option-item">
                <span className="option-item__text">
                  Min price<small> per night</small>
                </span>
                <input type="number" className="option-item__input" />
              </div>
              <div className="option-item">
                <span className="option-item__text">
                  Max price<small> per night</small>
                </span>
                <input type="number" className="option-item__input" />
              </div>
              <div className="option-item">
                <span className="option-item__text">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="option-item__input"
                  placeholder={options.adult}
                />
              </div>
              <div className="option-item">
                <span className="option-item__text">Children</span>
                <input
                  type="number"
                  min={0}
                  className="option-item__input"
                  placeholder={options.children}
                />
              </div>
              <div className="option-item">
                <span className="option-item__text">Room</span>
                <input
                  type="number"
                  min={1}
                  className="option-item__input"
                  placeholder={options.room}
                />
              </div>
            </div>
            <button>Search</button>
          </div>
          <ListResult />
        </div>
      </div>
    </div>
  );
}

export default List;
