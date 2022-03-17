import Image from "next/image";
import React from "react";
import style from "../styles/PizzaCart.module.scss";
import PIZZA from "../util/Pizza";
import Link from "next/link";

const PizzaCart: React.FC<{ pizza: PIZZA }> = ({ pizza }) => {
  return (
    <div className={style.container}>
      <Link href={`/product/${pizza._id}`} passHref >
        <Image src={"/img/pizza.png"} alt="" width={"500"} height={"500"} />
      </Link>
      <h1 className={style.title}>{pizza.title}</h1>
      <span className={style.price}>${pizza.prices[0]}</span>
      <p className={style.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCart;
