import { useSelector } from "react-redux";
import styles from "./main.module.css";
export const TickerList = () => {
  const tickers = useSelector((state) => state.data.tickers);
  return (
    <>
      <h3>Вас могут заинтересовать:</h3>
      <ul>
        {tickers.map((ticker) => {
          return (
            <li key={ticker.ticker} className={styles.item}>
              <span className={styles.name} >{ticker.ticker}</span>
              <div className={styles.data}>
                <span className={styles.dataItem}>{ticker.price}</span>
                <span className={styles.dataItem}>{ticker.change}</span>
                <span className={styles.dataItem}>{ticker.change_percent}%</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
