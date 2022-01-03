import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Home.scss";

const Home = () => {
  const tl = gsap.timeline();
  const p1 = useRef<HTMLHeadingElement>(null);
  const p2 = useRef<HTMLHeadingElement>(null);
  const p3 = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    tl.from([p1.current,p2.current,p3.current], {
      opacity: 0,
      y: 100,
      delay: 1.5,
      skewX: 8,
      ease: "power3.inOut",
      duration: 0.8,
      stagger:.5,
    });
  }, []);
  return (
    <div className="container">
      <video src="video/bg.mp4" muted autoPlay></video>
      <div className="wrapper">
        <h1 ref={p1}>easy wearing </h1>
        <h1 ref={p2}>with</h1>
        <h1 ref={p3}>easy hijab</h1>
      </div>
    </div>
  );
};

export default Home;
