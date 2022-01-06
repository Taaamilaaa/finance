import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Header/Filter";
import { TickerList } from "./components/Main/TickerList";
import { getTickers } from "./redux/ticker/tickerOperations";

function App() {
  const [filter, setFilter] = useState("");
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickers());
  }, [dispatch]);

  const onFilter = (value) => {
    setFilter(value);
  };
  return (
    <>
     <header className="header">
        <Header />
        <Filter onFilterChange={onFilter} />
      </header>
      <main>
        <TickerList filter={filter} />
          </main>

    </>
  );
}

export default App;
