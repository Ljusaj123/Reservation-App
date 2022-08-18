import { useState } from "react";
import { Navbar } from "./Navbar";
import { Search } from "./Search";

export const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="navbar-container">
          <div className="logo-container">
            <h2>Reserve</h2>
          </div>
          <Navbar props={show} />
          <div className="hamburger" onClick={() => setShow((show) => !show)}>
            <div
              className={show ? "hamburger_list open" : "hamburger_list"}
            ></div>
            <div
              className={show ? "hamburger_list open" : "hamburger_list"}
            ></div>
            <div
              className={show ? "hamburger_list open" : "hamburger_list"}
            ></div>
          </div>
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
