import React from "react";
import "./SinglePost.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/10446669/pexels-photo-10446669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
          className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
          <FontAwesomeIcon className="singlePostIcon" icon={faEdit} />
          <FontAwesomeIcon className="singlePostIcon" icon={faTrashAlt} />
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>austiniqer</b>
        </span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid
        molestias provident nihil, optio laboriosam dolor aspernatur tempore
        deserunt aperiam explicabo tempora nisi consectetur deleniti itaque sed
        et reiciendis harum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Error aliquid molestias provident nihil, optio laboriosam dolor
        aspernatur tempore deserunt aperiam explicabo tempora nisi consectetur
        deleniti itaque sed et reiciendis harum.
      </p>
    </div>
  );
};

export default SinglePost;
