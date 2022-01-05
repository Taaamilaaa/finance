import { useState } from "react";
import styles from "./header.module.css";

export const TickerButton = ({ data }) => {

  return (
    <>
      <button type = "button" className={styles.button}>
        <div className={styles.arrowButton}>
          <div>↑</div>
        </div>
        <div>
          <h5>{data.ticker}</h5>
          <p>{data.price}</p>
        </div>
        <div>
          <p>{data.change_percent}%</p>
          <p>{data.change}</p>
        </div>
      </button>
    </>
  );
};
