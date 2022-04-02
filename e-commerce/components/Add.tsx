import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "../styles/Add.module.scss";

const Add: React.FC<{ setClose: Dispatch<SetStateAction<boolean>> }> = ({
  setClose,
}) => {
  const [file, setFile] = useState<FileList | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);
  const [prices, setPrices] = useState<string[]>([]);
  const [extraOptions, setExtraOptions] = useState<{text:string}[]>([]);
  const [extra, setExtra] = useState<{} | null>(null);

  const changePrice = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const currenPrices: string[] = prices;
    currenPrices[i] = e.target.value;
    setPrices(currenPrices);
  };
  const handleExtraInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };
  const handleExtra = () => {
    // setExtraOptions((prev) => [...prev, extra]);
  };
  const handleCreate = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={() => setClose(true)}>
          X
        </span>
        <h1>Add a new Chicken</h1>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Choose an image
          </label>
          <input type="file" onChange={(e) => setFile(e.target.files)} />
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Title
          </label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Desc
          </label>
          <textarea rows={4} onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Prices
          </label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inpuSm}`}
              type="number"
              placeholder="Small"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inpuSm}`}
              type="number"
              placeholder="Medium"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inpuSm}`}
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Extra
          </label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
