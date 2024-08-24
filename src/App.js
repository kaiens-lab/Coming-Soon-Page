import { React } from "react";
import Header from "../src/components/Header/Header.jsx";
import Description from "../src/components/Description/Description.jsx";
import EmailForm from "../src/components/EmailForm/EmailForm.jsx";
import Logo from "../src/components/Logo/Logo.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import HeroDesktop from "../src/assets/images/hero-desktop.jpg";
import HeroMobile from "../src/assets/images/hero-mobile.jpg";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <div className="left-section">
        <Logo />
        <div className="content-container">
          <img src={HeroMobile} alt="Hero-Mobile" className="hero-mobile" />
          <Header />
          <Description />
          <EmailForm />
        </div>
        <div className="content-footer">
          <Footer />
        </div>
      </div>
      <div className="right-section">
        <img src={HeroDesktop} alt="Hero-Desktop" className="hero-desktop" />
      </div>
    </div>
  );
}

export default App;
