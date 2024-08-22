//  “Base Apparel” Logo ＆ “We’re Coming Soon”。

import React from "react";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Welcome to Our Site</h1>
    </header>
  );
}

export default Header;
