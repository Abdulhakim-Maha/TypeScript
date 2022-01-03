import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./FashionStyle.scss";

const FashionStyle = () => {
  const tl = gsap.timeline();
  const con2_img1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    tl.to(".fashion-style-container", {
      opacity: 1,
      duration: 0.8,
      delay: 1,
      ease: "power3.inOut",
    });
  }, []);
  return (
    <div className="fashion-style-container">
      <div className="out">
        <div className="wrapper">
          <div className="img_1">
            <img src="/images/dior.jpg" />
          </div>
          <div className="img_2">
            <img src="/images/f_1.jfif" />
          </div>
        </div>
        <div className="wrapper">
          <div className="img_1" ref={con2_img1}>
            <img src="/images/rose.jpg" />
          </div>
          <div className="img_2">
            <img src="/images/f_2.jpg" />
          </div>
        </div>
        <div className="wrapper">
          <div className="img_1">
            <img src="/images/book.jpg" />
          </div>
          <div className="img_2">
            <img src="/images/f_3.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionStyle;
