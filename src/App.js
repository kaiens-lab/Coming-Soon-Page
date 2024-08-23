import { React } from "react";
import Header from "../src/components/Header.jsx";
import Description from "../src/components/Description.jsx";
import EmailForm from "../src/components/EmailForm.jsx";
import Logo from "../src/components/Logo.jsx";
import HeroDesktop from "../src/assets/images/hero-desktop.jpg";
import HeroMobile from "../src/assets/images/hero-mobile.jpg";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <div className="left-section">
        <Logo />
        <div className="content-container">
          <Header />
          <Description />
          <EmailForm />
        </div>
      </div>
      <div className="right-section">
        <img src={HeroDesktop} alt="Hero-Desktop" className="hero-desktop" />
        <img src={HeroMobile} alt="Hero-Mobile" className="hero-mobile" />
      </div>
    </div>
  );
}

export default App;
