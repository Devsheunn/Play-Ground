import { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPage.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import api from "../../Utils/axios";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  //   const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await login({ email, password });
      navigate("/homePage");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("login failed", error);
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
