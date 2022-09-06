import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = ({ show }) => {
  const navigate = useNavigate();
  const { user, dispatch, loading } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <nav className={show ? "nav show" : "nav"}>
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="/">
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
        <div className="user">
          <p>{user.username}</p>
          <span onClick={handleLogout}>Log out</span>
        </div>
      ) : (
        <ul className="nav__list">
          <li className="nav__item login-register">
            <a href="/register" className="nav__link ">
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
