import { Link } from "react-router-dom";
import "./Login.scss";
import React, { useContext, useRef } from "react";
import { authContext } from "../../context/context";

const Login = () => {
  const { loggin ,isFetching} = useContext(authContext);
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    loggin(username.current!.value, password.current!.value);
    username.current!.value = "";
    password.current!.value = "";
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={submitHandler}>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your email." ref={username} />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password."
          ref={password}
        />
        <button type="submit" className="loginBtn" disabled={isFetching}>
          Login
        </button>
      </form>

      <button className="loginRegisterBtn">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
