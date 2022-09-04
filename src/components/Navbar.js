import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = ({ props }) => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const handleSearch = () => {
    navigate("/hotels", { state: {} });
  };
  return (
    <nav className={props ? "nav show" : "nav"}>
      <ul className="nav__list">
        <li className="nav__item">
          <a onClick={handleSearch} className="nav__link" href="/hotels">
            Stays
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Car Rent
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Attractions
          </a>
        </li>
      </ul>
      {user ? (
        <p className="username">{user.username}</p>
      ) : (
        <ul className="nav__list">
          <li className="nav__item login-register">
            <a href="/" className="nav__link ">
              Register
            </a>
          </li>
          <li className="nav__item login-register">
            <a href="/login" className="nav__link">
              Sign In
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};
