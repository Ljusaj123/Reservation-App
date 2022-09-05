import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

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
      console.log(res);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <h2>Login User</h2>
      <div className="login-container">
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
          className="button__search"
        >
          Login
        </button>
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default Login;
