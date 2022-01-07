import { Link } from "react-router-dom";
import "./Register.scss";
const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your username." />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email." />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password." />
        <button className="registerBtn">Register</button>
      </form>
      <button className="registerLoginBtn">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
