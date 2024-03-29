import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/4608979/pexels-photo-4608979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
		className="headerImg"
      />
    </div>
  );
};

export default Header;
