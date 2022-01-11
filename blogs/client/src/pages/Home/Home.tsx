import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { POST } from "../../interface/post";
import "./Home.scss";

const Home = () => {
  const [posts, setPosts] = useState<POST[]>([]);
  const { search } = useLocation();

  // console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
