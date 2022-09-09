import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { Header } from "../components/modules/Header";
import { checkPassword } from "../utils/checkPassword";

export const Register = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const err = checkPassword(credentials.password);
    if (err) dispatch({ type: "LOGIN_FAILURE", payload: err });
    else {
      try {
        const res = await axios.post(
          "http://localhost:5500/api/v1/auth/register",
          credentials
        );
        setMessage(`${res.data}. Go to login page.`);
        setTimeout(() => setMessage(""), 2000);
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      }
    }
  };

  return (
    <>
      <Header />
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
                className="icon__visible"
              />
            ) : (
              <AiFillEye
                onClick={() => setIsVisible(true)}
                className="icon__visible"
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
          <p className="confirm-message">{message}</p>
          {error && <span>{error.message}</span>}
          <p>
            Already registered? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </>
  );
};
