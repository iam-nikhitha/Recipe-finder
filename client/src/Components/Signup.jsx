import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error and success messages
    setError("");
    setSuccess("");

    // Validate form data
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          setSuccess("Signup successful. Redirecting to login...");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          setError(response.data.message || "Signup failed. Please try again.");
        }
      })
      .catch((err) => {
        setError("An error occurred. Please try again later.");
        console.error("Error: ", err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up For Recipe Finder</h2>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up Recipe Finder</button>
        <p>
          Have an Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
