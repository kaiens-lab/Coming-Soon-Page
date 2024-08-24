import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Logo.css";

function Logo() {
  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default Logo;
