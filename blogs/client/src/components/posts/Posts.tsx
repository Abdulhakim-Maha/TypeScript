import React from "react";
import Post from "../post/Post";
import "./Posts.scss";
import { POST } from "../../interface/post";

const Posts: React.FC<{ posts: POST[] }> = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} key={post._id} />;
      })}
    </div>
  );
};

export default Posts;
