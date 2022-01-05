import { createAction } from "@reduxjs/toolkit";
//getNewTickers
export const getTickersRequest = createAction('tickers/GET-Request');
export const getTickersSuccess = createAction('tickers/GET-Success');
export const getTickersError = createAction('tickers/GET-Error');




// // startTickers
// export const startTickersRequest = createAction('tickers/START-Request');
// export const startTickersSuccess = createAction('tickers/START-Success');
// export const startTickersError = createAction('tickers/START-Error');
// // stopTickers
// export const stopTickersRequest = createAction('tickers/STOP-Request');
// export const stopTickersSuccess = createAction('tickers/STOP-Success');
// export const stopTickersError = createAction('tickers/STOP-Error');
// // deleteTickers
// export const deleteTickersRequest = createAction('tickers/DELETE-Request');
// export const deleteTickersSuccess = createAction('tickers/DELETE-Success');
// export const deleteTickersError = createAction('tickers/DELETE-Error');