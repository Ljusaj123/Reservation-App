import { Header } from "../components/modules/Header";
import { useState } from "react";
import { ResultList } from "../components/lists/ResultList";
import { SearchHotels } from "../components/SearchHotels";
import { useLocation } from "react-router-dom";

function Hotels() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const [url, setUrl] = useState("");

  return (
    <div>
      <Header type="list" />
      <div className="hotels-container container">
        <div className="hotels-wrapper">
          <SearchHotels
            destination={destination}
            options={options}
            date={date}
            setDate={setDate}
            openDate={openDate}
            setOpenDate={setOpenDate}
            setMin={setMin}
            setMax={setMax}
            min={min}
            max={max}
            setUrl={setUrl}
          />
          <ResultList
            destination={destination}
            options={options}
            date={date}
            min={min}
            max={max}
            url={url}
          />
        </div>
      </div>
    </div>
  );
}

export default Hotels;
