import { Link } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email." />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password." />
        <button type="submit" className="loginBtn">
          Login
        </button>
      </form>

      <button className="loginRegisterBtn">
        <Link to="/register" className="link">Register</Link>
      </button>
    </div>
  );
};

export default Login;
