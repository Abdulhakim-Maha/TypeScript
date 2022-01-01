import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = () => {
  const tl = gsap.timeline();
  const paragraph = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    tl.from(paragraph.current, {
      opacity: 0,
      y: 100,
	  delay:3,
	  skewX:4,
      ease: "power3.inOut",
      duration: 1.8,
    });
  }, []);
  return (
    <div className="container">
      <video src="video/bg.mp4" muted autoPlay></video>
      <div className="wrapper">
        <h5 ref={paragraph}>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
    </div>
  );
};

export default Home;
