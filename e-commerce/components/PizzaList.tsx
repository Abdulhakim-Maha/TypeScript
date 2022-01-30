import style from "../styles/PizzaList.module.scss";
import React from "react";
import PizzaCart from "./PIzzaCart";

const PizzaList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.titl}>the best pizza in town</h1>
      <p className={style.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
        voluptatem quaerat non sunt qui, similique eligendi hic ipsam,
        doloremque deleniti rem impedit. laudantium placeat laboriosam
        necessitatibus saepe harum et possimus? Delectus.
      </p>
	  <div className={style.wrapper}>
		  <PizzaCart/>    
		  <PizzaCart/>    
		  <PizzaCart/>    
		  <PizzaCart/>    
		  <PizzaCart/>    
		  <PizzaCart/>    
		  <PizzaCart/>    
		  <PizzaCart/>    
	  </div>
    </div>
  );
};

export default PizzaList;
