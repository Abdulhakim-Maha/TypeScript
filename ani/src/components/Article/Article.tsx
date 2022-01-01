import React, { useEffect, useRef } from "react";
import classes from "./Article.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type P = {
  img_src: string;
  reverse: boolean;
};

const Article: React.FC<P> = (props) => {
  const img_ref = useRef<HTMLImageElement>(null);
  const Title_ref = useRef<HTMLHeadingElement>(null);
  const p_ref = useRef<HTMLParagraphElement>(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(img_ref.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: img_ref.current,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    })
      .from(Title_ref.current, {
        opacity: 0,
        direction: 3,
        x: 50,
        scrollTrigger: {
          trigger: Title_ref.current,
          start: "top 40%",
          end: "top 30%",
          scrub: 1,
          // markers: true,
        },
      })
      .from(p_ref.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: Title_ref.current,
          start: "bottom 35%",
          end: "bottom 30%",
          scrub: 1,
          // markers:true,
        },
      });
  }, []);

  const PARAGRAPH = () => {
    return (
      <aside>
        <h2 ref={Title_ref} className={classes.Title}>
          This is my first impression
        </h2>
        <p ref={p_ref}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
          iusto delectus at veritatis reprehenderit ipsa, vero obcaecati
          blanditiis odio, facilis iste inventore quae nesciunt impedit laborum
          ad aliquid eligendi. Unde?
        </p>
      </aside>
    );
  };
  const IMAGE = () => {
    return (
      <div className={classes.img_wrapper}>
        <img
          // {props.img_src? 're': ''}
          src={props.img_src}
          className={classes.img}
          ref={img_ref}
          alt="For Info"
        />
      </div>
    );
  };

  return (
    <div className={classes.container}>
      {!props.reverse ? <IMAGE /> : <PARAGRAPH />}
      {!props.reverse ? <PARAGRAPH /> : <IMAGE />}
    </div>
  );
};

export default Article;
