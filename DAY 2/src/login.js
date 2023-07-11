import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!email) {
      errors.email = "Email is required";
    }

    if (!pass) {
      errors.pass = "Password is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is valid. Submitting...");
      console.log("Email:", email);
    }
  };

  return (
    <div className="auth-form-container">
      <h1>PHONEBOOK REGISTER</h1>
      <h2>LOGIN</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="your email@gmail.com"
          id="email"
          name="email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        {errors.pass && <p className="error">{errors.pass}</p>}

        <button type="submit">Log In</button>
      </form>
      <br />
      <Link to="/Register">
        <button className="link-btn">Don't have an account? Register here.</button>
      </Link>
    </div>
  );
};