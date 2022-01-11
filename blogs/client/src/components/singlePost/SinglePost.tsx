import React, { useEffect, useState } from "react";
import "./SinglePost.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { POST } from "../../interface/post";

const SinglePost = () => {
  const [post, setPost] = useState<POST | null>(null);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      setPost(res.data);
      // console.log(res.data);
    };
    try {
      getPost();
    } catch (err) {
      console.log(err);
    }
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={post?.photo} alt="" className="singlePostImg" />
      </div>
      <h1 className="singlePostTitle">
        {post?.title}
        <div className="singlePostEdit">
          <FontAwesomeIcon className="singlePostIcon" icon={faEdit} />
          <FontAwesomeIcon className="singlePostIcon" icon={faTrashAlt} />
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:
          <Link className="link" to={`/?user=${post?.username}`}>
            <b>{post?.username}</b>
          </Link>
        </span>
        <span className="singlePostDate">{post?.createdAt}</span>
      </div>
      <p className="singlePostDesc">{post?.desc}</p>
    </div>
  );
};

export default SinglePost;
