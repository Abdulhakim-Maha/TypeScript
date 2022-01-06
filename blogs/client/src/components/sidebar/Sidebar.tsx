import React from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faInstagram,faPinterest } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img
          src="https://images.pexels.com/photos/10754501/pexels-photo-10754501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ut
          laboriosam delectus magni aliquam tempore cumque quo. Deleniti,
          dolores sapiente?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <FontAwesomeIcon icon={faFacebook}  className="sidebarIcon" />
          <FontAwesomeIcon icon={faTwitter}   className="sidebarIcon" />
          <FontAwesomeIcon icon={faInstagram} className="sidebarIcon" />
          <FontAwesomeIcon icon={faPinterest} className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
