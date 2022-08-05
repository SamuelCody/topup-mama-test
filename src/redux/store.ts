import { configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/rootReducer";
// import { loadToken } from "./token";

const LoggerMiddleware = createLogger();

// const persistedState = loadToken();

const store = configureStore({
  reducer: rootReducer,
  // preloadedState: {
  //   auth: { authenticated: `${persistedState ? true : false}` },
  // },
  middleware: [LoggerMiddleware, ThunkMiddleware],
});

export default store;
