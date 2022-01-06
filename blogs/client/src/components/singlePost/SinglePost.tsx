import React from "react";
import "./SinglePost.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/10446669/pexels-photo-10446669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="singlePostImg" />
      </div>
	  <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.</h1>

    </div>
  );
};

export default SinglePost;
