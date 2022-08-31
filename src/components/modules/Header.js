import { useState } from "react";
import { Navbar } from "../Navbar";
import { SearchHeader } from "../SearchHeader";
import { Link } from "react-router-dom";
import SearchHeaderContext from "../../context/SearchHeaderContext";
import { useNavigate } from "react-router-dom";

export const Header = ({ type }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState(undefined);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <header className={type === "list" ? "header list-mode" : "header"}>
      <SearchHeaderContext.Provider
        value={{
          openDate,
          openOptions,
          destination,
          date,
          options,
          setOpenDate,
          setDate,
          setDestination,
          setOptions,
          setOpenOptions,
          handleSearch,
        }}
      >
        <div className="header-container container ">
          <div className="navbar-container">
            <div className="logo-container">
              <Link to="/" style={{ color: "inherit" }}>
                <h2>Reserve</h2>
              </Link>
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
      </SearchHeaderContext.Provider>
    </header>
  );
};
