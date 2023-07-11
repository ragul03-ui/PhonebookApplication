import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = "First name is required";
    }

    if (!name) {
      errors.name = "Last name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!pass) {
      errors.pass = "Password is required";
    } else if (pass.length < 6) {
      errors.pass = "Password should be at least 6 characters";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is valid. Submitting...");
      console.log("First Name:", name);
      console.log("Last Name:", name);
      console.log("Email:", email);
    }
  };

  return (
    <div className="auth-form-container">
      <h1>ONLINE SURVEY</h1>
      <h2>REGISTER</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">First Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="First Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="last-name">Last Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="last-name"
          placeholder="Last Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

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
      <Link to="/Login">
        <button className="link-btn">Already have an account? Login here.</button>
      </Link>
    </div>
  );
};
