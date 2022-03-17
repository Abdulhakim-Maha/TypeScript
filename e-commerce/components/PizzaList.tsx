import style from "../styles/PizzaList.module.scss";
import React from "react";
import PizzaCart from "./PizzaCart";
import PIZZA from '../util/Pizza'

const PizzaList: React.FC<{ pizzaList: Array<PIZZA> }> = ({ pizzaList }) => {
  // console.log(pizzaList);
  return (
    <div className={style.container}>
      <h1 className={style.title}>the best pizza in town</h1>
      <p className={style.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
        voluptatem quaerat non sunt qui, similique eligendi hic ipsam,
        doloremque deleniti rem impedit. laudantium placeat laboriosam
        necessitatibus saepe harum et possimus? Delectus.
      </p>
      <div className={style.wrapper}>
        {pizzaList.map((pizza) => {
          return <PizzaCart key={pizza._id} pizza={pizza} />;
        })}
      </div>
    </div>
  );
};

export default PizzaList;
