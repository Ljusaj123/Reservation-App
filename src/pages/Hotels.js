import { Header } from "../components/modules/Header";
import { useState } from "react";
import { ResultList } from "../components/lists/ResultList";
import { SearchHotels } from "../components/SearchHotels";
import { useLocation } from "react-router-dom";
import SearchHotelsContext from "../context/SearchHotelsContext";

function Hotels() {
  const location = useLocation();
  const [destination, setDestination] = useState(
    location.state.destination && "Split"
  );
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [url, setUrl] = useState(
    `http://localhost:5500/api/v1/hotels?city=${destination}`
  );

  return (
    <div>
      <Header type="list" />
      <div className="hotels-container container">
        <div className="hotels-wrapper">
          <SearchHotelsContext.Provider
            value={{
              destination,
              options,
              date,
              setDate,
              openDate,
              min,
              max,
              setMin,
              setMax,
              setOpenDate,
              url,
              setUrl,
              setDestination,
            }}
          >
            <SearchHotels />
            <ResultList />
          </SearchHotelsContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
