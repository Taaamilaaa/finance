import { configureStore } from "@reduxjs/toolkit";

import tickerReducer from "./ticker/tickersReducer";


export const store = configureStore({
  reducer: {
    data: tickerReducer,    
    },
    devTools: process.env.NODE_ENV === 'development',
});
