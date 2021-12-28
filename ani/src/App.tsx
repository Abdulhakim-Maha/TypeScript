import React, { useEffect, useRef } from "react";
import "./App.scss";
import { gsap } from "gsap";

function App() {
  const text = useRef<HTMLHeadingElement>(null);
  const app = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();

  useEffect(() => {
    console.log(app.current!.childElementCount);
    tl.to(app.current, { opacity: 1, duration: 1 })
      .to(text.current, {
        duration: 1.5,
        opacity: 1,
        x: 80,
        delay: 0.5,
        ease: "power3.out",
      })
      .to(".stagger", { stagger: 0.1, opacity: 1 });
  }, []);

  return (
    <div className="App" ref={app}>
      <video className="bg_video" src="/bg.mp4" loop muted autoPlay></video>
      <div className="container">
        <h1 ref={text} className="text">
          Hello Everyone
        </h1>
        {/* <h2 className="head2"> My name</h2> */}
        <div className="wrap">
          <span className="stagger">M</span>
          <span className="stagger">y</span>
          <span className="stagger"> </span>
          <span className="stagger">n</span>
          <span className="stagger">a</span>
          <span className="stagger">m</span>
          <span className="stagger">e</span>
          <span className="stagger"> </span>
          <span className="stagger">a</span>
          <span className="stagger">u</span>
          <span className="stagger">s</span>
          <span className="stagger">t</span>
          <span className="stagger">i</span>
          <span className="stagger">n</span>
          <span className="stagger">i</span>
          <span className="stagger">q</span>
          <span className="stagger">e</span>
          <span className="stagger">r</span>
        </div>
      </div>
    </div>
  );
}

export default App;
