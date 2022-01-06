import { createAction } from "@reduxjs/toolkit";
//getNewTickers
export const getTickersRequest = createAction('tickers/GET-Request');
export const getTickersSuccess = createAction('tickers/GET-Success');
export const getTickersError = createAction('tickers/GET-Error');





