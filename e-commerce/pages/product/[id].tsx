import Image from "next/image";
import React, { useState } from "react";
import style from "../../styles/Product.module.scss";

export default () => {
  const [size, setSize] = useState<number>(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, earum?",
  };
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.imgContainer}>
          <Image src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={style.right}>
        <h1 className={style.titlt}>{pizza.name}</h1>
        <span className={style.price}>${pizza.price[size]}</span>
        <p className={style.desc}>{pizza.desc}</p>
        <h3 className={style.choose}>Choose your size</h3>
        <div className={style.sizes}>
          <div className={style.size} onClick={() => setSize(0)}>
            <Image src={"/img/size.png"} layout="fill" />
            <span className={style.number}>Small</span>
          </div>
          <div className={style.size} onClick={() => setSize(1)}>
            <Image src={"/img/size.png"} layout="fill" />
            <span className={style.number}>Medium</span>
          </div>
          <div className={style.size} onClick={() => setSize(2)}>
            <Image src={"/img/size.png"} layout="fill" />
            <span className={style.number}>Large</span>
          </div>
        </div>
        <h3 className={style.choose}>Choose additional ingredients</h3>
        <div className={style.ingredients}>
          <div className={style.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={style.chexbox}
            />
            <label htmlFor="double"> Double Ingredients</label>
          </div>
          <div className={style.option}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={style.option}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={style.option}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
		 <div className={style.add}>
            <input type="number" defaultValue={1} className={style.quantity}/>
            <button className={style.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
