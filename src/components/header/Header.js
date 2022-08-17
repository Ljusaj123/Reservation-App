import { Navbar } from "../navbar/Navbar";
import { Search } from "../search/Search";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar-container">
          <div className="logo-container">
            <h2>Reserve</h2>
          </div>
          <Navbar />
        </div>
        <div className="header_text">
          <h1>Find your next stay</h1>
          <h3>Search low prices on hotels, homes and much more...</h3>
        </div>
        <Search />
      </div>
    </header>
  );
};
