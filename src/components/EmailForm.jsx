import React, { useState } from "react";
import "./EmailForm.css";
import errorIcon from "../assets/images/icon-error.svg";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setSuccess("Email submitted successfully!");
      setError(""); // 清除錯誤消息
    } else {
      setError("Please provid a valid email.");
      setSuccess(""); // 清除成功消息
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className="input-container" noValidate>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{">"}</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </form>
  );
}

export default EmailForm;
