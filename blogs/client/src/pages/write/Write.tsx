import React, { useContext, useState } from "react";
import "./Write.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { authContext } from "../../context/context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState<{ name: string } | null>(null);
  const { user } = useContext(authContext);

  const submithandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      username: user!.username,
      title,
      desc,
    };
    // if(file){
    //   const data = new FormData()
    //   const filename = Date.now() + file;
    // }
  };

  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/4608979/pexels-photo-4608979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="writeImg"
      />
      <form className="writeForm" onSubmit={submithandler}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <FontAwesomeIcon className="writeIcon" icon={faPlus} />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title."
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            typeof="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
