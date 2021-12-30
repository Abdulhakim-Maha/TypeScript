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
  const imgClass = `.${classes.img}`.trim()
  const ttl = useRef(null);
  const tl = gsap.timeline();

  console.log(imgClass)
  useEffect(() => {
    tl.to(img_ref.current, {
      opacity: 1,
      //   x:100
        scrollTrigger: { trigger:'.Article_img__3SG0F'},
    })
      .to(ttl.current, { opacity: 1, duration: 1 })
      .from(ttl.current, { y: 50 }, "<");
  }, []);

  const PARAGRAPH = () => {
    return (
      <aside>
        <h2 className={classes.Title} ref={ttl}>
          This is my first impression
        </h2>
        <p>
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
        <img ref={img_ref} src={props.img_src} className={classes.img} alt="image" />
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
