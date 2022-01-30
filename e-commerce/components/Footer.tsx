import Image from "next/image";
import React from "react";
import style from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <Image src={"/img/bg.png"} layout="fill" objectFit="cover" />
      </div>
      <div className={style.item}>
        <div className={style.card}>
          <h2 className={style.motto}>
            OH YES, WE DID THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={style.card}>
          <h1 className={style.title}>FIND OUR RESTAURANTS</h1>
          <p className={style.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={style.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={style.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={style.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={style.card}>
          <h1 className={style.title}>WORKING HOURS</h1>
          <p className={style.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={style.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
