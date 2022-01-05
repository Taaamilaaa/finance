import { TickerButton } from "./TickerButton";
import { useSelector } from "react-redux";

import styles from "./header.module.css";

// export const Header = ({ arrOfDifference }) => {
  export const Header = ({ oldPrices, currentPrices }) => {
  const tickers = useSelector((state) => state.data.tickers);
  // const setClass = (arrDiff,arr, el) => {
  //   if (arrDiff !== void 0) {
  //     const currentIndex = arr.indexOf(el);
  //     if (arrDiff[currentIndex] > 0) {
    
  //       return true;
  //     }

  //     return false;
  //   }
  // };
  return (
    <ul className={styles.list}>
      {tickers.map((ticker) => {
        // const index = tickers.indexOf(ticker)
        // const current = Number(currentPrices[index])
        // const old = Number(oldPrices[index])
// console.log(Number(ticker.price)-Number(ticker.change) );
        return (
          <li className={styles.item} key={ticker.ticker}>
            <TickerButton data={ticker}/>
            {/* <TickerButton data={ticker} current={current} old = {old} /> */}
            {/* {Number(oldPrices[index]) < Number(currentPrices[index]) 
              ? <TickerButton data={ticker} setClass={true} />
              : <TickerButton data={ticker} setClass={false} />}          */}

          </li>
        );
      })}
    </ul>
  );
};
