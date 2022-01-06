import styles from "./main.module.css";

export const TickerItem = ({ ticker }) => {
  const profit = Number(ticker.price) - Number(ticker.change) > 0;
  return (
    <>
      <span className={profit ? styles.name_profit : styles.name_loss}>
        {ticker.ticker}
      </span>
      <span className={profit ? styles.dataItem_profit : styles.dataItem_loss}>
        {ticker.price} $
      </span>
      <span className={profit ? styles.dataItem_profit : styles.dataItem_loss}>
        {profit ? "+" : "-"}
        {ticker.change}
      </span>
      <span className={profit ? styles.dataItem_profit : styles.dataItem_loss}>
        {profit ? "+" : "-"}
        {ticker.change_percent}%
      </span>
      <span className={profit ? styles.dataItem_profit : styles.dataItem_loss}>
        {ticker.yield}{" "}
      </span>
      <span className={profit ? styles.dataItem_profit : styles.dataItem_loss}>
        {ticker.dividend}{" "}
      </span>
      {profit ? (
        <span className={styles.greenArrow}>↥</span>
      ) : (
        <span className={styles.redArrow}>↧</span>
      )}
    </>
  );
};
