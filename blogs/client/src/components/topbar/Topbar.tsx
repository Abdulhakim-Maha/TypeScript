import "./Topbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <FontAwesomeIcon icon={faFacebook}  className="topIcon"/>
        <FontAwesomeIcon icon={faTwitter}   className="topIcon"/>
        <FontAwesomeIcon icon={faInstagram} className="topIcon"/>
        <FontAwesomeIcon icon={faPinterest} className="topIcon"/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">home</li>
          <li className="topListItem">about</li>
          <li className="topListItem">contact</li>
          <li className="topListItem">write</li>
          <li className="topListItem">logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://images.pexels.com/photos/9323350/pexels-photo-9323350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <FontAwesomeIcon icon={faSearch} className="topSearchIcon" />
      </div>
    </div>
  );
};

export default Topbar;
