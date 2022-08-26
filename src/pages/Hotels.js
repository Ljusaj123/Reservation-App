import { Header } from "../components/Header";

import { ResultList } from "../components/ResultList";
import { SearchHotels } from "../components/SearchHotels";
function Hotels() {
  return (
    <div>
      <Header type="list" />
      <div className="hotels-container container">
        <div className="hotels-wrapper">
          <SearchHotels />
          <ResultList />
        </div>
      </div>
    </div>
  );
}

export default Hotels;
