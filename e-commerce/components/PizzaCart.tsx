import Image from "next/image";
import React from "react";
import style from "../styles/PizzaCart.module.scss";

const PizzaCart = () => {
  return (
    <div className={style.container}>
      <Image src={"/img/pizza.png"} alt="" width={"500"} height={"500"} />
      <h1 className={style.title}>FIORI DI ZUCCA</h1>
      <span className={style.price}>$19.90</span>
      <p className={style.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas.
      </p>
    </div>
  );
};

export default PizzaCart;
