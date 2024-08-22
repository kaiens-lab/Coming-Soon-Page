//包含一個輸入框&提交按鈕的表單

import React, { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
    } else {
      // Handle form submission (e.g., send to server)
      setError("");
      alert("Email submitted successfully");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default EmailForm;
