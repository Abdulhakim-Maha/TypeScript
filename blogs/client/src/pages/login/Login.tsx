import { Link } from "react-router-dom";
import "./Login.scss";
import React, { useContext, useRef } from "react";
import { authContext } from "../../context/context";
import axios from "axios";

const Login = () => {
  const { loggin, isFetching } = useContext(authContext);
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    loggin(username.current!.value, password.current!.value);
    username.current!.value = "";
    password.current!.value = "";

    // dispatch({ type: "LOGIN_START" });
    // try {
    //   const res = await axios.post("/auth/login", {
    //     username: username.current!.value,
    //     password: password.current!.value,
    //   });
    //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    // } catch (err) {
    //   dispatch({ type: "LOGIN_FAILURE" });
    // }
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
