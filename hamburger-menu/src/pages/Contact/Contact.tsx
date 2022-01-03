import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Contact.scss";
import { BsInstagram } from "react-icons/bs";
import { ReactComponent as Line } from "../../images/line.svg";

const Contact = () => {
  const tl = gsap.timeline();
  const bg = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    tl.to(container.current, { opacity: 1 })
      .from(bg.current, {
        opacity: 0,
        duration: 0.8,
        skewY: 4,
        x: -100,
      })
      .from(".bar", { opacity: 0, x: 100, skewY: 4 }, "<")
      .from(".head", { opacity: 0, y: -50, duration: 0.3 })
      .from(".icons",{
        opacity: 0,
        y: 50,
        skewX: 4,
        stagger: 0.5,
      })
      .from([".copyright",".insta"], { opacity: 0, y: 50, skewX: 4 }, );
  }, []);
  return (
    <div className="contact_container" ref={container}>
      <div className="contact_wrapper">
        <div className="img_wrapper" ref={bg}>
          <img src="/images/contact.jpg" alt="" />
        </div>
        <div className="right_container">
          <div className="bar"></div>
          <div className="inner">
            <h2 className="head">Contact Us</h2>
            <div className="icons">
              <a
                href="https://www.instagram.com/easywear_official/"
                target="_blank"
              >
                <BsInstagram className="icon" />
              </a>
              <p> : @easywear_official</p>
            </div>
            <div className="icons">
              <a href="https://line.me/ti/p/j-irro6lwr" target="_blank">
                <Line className="icon" />
              </a>
              <p> : @easywear.hijab</p>
            </div>
            <div className="footage">
              <h6 className="copyright">
                Copyright &copy;2022 Easywear hijab{" "}
              </h6>
              <a
                href="https://www.instagram.com/austiniqer/"
                target="_blank"
                className="insta"
              >
                <p>@austiniqer</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
