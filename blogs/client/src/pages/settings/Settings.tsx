import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Settings.scss";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
            <label htmlFor="fileInput">
              <FontAwesomeIcon className="settingsPPIcon" icon={faUserCircle} />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="austiniqer" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="austin@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password" />
		  <button className="settingsSubmit">Publish</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
