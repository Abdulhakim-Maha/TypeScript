import React from "react";
import "./OurProducts.scss";
import { products } from "../../data";

const OurProducts = () => {
  return (
    <div className="product_container">
      <div className="product_wrapper">
        {products.map((pd) => {
          return (
            <div className="card" key={pd.id}>
              <img src={pd.img_src} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
