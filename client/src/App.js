import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/Header/Header";
import { Filter } from "./components/Header/Filter";
import { TickerList } from "./components/Main/TickerList";
import { getTickers } from "./redux/ticker/tickerOperations";
import Loader from "react-loader-spinner";

function App() {
  const isLoading = useSelector((state) => state.data.isLoading);
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
      {isLoading ? (
        <Loader
          className="loader"
          type="Rings"
          color="#96afc0b4"
          height={200}
          width={200}
        />
      ) : (
        <>
          <header className="header">
            <Header />
            <Filter onFilterChange={onFilter} />
          </header>
          <main>
            <TickerList filter={filter} />
          </main>
        </>
      )}
    </>
  );
}

export default App;
