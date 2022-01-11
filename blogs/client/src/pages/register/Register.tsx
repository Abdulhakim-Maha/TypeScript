import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      // console.log(res.data);
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(!!err);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter your username."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter your email."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="registerBtn">
          Register
        </button>
      </form>
      <button className="registerLoginBtn">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && <span>Something went wrong!</span>}
    </div>
  );
};

export default Register;
