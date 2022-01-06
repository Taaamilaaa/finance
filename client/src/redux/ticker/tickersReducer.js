import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './tickerActions';

// getTickers
export const tickers = createReducer([], {
   [actions.getTickersSuccess]: (_, { payload }) => payload,
});

// isLoading
export const isLoading = createReducer(false, {
  [actions.getTickersRequest]: () => true,
  [actions.getTickersSuccess]: () => false,
});


export default combineReducers({
  tickers,
  isLoading,
});