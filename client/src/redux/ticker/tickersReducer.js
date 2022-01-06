import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './tickerActions';

// getTickers
const tickers = createReducer([], {
   [actions.getTickersSuccess]: (_, { payload }) => payload,
});


export default combineReducers({
  tickers,
  

});