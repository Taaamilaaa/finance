import { createAction } from "@reduxjs/toolkit";
//getNewTickers
export const getTickersRequest = createAction('tickers/GET-Request');
export const getTickersSuccess = createAction('tickers/GET-Success');
export const getTickersError = createAction('tickers/GET-Error');

// startTickers
export const isLoadingRequest = createAction('tickers/LOADING-Request');
export const isLoadingSuccess = createAction('tickers/LOADING-Success');
export const isLoadingError = createAction('tickers/LOADING-Error');

