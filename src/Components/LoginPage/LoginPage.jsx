import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./LoginPage.css";
import PublicApi from "../../Utils/axios";
import useAuth from "../../Hooks/UseAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const userRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState("");
  // const [pwd, setPwd] = useState("");
  // const [errMsg, setErrMsg] = useState("");

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await PublicApi.post(
        "api/token/",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      // setAuth({ email, password, accessToken });
      // setEmail("");
      // setPassword("");
      // navigate(from, { replace: true });
      localStorage.setItem("access", response.data.accesss);
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
      // errRef.current.focus();
    }
  };

  const togglePersist = () => {
    setPersist(prev => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

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
