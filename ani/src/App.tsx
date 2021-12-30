import React, { useEffect, useRef } from "react";
import Title from "./components/Title/TItle";
import "./App.scss";
import { gsap } from "gsap";
import Article from "./components/Article/Article";
import Footage from "./components/Footage";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const text = useRef<HTMLHeadingElement>(null);
  const app = useRef<HTMLDivElement>(null);
  const top = useRef(null)
  const tl = gsap.timeline();

  useEffect(() => {
    console.log(app.current!.childElementCount);
    tl.to(app.current, { opacity: 1, duration: 1 })
      .to(text.current, {
        duration: 3,
        opacity: 1,
        x: 80,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger:{
          trigger:text.current,
          start: 'top center',
          end:'top 40%',
          scrub:1,
          // markers:true
        }
      })
      .to(".staggr", { stagger: 0.1, opacity: 1 });
  }, [tl]);

  return (
    <div className="App" ref={app}>
      <div className="top" ref={top}>
        <video className="bg_video" src="/bg.mp4" loop muted autoPlay></video>
        <div className="container">
          <h1 ref={text} className="text">
            Hello Everyone
          </h1>
          <div className="wrap">
            <Title />
          </div>
        </div>
      </div>
      <div className="center">
        <Article img_src="/impression.jpg" reverse={false} />
      </div>
      <div className="bottom">
        <Footage/>
      </div>
    </div>
  );
}

export default App;
