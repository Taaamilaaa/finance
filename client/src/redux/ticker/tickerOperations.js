import *as actions from "./tickerActions"
import { io } from "socket.io-client";

const socket = io('http://localhost:4000', {
  query: {
    interval: 5000,
    tickers: ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA'],
  },
});


export const getTickers = () => dispatch => {
  
      dispatch(actions.getTickersRequest());
  try {
    socket.emit('start').on('ticker', data => {
      dispatch(actions.getTickersSuccess(data));
      if (data.length === 0) {
        return socket.disconnect();
      }
    });
  } catch (error) {
    dispatch(actions.getTickersError(error));
  }
 

};



// export const startTickers = () => dispatch => {
//   dispatch(actions.startTickersRequest());
//   try {
//     socket.emit('start').on('ticker', data => {
//       dispatch(actions.startTickersSuccess(data));
//       if (data.length === 0) {
//         return socket.disconnect();
//       }
//     });
//   } catch (error) {
//     dispatch(actions.startTickersError(error));
//   }
// };
// export const stopTickers = () => dispatch => {
//   dispatch(actions.stopTickersRequest());
//   try {
//     socket.emit('start').on('ticker', data => {
//       dispatch(actions.stopTickersSuccess(data));
//       if (data.length === 0) {
//         return socket.disconnect();
//       }
//     });
//   } catch (error) {
//     dispatch(actions.stopTickersError(error));
//   }
// };
// export const deleteTickers = () => dispatch => {
//   dispatch(actions.deleteTickersRequest());
//   try {
//     socket.emit('start').on('ticker', data => {
//       dispatch(actions.deleteTickersSuccess(data));
//       if (data.length === 0) {
//         return socket.disconnect();
//       }
//     });
//   } catch (error) {
//     dispatch(actions.deleteTickersError(error));
//   }
// };