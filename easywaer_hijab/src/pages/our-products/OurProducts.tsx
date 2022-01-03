import React, { useEffect } from "react";
import "./OurProducts.scss";
import { products } from "../../data";
import { VscLink } from "react-icons/vsc";
import { BsSuitHeartFill } from "react-icons/bs";
import { gsap } from "gsap";

const OurProducts = () => {
  useEffect(() => {
    gsap.to(".product_container", {
      opacity: 1,
      duration: 0.8,
      delay: 1,
      ease: "power3.inOut",
    });
  }, []);
  return (
    <div className="product_container">
      <div className="product_wrapper">
        {products.map((pd) => {
          return (
            <div className="card" key={pd.id}>
              <img src={pd.img_src} alt={pd.id} />
              <div className="background-overlay">
                <BsSuitHeartFill className="heart" />
                <a href={pd.link} target="_blank">
                  <VscLink className="link" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
