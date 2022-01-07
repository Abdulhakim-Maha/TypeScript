import "./Topbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Topbar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <FontAwesomeIcon icon={faFacebook} className="topIcon" />
        <FontAwesomeIcon icon={faTwitter} className="topIcon" />
        <FontAwesomeIcon icon={faInstagram} className="topIcon" />
        <FontAwesomeIcon icon={faPinterest} className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              write
            </Link>
          </li>
          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImage"
            src="https://images.pexels.com/photos/9323350/pexels-photo-9323350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        )}
        <FontAwesomeIcon icon={faSearch} className="topSearchIcon" />
      </div>
    </div>
  );
};

export default Topbar;
