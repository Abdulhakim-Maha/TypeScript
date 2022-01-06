import React from "react";
import "./Post.scss";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/10446669/pexels-photo-10446669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCate">Music</span>
          <span className="postCate">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet</span>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        exercitationem nisi repellat delectus at dolorem enim mollitia, iure
        eveniet atque?
      </p>
    </div>
  );
};

export default Post;
