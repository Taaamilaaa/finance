import styles from "./header.module.css";

export const TickerButton = ({ data }) => {
  const profit = Number(data.price) - Number(data.change) > 0;
  return (
    <>
      <button type="button" className={styles.button}>
        <div className={styles.arrowButton}>
          {profit ? (
            <div className={styles.greenArrowButton}>🠕</div>
          ) : (
            <div className={styles.redArrowButton}>🠗</div>
          )}
        </div>
        <div>
          <h5 className={styles.text}>{data.ticker}</h5>
          <p className={styles.text}>{data.price}</p>
        </div>
        <div>
          <p className={profit ? styles.text_profit : styles.text_loss}>
            {profit ? "+" : "-"}
            {data.change_percent}%
          </p>
          <p className={profit ? styles.text_profit : styles.text_loss}>
            {profit ? "+" : "-"}
            {data.change}
          </p>
        </div>
      </button>
    </>
  );
};
