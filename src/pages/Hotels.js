import { Header } from "../components/modules/Header";
import { ResultList } from "../components/lists/ResultList";
import { SearchHotels } from "../components/SearchHotels";

function Hotels() {
  return (
    <div>
      <Header />
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
