import Image from "next/image";
import axios from "axios";
import { GetServerSideProps } from "next";
import React, { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import style from "../../styles/Product.module.scss";
import { ParsedUrlQuery } from "querystring";
import PIZZA from "../../util/Pizza";
import { useAppDispatch } from "../../redux/hook";
import { addProduct ,reset} from "../../redux/cartSlice";

export interface extraOptions {
  _id: number;
  text: string;
  price: number;
}

const ID: React.FC<{ pizza: PIZZA }> = ({ pizza }) => {
  // console.log(pizza);
  const [size, setSize] = useState<number>(0);
  const [price, setPrice] = useState<number>(pizza.prices[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [extras, setExtras] = useState<extraOptions[]>([]);
  const dispatch = useAppDispatch();

  const changePrice = (num: number) => {
    setPrice(price + num);
  };

  const handleSize = (idx: number) => {
    const diff = pizza.prices[idx] - pizza.prices[size];
    setSize(idx);
    changePrice(diff);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    option: extraOptions
  ) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((ex) => ex._id !== option._id));
    }
  };

  const handleClick = () => {
    // console.log({...pizza,extras,price,quantity});
    dispatch(addProduct({...pizza,extras,price,quantity}));
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.imgContainer}>
          <Image src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={style.right}>
        <h1 className={style.titlt}>{pizza.title}</h1>
        <span className={style.price}>${price}</span>
        <p className={style.desc}>{pizza.desc}</p>
        <h3 className={style.choose}>Choose your size</h3>
        <div className={style.sizes}>
          <div className={style.size} onClick={() => handleSize(0)}>
            <Image src={"/img/size.png"} layout="fill" />
            <span className={style.number}>Small</span>
          </div>
          <div className={style.size} onClick={() => handleSize(1)}>
            <Image src={"/img/size.png"} layout="fill" />
            <span className={style.number}>Medium</span>
          </div>
          <div className={style.size} onClick={() => handleSize(2)}>
            <Image src={"/img/size.png"} layout="fill" />
            <span className={style.number}>Large</span>
          </div>
        </div>
        <h3 className={style.choose}>Choose additional ingredients</h3>
        <div className={style.ingredients}>
          {pizza.extraOptions.map((option) => {
            return (
              <div className={style.option} key={option._id}>
                <input
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  onChange={(e) => handleChange(e, option)}
                  className={style.checkbox}
                />
                <label htmlFor="double">{option.text}</label>
              </div>
            );
          })}
        </div>
        <div className={style.add}>
          <input
            onChange={(e) => setQuantity(+e.target.value)}
            type="number"
            defaultValue={1}
            className={style.quantity}
          />
          <button className={style.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

interface IdParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IdParams;
  // console.log(id);

  const res = await axios.get(`http://localhost:3000/api/products/${id}`);
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default ID;
