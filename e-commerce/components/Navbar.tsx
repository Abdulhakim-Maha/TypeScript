import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "../redux/hook";
import style from "../styles/Navbar.module.scss";

const Navbar = () => {
  const quantity = useAppSelector((state) => state.cart.quntiity);
  return (
    <div className={style.container}>
      <div className={style.item}>
        <div className={style.callButton}>
          <Image src={"/img/telephone.png"} width={"32"} height={"32"} alt="" />
        </div>
        <div className={style.texts}>
          <div className={style.text}>order now</div>
          <div className={style.text}>012 345 678</div>
        </div>
      </div>
      <div className={style.item}>
        <ul className={style.list}>
          <Link href={'/'}>
            <li className={style.listItem}>Homepage</li>
          </Link>
          <li className={style.listItem}>Products</li>
          <li className={style.listItem}>Menu</li>
          <Image src={"/img/logo.png"} alt="" width={"160"} height={"96"} />
          <li className={style.listItem}>Events</li>
          <li className={style.listItem}>Blog</li>
          <li className={style.listItem}>Contact</li>
        </ul>
      </div>
      <Link href={"/cart"}>
        <div className={style.item}>
          <div className={style.cart}>
            <Image src={"/img/cart.png"} alt="" width={"30"} height={"30"} />
            <div className={style.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
