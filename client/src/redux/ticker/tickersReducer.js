import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './tickerActions';

// getStocks
const tickers = createReducer([], {
  [actions.getTickersSuccess]: (_, { payload }) => payload,
});

// // stopStocks
// const stopped = createReducer(false, {
//   [actions.stopStocksSuccess]: () => true,
//   [actions.startStocksSuccess]: () => false,
//   [actions.intervalStocksSuccess]: () => false,
//   [actions.deleteStockSuccess]: () => false,
// });

export default combineReducers({
  tickers,
//   stopped,
});