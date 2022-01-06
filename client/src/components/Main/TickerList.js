import { useSelector } from "react-redux";
import styles from "./main.module.css";
export const TickerList = ({filter}) => {
  const tickers = useSelector((state) => state.data.tickers);

  const getVisibleStocks = (stocksArr, filter) => {
    if (filter !== '') {
      return stocksArr.filter(stock => {
        return stock.ticker.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return tickers;
  };

  const visibleStocks = getVisibleStocks(tickers, filter)
 
  return (
    <>
      <h3>Вас могут заинтересовать:</h3>
      <ul className = {styles.titleList}>
        <li className={styles.itemTitle}>Name</li>
        <li className={styles.itemTitle}>Price</li>
        <li className={styles.itemTitle}>Change</li>
        <li className={styles.itemTitle}>Change %</li>
        <li className={styles.itemTitle}>Yield</li>
        <li className={styles.itemTitle}>Dividend</li>
      </ul>
      <ul>
        {visibleStocks.map((ticker) => {
          const profit = Number(ticker.price) - Number(ticker.change) > 0;
          return (
            <li key={ticker.ticker} className={styles.item}>
              
                <span className={styles.name}>{ticker.ticker}</span>
                <span className={styles.dataItem}>{ticker.price} $</span>
                <span
                  className={
                    profit ? styles.dataItem_profit : styles.dataItem_loss
                  }
                >
                  {profit ? "+" : "-"}
                  {ticker.change}
                </span>
                <span
                  className={
                    profit ? styles.dataItem_profit : styles.dataItem_loss
                  }
                >
                  {profit ? "+" : "-"}
                  {ticker.change_percent}%
                </span>
                 <span className={styles.dataItem}>{ticker.yield} </span>
                 <span className={styles.dataItem}>{ticker.dividend} </span>
                {profit ? (
                  <span className={styles.greenArrow}>🠕</span>
                ) : (
                  <span className={styles.redArrow}>🠗</span>
                )}
             
            </li>
          );
        })}
      </ul>
    </>
  );
};
