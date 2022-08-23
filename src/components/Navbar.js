import React from "react";

export const Navbar = ({ props }) => {
  return (
    <nav className={props ? "nav show" : "nav"}>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/hotels" className="nav__link">
            Stays
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Car Rent
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Attractions
          </a>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__item login-register">
          <a href="#" className="nav__link ">
            Register
          </a>
        </li>
        <li className="nav__item login-register">
          <a href="#" className="nav__link">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};
