import styles from "./header.module.css";

// export const TickerButton = ({ data, setClass}) => {

// export const TickerButton = ({ data, current, old}) => {
export const TickerButton = ({ data}) => {
const profit = Number(data.price)-Number(data.change)
return (
    <>
      <button type = "button" className={styles.button}>
        <div className={styles.arrowButton}>
          {profit>0 ? <div className={styles.greenArrowButton}>🠕</div>
          : <div className={styles.redArrowButton}>🠗</div>}          
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
