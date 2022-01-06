import { useSelector } from "react-redux";
import styles from "./main.module.css";
import { TickerItem } from "./TickerItem";

export const TickerList = ({ filter }) => {
  const tickers = useSelector((state) => state.data.tickers);
  const getVisibleStocks = (stocksArr, filter) => {
    if (filter !== "") {
      return stocksArr.filter((stock) => {
        return stock.ticker.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return tickers;
  };
  const visibleStocks = getVisibleStocks(tickers, filter);
  return (
    <div className={styles.container}>
      <ul className={styles.titleList}>
        <li className={styles.itemTitle}>Name</li>
        <li className={styles.itemTitle}>Price</li>
        <li className={styles.itemTitle}>Change</li>
        <li className={styles.itemTitle}>Change %</li>
        <li className={styles.itemTitle}>Yield</li>
        <li className={styles.itemTitle}>Dividend</li>
      </ul>
      <ul className={styles.list}>
        {visibleStocks.length === 0 ? (
          <p>No matches</p>
        ) : (
          visibleStocks.map((ticker) => {
            return (
              <li key={ticker.ticker} className={styles.item}>
                <TickerItem key={ticker.tickers} ticker={ticker} />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};
