import { Header } from "../components/modules/Header";
import { useState } from "react";
import { ResultList } from "../components/lists/ResultList";
import { SearchHotels } from "../components/SearchHotels";
import { useLocation } from "react-router-dom";

function Hotels() {
  const location = useLocation();
  console.log(location.state.destination || "");
  const [destination, setDestination] = useState(
    location.state.destination || ""
  );
  const [url, setUrl] = useState(
    `http://localhost:5500/api/v1/hotels?city=${destination}`
  );

  return (
    <div>
      <Header type="list" />
      <div className="hotels-container container">
        <div className="hotels-wrapper">
          <SearchHotels
            destination={destination}
            setDestination={setDestination}
            setUrl={setUrl}
          />
          <ResultList url={url} destination={destination} />
        </div>
      </div>
    </div>
  );
}

export default Hotels;
