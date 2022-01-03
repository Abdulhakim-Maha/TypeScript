import { M } from "./Header";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

//import image
import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import beijing from "../images/beijing.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";

type CT = {
  name: string;
  image: string;
};
const cities: CT[] = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "Beijing", image: beijing },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
];

const Hamburger: React.FC<{ state: M; handler: () => void }> = ({
  state,
  handler,
}) => {
  // variables for dom-elements
  const menu = useRef<HTMLDivElement>(null);
  const revealMenu = useRef<HTMLDivElement>(null);
  const revealMenuBackground = useRef<HTMLDivElement>(null);
  const cityBackground = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLAnchorElement>(null);
  const line2 = useRef<HTMLAnchorElement>(null);
  const line3 = useRef<HTMLAnchorElement>(null);
  const info = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.clicked === false) {
      //close menu
      gsap.to([revealMenu.current, revealMenuBackground.current], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: 0.07,
      });
      gsap.to(menu.current, {
        duration: 1,
        css: {
          display: "none",
        },
      });

      // menu.current!.style.display = "none";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open menu
      gsap.to(menu.current, {
        duration: 0,
        css: {
          display: "block",
        },
      });
      gsap.to([revealMenuBackground.current, revealMenu.current], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });

      staggerReveal(revealMenuBackground.current!, revealMenu.current!);
      fadeInUp(info.current!);
      staggerText(line1.current!, line2.current!, line3.current!);
      // menu.current!.style.display = "block";
    }
  }, [state.clicked, state.initial]);

  const staggerReveal = (node1: HTMLElement, node2: HTMLElement) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: 0.1,
    });
  };

  const staggerText = (
    node1: HTMLElement,
    node2: HTMLElement,
    node3: HTMLElement
  ) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: 0.3,
    });
  };

  const fadeInUp = (node: HTMLElement) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      ease: "power3.inOut",
      opacity: 0,
    });
  };

  const handleCity = (city: CT) => {
    gsap.to(cityBackground.current, {
      duration: 0,
      background: `url(${city.image}) center center`,
    });
    gsap.to(cityBackground.current, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.from(cityBackground.current, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };

  const handleCityReturn = () => {
    gsap.to(cityBackground.current, {
      duration: 0.4,
      opacity: 0,
    });
  };

  const handleHover = (e: React.MouseEvent) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut",
    });
  };
  const handleHoverExit = (e: React.MouseEvent) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={menu} className="hamburger-menu">
      <div
        ref={revealMenuBackground}
        className="menu-secondary-background-color"
      ></div>
      <div ref={revealMenu} className="menu-layer">
        <div ref={cityBackground} className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={line1}
                      to="/our-products"
                      onClick={handler}
                    >
                      Our Products
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      ref={line2}
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      to="/fashion-style"
                      onClick={handler}
                    >
                      Fashion Style
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      ref={line3}
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      to="/contact-us"
                      onClick={handler}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={info} className="info">
                <h3>Our Promise</h3>
                <p>You will enjoy and be uniquely you</p>
                <p>stand out and shine with our scarves</p>
              </div>
              <div className="location">
                Locations :
                {cities.map((ct) => {
                  return (
                    <span
                      key={ct.name}
                      onMouseEnter={() => handleCity(ct)}
                      onMouseOut={handleCityReturn}
                    >
                      {ct.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
