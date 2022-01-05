import { TickerButton } from "./TickerButton";
import { useSelector } from "react-redux";


import styles from "./header.module.css";

export const Header = ({oldPrices, currentPrices}) => {
  const tickers = useSelector((state) => state.data.tickers);
 
  // eslint-disable-next-line
  const difference = () => {
    if (oldPrices.length !== 0 && currentPrices !== void 0) {  
      return oldPrices.map((oldPrice) => {
        return console.log(oldPrices[oldPrices.indexOf(oldPrice)]);
      // const diff = Number(oldPrice) - 
    //   return oldPrices.forEach(oldPrice => {
    //  const diff = Number(oldPrice) - Number(currentPrice)
    //   return  console.log(`OLD: ${oldPrice}, CURRENT: ${currentPrice}, DIFF: ${diff}`);
    // });

    
      })
    }

  }
console.log(difference());
  return (
    <ul className={styles.list}>
      {tickers.map((ticker) => {
        return (
          <li className={styles.item} key={ticker.ticker}>
            <TickerButton data={ticker} />
          </li>
        );
      })}
    </ul>
  );
};
