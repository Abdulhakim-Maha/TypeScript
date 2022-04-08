import React from "react";
import styles from "../styles/Home.module.css";

const Table = ({ data }) => {
  return (
    <table className={styles.table}>
      <tbody className={styles.tbody}>
        <tr className={styles.tr}>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Surname</th>
          <th className={styles.th}>Email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id} className={styles.tr}>
            <td className={styles.td}>{item.first_name}</td>
            <td className={styles.td}>{item.last_name}</td>
            <td className={styles.td}>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
