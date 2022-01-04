import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header/Header";
import {Filter} from "./components/Header/Filter"
import { getTickers } from "./redux/ticker/tickerOperations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickers());
  });

  return (
    <>
      <header className="header">
        <Header />
        <Filter />
      </header>
      <main>

      </main>
    </>
  );
}

export default App;
