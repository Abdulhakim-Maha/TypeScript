import React from "react";
import "./Post.scss";
import { POST } from "../../interface/post";
import { Link } from "react-router-dom";

const Post: React.FC<{ post: POST }> = ({ post }) => {
  return (
    <div className="post">
      <img src={post.photo} alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((c) => {
            return <span className="postCate">{c.name}</span>;
          })}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
