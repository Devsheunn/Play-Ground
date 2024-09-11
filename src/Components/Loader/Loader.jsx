import React from "react";
import { assets } from "../../assets/assets";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <img src={assets.loader} alt="" />
    </div>
  );
};

export default Loader;
