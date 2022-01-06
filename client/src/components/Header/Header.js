import { TickerButton } from "./TickerButton";
import { useSelector} from "react-redux";

import styles from "./header.module.css";

  export const Header = () => {
  const tickers = useSelector((state) => state.data.tickers);

  return (
    <ul className={styles.list}>
      {tickers.map((ticker) => {

        return (
          <li className={styles.item} key={ticker.ticker}>
            <TickerButton data={ticker}/>
           
          </li>
        );
      })}
    </ul>
  );
};
