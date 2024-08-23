import { React } from "react";
import Header from "../src/components/Header.jsx";
import Description from "../src/components/Description.jsx";
import EmailForm from "../src/components/EmailForm.jsx";
import Logo from "../src/components/Logo.jsx";
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
      <div className="right-section"></div>
    </div>
  );
}

export default App;
