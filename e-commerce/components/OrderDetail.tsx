import React, { useState } from "react";
import styles from "../styles/OrderDetail.module.scss";

const OrderDetail: React.FC<{
  total: number;
  createOrder: Function;
}> = ({ total, createOrder }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phonNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleClick = () => {
    const customer = firstName + lastName;
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery</h1>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            className={styles.input}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            className={styles.input}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Phone Number
          </label>
          <input
            type="text"
            placeholder="+66 123456789"
            className={styles.input}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Address
          </label>
          <textarea
            rows={5}
            placeholder="Lardkrabang St. 562 Bangkok"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
