import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5500/api/v1/auth/register",
        credentials
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/login");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <h2>Register User</h2>
      <div className="login__container">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="input__search"
        />
        <input
          type="email"
          placeholder="email@gmail.com"
          id="email"
          onChange={handleChange}
          className="input__search"
        />
        <div className="password-input">
          <input
            type={isVisible ? "text" : "password"}
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="input__search password"
          />
          {isVisible ? (
            <AiTwotoneEyeInvisible
              onClick={() => setIsVisible(false)}
              className="visible-icon"
            />
          ) : (
            <AiFillEye
              onClick={() => setIsVisible(true)}
              className="visible-icon"
            />
          )}
        </div>

        <button
          disabled={loading}
          onClick={handleClick}
          className="button__login"
        >
          Register
        </button>
        {error && <span>{error.message}</span>}
        <p>
          Already registered? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};
