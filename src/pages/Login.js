import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { Header } from "../components/modules/Header";

const Login = () => {
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5500/api/v1/auth/login",
        credentials
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <>
      <Header />
      <div className="login">
        <h2>Login User</h2>
        <div className="login__container">
          <input
            type="text"
            placeholder="username"
            id="username"
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
            Login
          </button>
          {error && <span>{error.message}</span>}
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
