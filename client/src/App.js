import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Header/Filter"
import { TickerList } from "./components/Main/TickerList";
import { getTickers } from "./redux/ticker/tickerOperations";

function App() {
  const [oldPrices, setOldPrices] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTickers());  
  }, [dispatch]);

  const prices = useSelector(state => state.data.tickers).map(ticker => ticker.price)

  const setPrice = () => setOldPrices(prices);
    
  setInterval(() => {
    setPrice()
  }, 10000);

  return (
    <>
      <header className="header">
        <Header oldPrices = {oldPrices} currentPrices = {prices} />
        <Filter />
      </header>
      <main>
        <TickerList/>

      </main>
    </>
  );
}

export default App;
