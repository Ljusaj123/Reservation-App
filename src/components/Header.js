import { useState } from "react";
import { Navbar } from "./Navbar";
import { SearchHeader } from "./SearchHeader";

export const Header = ({ type }) => {
  const [show, setShow] = useState(false);

  return (
    <header className={type === "list" ? "header list-mode" : "header"}>
      <div className="header-container container ">
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
        {type !== "list" && (
          <>
            <div className="header_text">
              <h1>Find your next stay</h1>
              <h3>Search low prices on hotels, homes and much more...</h3>
            </div>
            <SearchHeader />
          </>
        )}
      </div>
    </header>
  );
};
