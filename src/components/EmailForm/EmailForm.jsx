import React, { useState } from "react";
import "./EmailForm.css";
import errorIcon from "../../assets/images/icon-error.svg";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setMessage("Please provide a valid email!");
      setIsError(true);
    } else if (!validateEmail(email)) {
      setMessage("Please provide a valid email!");
      setIsError(true);
    } else {
      setMessage("Email sent!");
      setIsError(false);
      setEmail("");
    }
  };

  return (
    <div className="email-container">
      <div className="email-form">
        <input
          id="input-email"
          type="email"
          placeholder="EmailAddress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`input-email ${isError ? "input-error" : ""}`}
        />
        <button id="email-btn" onClick={handleSubmit}>
          {">"}
        </button>
        <span
          id="icon-wrong"
          className={`icon-wrong ${isError ? "" : "hidden"}`}
          role="img"
          aria-label="Error icon"
        >
          <img src={errorIcon} alt="Error" />
        </span>
      </div>
      <p
        id={isError ? "email-message-wrong" : "email-message-success"}
        className={`email-message ${
          isError ? "text-SoftRed" : "success success-message"
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default EmailForm;
