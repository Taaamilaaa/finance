import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Header/Filter"
import { TickerList } from "./components/Main/TickerList";
import { getTickers } from "./redux/ticker/tickerOperations";

function App() {
  // const [oldPrices, setOldPrices] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTickers());  
  }, [dispatch]);

  const prices = useSelector(state => state.data.tickers).map(ticker => ticker.price)

  // const setPrice = () => setOldPrices(prices);
    
  // setInterval(() => {
  //   setPrice()
  // }, 7000);

  //   const difference = () => {
  //   if (oldPrices.length === 0) {
  //     return;
  //   }   
  //   const arrDiff = oldPrices.map(oldPrice =>
  //     Number(oldPrice) - Number(prices[oldPrices.indexOf(oldPrice)]))
  //   return arrDiff;
  // };

  return (
    <>
      <header className="header">
        {/* <Header oldPrices={oldPrices} currentPrices={prices} arrOfDifference={difference()} /> */}
        {/* <Header oldPrices={oldPrices} currentPrices={prices} /> */}
        <Header/>
        <Filter />
      </header>
      <main>
        <TickerList/>

      </main>
    </>
  );
}

export default App;
