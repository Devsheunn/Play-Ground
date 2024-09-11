import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./LoginPage.css";
import PublicApi from "../../Utils/axios";
import useAuth from "../../Hooks/UseAuth";
import GetUserDetails from "../GetUserDetails";
import AuthContext from "../../Context/AuthContext";
import useAxiosPrivate from "../../Hooks/usePrivateAxios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { accessToken, setAccessToken, user, setUser } =
    useContext(AuthContext);
  const { refreshToken, setRefreshToken } = useContext(AuthContext);
  const api = useAxiosPrivate();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await PublicApi.post(
        "api/users/token/",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
      console.log(response.data.access);
      localStorage.setItem("access", response.data.access);
      setAccessToken(response.data.access);
      console.log(accessToken);
      setRefreshToken(response.data.refresh);
      navigate("/homePage");
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 400) {
        console.log("Missing Username or Password");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
      }
    }
  };

  return (
    <div className="login-container">
      <form action="/" onSubmit={handleSubmit}>
        <img src={assets.egbinLogo} alt="" />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          id=""
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
